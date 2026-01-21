// filterNode.js
// Filters data based on conditions

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const FilterNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || 'contains');
  const [value, setValue] = useState(data?.value || '');

  return (
    <BaseNode
      id={id}
      title="Filter"
      className="filter-node"
      inputs={[{ id: `${id}-input`, label: 'Input' }]}
      outputs={[
        { id: `${id}-match`, label: 'Match' },
        { id: `${id}-nomatch`, label: 'No Match' }
      ]}
    >
      <label>
        <span>Condition:</span>
        <select value={condition} onChange={(e) => setCondition(e.target.value)}>
          <option value="contains">Contains</option>
          <option value="equals">Equals</option>
          <option value="startsWith">Starts With</option>
          <option value="endsWith">Ends With</option>
          <option value="regex">Regex</option>
        </select>
      </label>
      <label>
        <span>Value:</span>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Filter value"
        />
      </label>
    </BaseNode>
  );
};
