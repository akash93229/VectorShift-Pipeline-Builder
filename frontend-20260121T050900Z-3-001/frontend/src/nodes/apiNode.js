// apiNode.js
// Makes API requests

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const APINode = ({ id, data }) => {
  const [method, setMethod] = useState(data?.method || 'GET');
  const [url, setUrl] = useState(data?.url || '');

  return (
    <BaseNode
      id={id}
      title="API Request"
      className="api-node"
      inputs={[
        { id: `${id}-url`, label: 'URL' },
        { id: `${id}-body`, label: 'Body' }
      ]}
      outputs={[
        { id: `${id}-response`, label: 'Response' },
        { id: `${id}-error`, label: 'Error' }
      ]}
    >
      <label>
        <span>Method:</span>
        <select value={method} onChange={(e) => setMethod(e.target.value)}>
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
          <option value="PATCH">PATCH</option>
        </select>
      </label>
      <label>
        <span>URL:</span>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://api.example.com"
        />
      </label>
    </BaseNode>
  );
};
