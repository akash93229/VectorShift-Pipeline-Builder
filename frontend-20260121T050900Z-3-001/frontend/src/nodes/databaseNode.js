// databaseNode.js
// Database operations

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const DatabaseNode = ({ id, data }) => {
  const [operation, setOperation] = useState(data?.operation || 'query');
  const [query, setQuery] = useState(data?.query || '');

  return (
    <BaseNode
      id={id}
      title="Database"
      className="database-node"
      inputs={[
        { id: `${id}-connection`, label: 'Connection' },
        { id: `${id}-params`, label: 'Parameters' }
      ]}
      outputs={[
        { id: `${id}-result`, label: 'Result' },
        { id: `${id}-error`, label: 'Error' }
      ]}
    >
      <label>
        <span>Operation:</span>
        <select value={operation} onChange={(e) => setOperation(e.target.value)}>
          <option value="query">Query</option>
          <option value="insert">Insert</option>
          <option value="update">Update</option>
          <option value="delete">Delete</option>
        </select>
      </label>
      <label>
        <span>Query:</span>
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="SELECT * FROM table"
          style={{ minHeight: '60px', fontFamily: 'monospace' }}
        />
      </label>
    </BaseNode>
  );
};
