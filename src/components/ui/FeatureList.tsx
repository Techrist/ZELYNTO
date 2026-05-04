import React from "react";
import { CheckCircle2 } from "lucide-react";

interface FeatureListProps {
  items: string[];
  iconSize?: number;
}

export function FeatureList({ items, iconSize = 18 }: FeatureListProps) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>
          <CheckCircle2 size={iconSize} />
          {item}
        </li>
      ))}
    </ul>
  );
}
