// draggableNode.js

export const DraggableNode = ({ type, label }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.target.style.transform = 'scale(0.95)';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    const onDragEnd = (event) => {
      event.target.style.cursor = 'grab';
      event.target.style.transform = 'scale(1)';
    };

    return (
      <div
        className={type}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={onDragEnd}
        style={{ 
          cursor: 'grab', 
          minWidth: '90px', 
          height: '70px',
          display: 'flex', 
          alignItems: 'center', 
          borderRadius: '12px',
          background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
          justifyContent: 'center', 
          flexDirection: 'column',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          border: '2px solid rgba(255, 255, 255, 0.1)',
          position: 'relative',
          overflow: 'hidden'
        }} 
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.25)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        }}
        draggable
      >
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)',
            pointerEvents: 'none'
          }} />
          <span style={{ 
            color: '#fff', 
            fontWeight: '600', 
            fontSize: '13px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            position: 'relative',
            zIndex: 1,
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
          }}>
            {label}
          </span>
      </div>
    );
  };
  