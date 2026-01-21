// transformNode.js
// Transforms data using various operations

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const TransformNode = ({ id, data }) => {
  const [operation, setOperation] = useState(data?.operation || 'uppercase');

  return (
    <BaseNode
      id={id}
      title="Transform"
      className="transform-node"
      inputs={[{ id: `${id}-input`, label: 'Input' }]}
      outputs={[{ id: `${id}-output`, label: 'Output' }]}
    >
      <label>
        <span>Operation:</span>
        <select value={operation} onChange={(e) => setOperation(e.target.value)}>
          <option value="uppercase">Uppercase</option>
          <option value="lowercase">Lowercase</option>
          <option value="trim">Trim</option>
          <option value="reverse">Reverse</option>
          <option value="length">Length</option>
        </select>
      </label>
    </BaseNode>
  );
};
