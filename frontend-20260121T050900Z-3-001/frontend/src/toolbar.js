// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{ 
            padding: '20px 24px', 
            background: 'linear-gradient(to bottom, #ffffff 0%, #f8fafc 100%)', 
            borderBottom: '1px solid #e2e8f0',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
        }}>
            {/* Header with Logo */}
            <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                marginBottom: '16px'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    {/* Logo SVG - Modern V with Pipeline */}
                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="44" height="44" rx="10" fill="url(#logoGradient)"/>
                        <defs>
                            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style={{stopColor:'#667eea'}} />
                                <stop offset="100%" style={{stopColor:'#764ba2'}} />
                            </linearGradient>
                        </defs>
                        {/* V Letter */}
                        <path d="M 10 12 L 16 30 L 22 12" 
                              stroke="white" 
                              strokeWidth="3" 
                              fill="none" 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              opacity="0.95"/>
                        {/* Pipeline Lines */}
                        <line x1="24" y1="15" x2="34" y2="15" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.9"/>
                        <line x1="24" y1="22" x2="34" y2="22" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.9"/>
                        <line x1="24" y1="29" x2="34" y2="29" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.9"/>
                        {/* Connection Dots */}
                        <circle cx="34" cy="15" r="2" fill="white" opacity="0.95"/>
                        <circle cx="34" cy="22" r="2" fill="white" opacity="0.95"/>
                        <circle cx="34" cy="29" r="2" fill="white" opacity="0.95"/>
                    </svg>
                    
                    {/* Title */}
                    <div>
                        <div style={{ 
                            fontSize: '20px', 
                            fontWeight: '700', 
                            color: '#1e293b',
                            letterSpacing: '-0.5px',
                            lineHeight: '1.2'
                        }}>
                            VectorShift Pipeline Builder
                        </div>
                        <div style={{
                            fontSize: '12px',
                            color: '#64748b',
                            fontWeight: '500'
                        }}>
                            Visual AI Workflow Designer
                        </div>
                    </div>
                </div>
                
                {/* Version Badge */}
                <div style={{
                    padding: '6px 12px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    borderRadius: '6px',
                    fontSize: '11px',
                    fontWeight: '600',
                    letterSpacing: '0.5px'
                }}>
                    v1.0
                </div>
            </div>
            
            {/* Pipeline Nodes Section */}
            <div style={{ 
                marginBottom: '12px', 
                fontSize: '14px', 
                fontWeight: '600', 
                color: '#475569',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
            }}>
                🎨 Pipeline Nodes
            </div>
            <div style={{ 
                marginBottom: '16px', 
                padding: '12px 16px', 
                background: 'linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%)', 
                borderRadius: '10px',
                fontSize: '13px',
                color: '#1e40af',
                border: '2px solid #93c5fd',
                boxShadow: '0 2px 8px rgba(59, 130, 246, 0.1)',
                fontWeight: '500'
            }}>
                💡 <strong>Drag and drop</strong> nodes onto the canvas below to build your pipeline
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='api' label='API' />
                <DraggableNode type='transform' label='Transform' />
                <DraggableNode type='conditional' label='Conditional' />
                <DraggableNode type='filter' label='Filter' />
                <DraggableNode type='database' label='Database' />
            </div>
        </div>
    );
};
