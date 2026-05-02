import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { detectIntent } from "./core/natural-language";
import { runContinuousAudit } from "./features/audit";
import { answerM365Exploration } from "./features/exploration";
import { answerProvisioning, buildProvisioningPlan } from "./features/provisioning";
import { answerSecurity } from "./features/security";
import { GraphClientFactory } from "./m365/graph-client";
import type { ChatRequest, ChatResponse } from "../types";

dotenv.config();

const app = express();
const port = Number(process.env.PORT ?? 4100);
const graph = new GraphClientFactory().create();

app.use(cors());
app.use(express.json());

app.get("/api/health", (_request, response) => {
  const hasGraphConfig = !!(
    process.env.AZURE_TENANT_ID &&
    process.env.AZURE_CLIENT_ID &&
    process.env.AZURE_CLIENT_SECRET
  );
  response.json({
    status: "ok",
    service: "zelynto-api",
    graph: hasGraphConfig ? "configured" : "mock"
  });
});

app.post("/api/chat", async (request, response, next) => {
  try {
    const body = request.body as ChatRequest;
    const result = await handleChat(body);
    response.json(result);
  } catch (error) {
    next(error);
  }
});

app.post("/api/actions/preview", (request, response) => {
  const body = request.body as ChatRequest;
  response.json(buildProvisioningPlan(body.prompt));
});

app.post("/api/actions/execute", async (request, response, next) => {
  try {
    const body = request.body as ChatRequest;
    response.json(await answerProvisioning(body.prompt, graph, true));
  } catch (error) {
    next(error);
  }
});

app.get("/api/security/summary", async (_request, response, next) => {
  try {
    response.json(await answerSecurity("Quelles sont les alertes critiques en cours ?", graph));
  } catch (error) {
    next(error);
  }
});

app.get("/api/audit/report", async (_request, response, next) => {
  try {
    response.json(await runContinuousAudit("Quels sont mes principaux risques actuellement ?", graph));
  } catch (error) {
    next(error);
  }
});

app.use((error: Error, _request: express.Request, response: express.Response, _next: express.NextFunction) => {
  response.status(500).json({
    error: "zelynto_api_error",
    message: error.message
  });
});

app.listen(port, "127.0.0.1", () => {
  console.log(`Zelynto API listening on http://127.0.0.1:${port}`);
});

async function handleChat(body: ChatRequest): Promise<ChatResponse> {
  const prompt = body.prompt?.trim();

  if (!prompt) {
    return {
      intent: "unknown",
      title: "Prompt vide",
      answer: "Posez une question sur votre tenant Microsoft 365 ou demandez une action à prévisualiser.",
      data: null,
      nextActions: ["Voir les alertes critiques", "Lancer un audit", "Lister les utilisateurs inactifs"]
    };
  }

  const intent = detectIntent(prompt);

  if (intent === "m365_exploration") {
    return answerM365Exploration(prompt, graph);
  }

  if (intent === "security_alerting") {
    return answerSecurity(prompt, graph);
  }

  if (intent === "m365_provisioning") {
    return answerProvisioning(prompt, graph, !body.dryRun);
  }

  if (intent === "continuous_audit") {
    return runContinuousAudit(prompt, graph);
  }

  return {
    intent: "unknown",
    title: "Intention à préciser",
    answer: "Je n'ai pas encore reconnu l'intention. Essayez une question d'exploration, de sécurité, d'audit ou de provisioning.",
    data: { prompt },
    nextActions: ["Lister les stratégies d'accès conditionnel", "Afficher les alertes critiques", "Créer un groupe Teams"]
  };
}
