import "isomorphic-fetch";
import { Client } from "@microsoft/microsoft-graph-client";
import { ConfidentialClientApplication } from "@azure/msal-node";

export class GraphClientFactory {
  create() {
    const tenantId = process.env.AZURE_TENANT_ID;
    const clientId = process.env.AZURE_CLIENT_ID;
    const clientSecret = process.env.AZURE_CLIENT_SECRET;

    if (!tenantId || !clientId || !clientSecret) {
      return new MockGraphClient();
    }

    const app = new ConfidentialClientApplication({
      auth: {
        authority: `https://login.microsoftonline.com/${tenantId}`,
        clientId,
        clientSecret
      }
    });

    return Client.init({
      authProvider: async (done) => {
        try {
          const token = await app.acquireTokenByClientCredential({
            scopes: ["https://graph.microsoft.com/.default"]
          });
          done(null, token?.accessToken ?? "");
        } catch (error) {
          done(error as Error, null);
        }
      }
    });
  }
}

export class MockGraphClient {
  api(path: string) {
    return {
      get: async () => mockGraphResponse(path),
      post: async (payload: unknown) => ({ id: "mock-created-resource", path, payload })
    };
  }
}

function mockGraphResponse(path: string) {
  if (path.includes("identity/conditionalAccess/policies")) {
    return {
      value: [
        {
          displayName: "Require MFA for admins",
          state: "enabled",
          conditions: { users: { includeRoles: ["Global Administrator"] } }
        }
      ]
    };
  }

  if (path.includes("security/alerts")) {
    return {
      value: [
        {
          id: "alert-001",
          title: "Impossible travel detected",
          severity: "high",
          status: "new"
        }
      ]
    };
  }

  if (path.includes("users")) {
    return {
      value: [
        {
          displayName: "Alex Martin",
          userPrincipalName: "alex.martin@example.com",
          signInActivity: { lastSignInDateTime: "2026-03-12T09:20:00Z" }
        }
      ]
    };
  }

  return { value: [] };
}
