# VectorShift Frontend Technical Assessment

A visual pipeline builder for creating AI workflows, similar to no-code tools like Zapier or n8n.

## 🎯 Features Implemented

### 1. Node Abstraction ✅
- **BaseNode Component**: Reusable abstraction eliminating code duplication
- Supports configurable:
  - Title
  - Multiple input/output handles
  - Custom content
  - Unified styling
  - Dynamic handle positioning

### 2. Node Types ✅
**Original Nodes (Refactored):**
- Input Node
- Output Node
- Text Node (with enhanced features)
- LLM Node

**5 Additional Nodes:**
1. **API Node** - Make HTTP requests (GET, POST, PUT, DELETE, PATCH)
2. **Transform Node** - Data transformations (uppercase, lowercase, trim, reverse, length)
3. **Conditional Node** - Branching logic with comparison operators
4. **Filter Node** - Filter data based on conditions (contains, equals, regex, etc.)
5. **Database Node** - Database operations (query, insert, update, delete)

### 3. Modern Styling ✅
- Clean, gradient-based design
- Consistent spacing and borders
- Smooth hover effects and transitions
- Color-coded node types
- Professional shadows and rounded corners
- Responsive input fields

### 4. Text Node Enhanced Logic ✅
- **Auto-resize**: Textarea automatically adjusts width and height based on content
- **Variable Detection**: Regex pattern `{{variableName}}` detection
- **Dynamic Handles**: Creates input handles for each detected variable
- **Visual Feedback**: Shows detected variables as badges
- **Valid JS Identifiers**: Only matches valid JavaScript variable names

### 5. Backend Integration ✅
- FastAPI backend with CORS support
- Endpoint: `POST /pipelines/parse`
- Returns:
  - `num_nodes`: Count of nodes
  - `num_edges`: Count of edges
  - `is_dag`: Boolean for DAG validation

### 6. DAG Validation ✅
- Implements Kahn's algorithm (topological sort)
- Detects cycles in the pipeline
- Returns true if valid DAG, false if contains cycles

### 7. Frontend Alert ✅
- User-friendly alert displaying:
  - Number of nodes
  - Number of edges
  - DAG validation status with visual indicators (✓/✗)
- Error handling for backend connectivity issues

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- Python 3.8+
- npm or yarn

### Frontend Setup

```bash
cd frontend-20260121T050900Z-3-001/frontend
npm install
npm start
```

The frontend will run on `http://localhost:3000`

### Backend Setup

```bash
cd frontend-20260121T050900Z-3-001/backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run server
python main.py
```

The backend will run on `http://localhost:8000`

## 📖 Usage

1. **Drag and Drop**: Drag nodes from the toolbar onto the canvas
2. **Connect Nodes**: Click and drag from output handles (right) to input handles (left)
3. **Configure Nodes**: Edit node properties directly in the node
4. **Text Variables**: In Text nodes, use `{{variableName}}` to create dynamic inputs
5. **Submit Pipeline**: Click "Submit Pipeline" to analyze your workflow

## 🏗️ Architecture

### Frontend Structure
```
src/
├── nodes/
│   ├── BaseNode.js          # Reusable node abstraction
│   ├── BaseNode.css         # Unified styling
│   ├── inputNode.js         # Input node
│   ├── outputNode.js        # Output node
│   ├── textNode.js          # Text node with variable detection
│   ├── llmNode.js           # LLM node
│   ├── apiNode.js           # API request node
│   ├── transformNode.js     # Data transformation node
│   ├── conditionalNode.js   # Conditional branching node
│   ├── filterNode.js        # Filter node
│   └── databaseNode.js      # Database operations node
├── App.js                   # Main app component
├── ui.js                    # ReactFlow canvas
├── toolbar.js               # Node toolbar
├── submit.js                # Submit button with backend integration
├── store.js                 # Zustand state management
└── draggableNode.js         # Draggable node component
```

### Backend Structure
```
backend/
├── main.py                  # FastAPI application
├── requirements.txt         # Python dependencies
└── README.md               # Backend documentation
```

## 🔧 Technical Details

### BaseNode Abstraction
The `BaseNode` component provides:
- Automatic handle positioning based on count
- Flexible content rendering via children
- Consistent styling across all node types
- Support for custom styles and classes

### Variable Detection (Text Node)
- Regex: `/\{\{([a-zA-Z_$][a-zA-Z0-9_$]*)\}\}/g`
- Matches valid JavaScript identifiers
- Creates unique input handles for each variable
- Updates dynamically as text changes

### DAG Validation Algorithm
Uses Kahn's algorithm:
1. Build adjacency list from edges
2. Calculate in-degrees for all nodes
3. Process nodes with zero in-degree using BFS
4. If all nodes processed → DAG
5. If nodes remain → Contains cycle

## 🎨 Design Decisions

### Focus on Structure and Validation
This project prioritizes pipeline structure and graph validation over execution. The goal is to ensure workflows are well-formed (DAG) before any processing occurs, preventing infinite loops and ensuring deterministic execution order.

### BaseNode Abstraction
The `BaseNode` component eliminates code duplication across node types while maintaining flexibility. Each node can customize its content and behavior while inheriting consistent styling, handle positioning, and structure. This pattern makes adding new node types straightforward and maintainable.

### Stateless Backend
The backend is intentionally stateless with no database or persistence layer. It focuses solely on validating pipeline structure using Kahn's algorithm for DAG detection. This keeps the API simple, fast, and easy to understand while demonstrating core graph theory concepts.

### Emphasis on Clarity
Code is written to be readable and maintainable rather than clever. Variable names are descriptive, functions have single responsibilities, and comments explain the "why" not the "what". The project structure is flat and intuitive, making it easy for other engineers to understand and extend.

## 📝 API Documentation

### POST /pipelines/parse

**Request Body:**
```json
{
  "nodes": [
    {
      "id": "node-1",
      "type": "customInput",
      "position": {"x": 100, "y": 100},
      "data": {}
    }
  ],
  "edges": [
    {
      "id": "edge-1",
      "source": "node-1",
      "target": "node-2"
    }
  ]
}
```

**Response:**
```json
{
  "num_nodes": 5,
  "num_edges": 4,
  "is_dag": true
}
```

## 🧪 Testing the Application

1. Create a simple pipeline: Input → Text → Output
2. Add variables in Text node: `Hello {{name}}, welcome to {{place}}!`
3. Observe dynamic input handles appearing
4. Connect nodes to form a workflow
5. Click Submit to see analysis
6. Try creating a cycle to test DAG validation

## 📦 Dependencies

### Frontend
- React 18.2.0
- ReactFlow 11.8.3
- Zustand (state management)

### Backend
- FastAPI 0.104.1
- Uvicorn 0.24.0
- Pydantic 2.5.0

## 🎓 Interview Quality Code

This implementation demonstrates:
- Clean architecture and separation of concerns
- Reusable component patterns
- Modern React hooks (useState, useEffect, useRef)
- Proper state management with Zustand
- RESTful API design
- Algorithm implementation (Kahn's algorithm)
- Error handling and user feedback
- Type safety with Pydantic
- CORS configuration
- Professional styling and UX

## 📄 License

This is a technical assessment project for VectorShift.
