// conditionalNode.js
// Conditional branching logic

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const ConditionalNode = ({ id, data }) => {
  const [operator, setOperator] = useState(data?.operator || 'equals');
  const [compareValue, setCompareValue] = useState(data?.compareValue || '');

  return (
    <BaseNode
      id={id}
      title="Conditional"
      className="conditional-node"
      inputs={[
        { id: `${id}-input`, label: 'Input' },
        { id: `${id}-compare`, label: 'Compare' }
      ]}
      outputs={[
        { id: `${id}-true`, label: 'True' },
        { id: `${id}-false`, label: 'False' }
      ]}
    >
      <label>
        <span>Operator:</span>
        <select value={operator} onChange={(e) => setOperator(e.target.value)}>
          <option value="equals">Equals (==)</option>
          <option value="notEquals">Not Equals (!=)</option>
          <option value="greater">Greater Than (&gt;)</option>
          <option value="less">Less Than (&lt;)</option>
          <option value="greaterOrEqual">Greater or Equal (&gt;=)</option>
          <option value="lessOrEqual">Less or Equal (&lt;=)</option>
        </select>
      </label>
      <label>
        <span>Compare Value:</span>
        <input
          type="text"
          value={compareValue}
          onChange={(e) => setCompareValue(e.target.value)}
          placeholder="Value to compare"
        />
      </label>
    </BaseNode>
  );
};
