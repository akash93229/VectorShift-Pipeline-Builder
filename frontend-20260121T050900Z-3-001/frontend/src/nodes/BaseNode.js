// BaseNode.js
// Reusable abstraction for all node types

import { Handle, Position } from 'reactflow';
import './BaseNode.css';

export const BaseNode = ({
  id,
  title,
  inputs = [],
  outputs = [],
  children,
  className = '',
  style = {}
}) => {
  return (
    <div className={`base-node ${className}`} style={style}>
      {/* Input Handles */}
      {inputs.map((input, index) => (
        <Handle
          key={`input-${index}`}
          type="target"
          position={Position.Left}
          id={input.id || `${id}-input-${index}`}
          style={{
            top: inputs.length === 1 ? '50%' : `${((index + 1) * 100) / (inputs.length + 1)}%`,
            ...input.style
          }}
          title={input.label}
        />
      ))}

      {/* Node Header */}
      <div className="base-node-header">
        <span className="base-node-title">{title}</span>
      </div>

      {/* Node Content */}
      <div className="base-node-content">
        {children}
      </div>

      {/* Output Handles */}
      {outputs.map((output, index) => (
        <Handle
          key={`output-${index}`}
          type="source"
          position={Position.Right}
          id={output.id || `${id}-output-${index}`}
          style={{
            top: outputs.length === 1 ? '50%' : `${((index + 1) * 100) / (outputs.length + 1)}%`,
            ...output.style
          }}
          title={output.label}
        />
      ))}
    </div>
  );
};
