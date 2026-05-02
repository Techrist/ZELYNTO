import React from "react";

interface WorkflowNodeProps {
  className: string;
  icon: React.ReactNode;
  title: string;
  text: string;
}

export function WorkflowNode({ className, icon, title, text }: WorkflowNodeProps) {
  return (
    <div className={`workflowNode ${className}`}>
      <div>{icon}</div>
      <span>
        <strong>{title}</strong>
        <small>{text}</small>
      </span>
    </div>
  );
}
