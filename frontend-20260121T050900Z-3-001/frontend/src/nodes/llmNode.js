// llmNode.js

import { BaseNode } from './BaseNode';

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="LLM"
      className="llm-node"
      inputs={[
        { id: `${id}-system`, label: 'System' },
        { id: `${id}-prompt`, label: 'Prompt' }
      ]}
      outputs={[{ id: `${id}-response`, label: 'Response' }]}
    >
      <div style={{ padding: '8px 0', color: '#64748b', fontSize: '13px' }}>
        <p style={{ margin: 0 }}>This is a LLM node.</p>
        <p style={{ margin: '4px 0 0 0', fontSize: '11px' }}>Connect system and prompt inputs.</p>
      </div>
    </BaseNode>
  );
}
