import React from "react";

type Port = "top" | "right" | "bottom" | "left";

interface WorkflowNodeProps {
  className: string;
  icon: React.ReactNode;
  title: string;
  text: string;
  ports?: Port[];
}

export const WorkflowNode = React.forwardRef<HTMLDivElement, WorkflowNodeProps>(
  function WorkflowNode({ className, icon, title, text, ports = [] }, ref) {
    return (
      <div className={`workflowNode ${className}`} ref={ref}>
        <div>{icon}</div>
        <span>
          <strong>{title}</strong>
          <small>{text}</small>
        </span>
        {ports.map((port) => (
          <span
            key={port}
            className={`workflowPort workflowPort-${port}`}
            aria-hidden="true"
          />
        ))}
      </div>
    );
  }
);
