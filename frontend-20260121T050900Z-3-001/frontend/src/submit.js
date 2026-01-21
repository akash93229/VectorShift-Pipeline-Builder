// submit.js

import { useState } from 'react';
import { useStore } from './store';

export const SubmitButton = () => {
    const nodes = useStore((state) => state.nodes);
    const edges = useStore((state) => state.edges);
    const [validationMessage, setValidationMessage] = useState('');

    const handleSubmit = async () => {
        setValidationMessage('');
        
        try {
            const pipelineData = {
                nodes: nodes.map(node => ({
                    id: node.id,
                    type: node.type,
                    position: node.position,
                    data: node.data
                })),
                edges: edges.map(edge => ({
                    id: edge.id,
                    source: edge.source,
                    target: edge.target,
                    sourceHandle: edge.sourceHandle,
                    targetHandle: edge.targetHandle
                }))
            };

            const response = await fetch('http://localhost:8000/pipelines/parse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(pipelineData)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();

            if (result.is_dag) {
                setValidationMessage('Pipeline is valid and ready to execute.');
            } else {
                setValidationMessage('Pipeline contains cycles and cannot be executed.');
            }

            const dagStatus = result.is_dag ? '✓ Valid DAG' : '✗ Not a DAG (contains cycles)';
            alert(
                `Pipeline Analysis:\n\n` +
                `Number of Nodes: ${result.num_nodes}\n` +
                `Number of Edges: ${result.num_edges}\n` +
                `DAG Status: ${dagStatus}`
            );

        } catch (error) {
            setValidationMessage('');
            alert(
                `Error submitting pipeline:\n\n` +
                `${error.message}\n\n` +
                `Make sure the backend server is running on http://localhost:8000`
            );
        }
    };

    const isDisabled = nodes.length === 0;

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
            padding: '24px',
            background: 'linear-gradient(to top, #ffffff 0%, #f8fafc 100%)',
            borderTop: '1px solid #e2e8f0',
            boxShadow: '0 -4px 12px rgba(0, 0, 0, 0.05)'
        }}>
            {/* Pipeline Summary Panel */}
            <div style={{
                display: 'flex',
                gap: '24px',
                fontSize: '13px',
                color: '#64748b',
                fontWeight: '500'
            }}>
                <span>Nodes: {nodes.length}</span>
                <span>Edges: {edges.length}</span>
                <span>DAG: {edges.length > 0 ? 'Pending validation' : 'N/A'}</span>
            </div>

            {/* Validation Message */}
            {validationMessage && (
                <div style={{
                    fontSize: '13px',
                    color: validationMessage.includes('valid') ? '#059669' : '#dc2626',
                    fontWeight: '500'
                }}>
                    {validationMessage}
                </div>
            )}

            {/* Submit Button */}
            <button
                type="submit"
                onClick={handleSubmit}
                disabled={isDisabled}
                style={{
                    padding: '14px 40px',
                    fontSize: '15px',
                    fontWeight: '700',
                    color: '#ffffff',
                    background: isDisabled 
                        ? '#cbd5e1' 
                        : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    border: 'none',
                    borderRadius: '12px',
                    cursor: isDisabled ? 'not-allowed' : 'pointer',
                    boxShadow: isDisabled ? 'none' : '0 8px 20px rgba(102, 126, 234, 0.4)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    opacity: isDisabled ? 0.6 : 1
                }}
                onMouseOver={(e) => {
                    if (!isDisabled) {
                        e.target.style.transform = 'translateY(-3px)';
                        e.target.style.boxShadow = '0 12px 28px rgba(102, 126, 234, 0.5)';
                    }
                }}
                onMouseOut={(e) => {
                    if (!isDisabled) {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 8px 20px rgba(102, 126, 234, 0.4)';
                    }
                }}
            >
                Submit Pipeline
            </button>

            {/* Helper Text */}
            {isDisabled && (
                <div style={{
                    fontSize: '12px',
                    color: '#94a3b8',
                    fontWeight: '500'
                }}>
                    Add nodes to submit
                </div>
            )}
        </div>
    );
}
