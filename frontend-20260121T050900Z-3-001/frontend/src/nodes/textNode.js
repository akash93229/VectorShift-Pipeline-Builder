// textNode.js

import { useState, useEffect, useRef } from 'react';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const textareaRef = useRef(null);

  // Extract variables from text using regex
  useEffect(() => {
    // Regex to match {{variableName}} where variableName is a valid JS identifier
    const variableRegex = /\{\{([a-zA-Z_$][a-zA-Z0-9_$]*)\}\}/g;
    const matches = [...currText.matchAll(variableRegex)];
    const uniqueVars = [...new Set(matches.map(match => match[1]))];
    setVariables(uniqueVars);
  }, [currText]);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      
      // Auto-resize width based on content
      const maxLineLength = Math.max(...currText.split('\n').map(line => line.length));
      const newWidth = Math.max(200, Math.min(500, maxLineLength * 8 + 40));
      textareaRef.current.style.width = `${newWidth}px`;
    }
  }, [currText]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  // Create dynamic input handles for each variable
  const dynamicInputs = variables.map((varName, index) => ({
    id: `${id}-${varName}`,
    label: varName
  }));

  return (
    <BaseNode
      id={id}
      title="Text"
      className="text-node"
      inputs={dynamicInputs}
      outputs={[{ id: `${id}-output`, label: 'Output' }]}
    >
      <label>
        <span>Text:</span>
        <textarea
          ref={textareaRef}
          value={currText}
          onChange={handleTextChange}
          placeholder="Enter text with {{variables}}"
          style={{
            minWidth: '200px',
            minHeight: '60px',
            maxWidth: '500px',
            maxHeight: '300px'
          }}
        />
      </label>
      {variables.length > 0 && (
        <div style={{ marginTop: '8px', fontSize: '11px', color: '#64748b' }}>
          <span style={{ fontWeight: 500 }}>Variables detected:</span>
          <div style={{ marginTop: '4px' }}>
            {variables.map(varName => (
              <span key={varName} className="variable-badge">
                {varName}
              </span>
            ))}
          </div>
        </div>
      )}
    </BaseNode>
  );
}
