# 🚀 VectorShift Pipeline Builder

<div align="center">

![Pipeline Builder](https://img.shields.io/badge/Pipeline-Builder-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)
![FastAPI](https://img.shields.io/badge/FastAPI-0.104.1-009688?style=for-the-badge&logo=fastapi)
![Python](https://img.shields.io/badge/Python-3.8+-3776AB?style=for-the-badge&logo=python)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**A powerful visual pipeline builder for creating AI workflows with drag-and-drop simplicity**

[Features](#-features) • [Demo](#-demo) • [Quick Start](#-quick-start) • [Documentation](#-documentation) • [Architecture](#-architecture)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Demo](#-demo)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Node Types](#-node-types)
- [Architecture](#-architecture)
- [API Documentation](#-api-documentation)
- [Technical Highlights](#-technical-highlights)
- [Development](#-development)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Overview

VectorShift Pipeline Builder is a modern, intuitive visual workflow editor inspired by no-code platforms like Zapier and n8n. Built with React and FastAPI, it enables users to create complex AI pipelines through a simple drag-and-drop interface.

### Why This Project?

- **Visual First**: Build complex workflows without writing code
- **DAG Validation**: Ensures your pipelines are cycle-free and executable
- **Extensible**: Easy to add new node types and functionality
- **Production Ready**: Clean architecture, error handling, and professional UX

---

## ✨ Features

### 🎨 Core Functionality

- ✅ **Drag & Drop Interface** - Intuitive node placement and connection
- ✅ **10 Node Types** - Input, Output, Text, LLM, API, Transform, Conditional, Filter, Database, and more
- ✅ **Smart Variable Detection** - Automatic input handle creation from `{{variables}}`
- ✅ **DAG Validation** - Real-time cycle detection using Kahn's algorithm
- ✅ **Pipeline Analysis** - Get insights on node count, edge count, and graph validity
- ✅ **Modern UI** - Gradient designs, smooth animations, and responsive layouts

### 🔧 Technical Features

- **BaseNode Abstraction** - Reusable component eliminating code duplication
- **Dynamic Handle Positioning** - Automatic layout based on input/output count
- **State Management** - Zustand for efficient React state handling
- **RESTful API** - FastAPI backend with automatic documentation
- **Type Safety** - Pydantic models for request/response validation
- **CORS Support** - Ready for cross-origin requests

---

## 🎬 Demo

### Creating a Pipeline

1. **Drag nodes** from the toolbar onto the canvas
2. **Connect nodes** by dragging from output (right) to input (left) handles
3. **Configure nodes** by editing properties directly
4. **Submit pipeline** to analyze structure and validate DAG

### Text Node with Variables

```
Hello {{name}}, welcome to {{place}}!
Your order {{orderId}} is ready.
```

The Text node automatically detects variables and creates input handles for `name`, `place`, and `orderId`.

### Pipeline Validation

When you submit a pipeline, you'll see:
- 📊 **Number of Nodes**: Total nodes in your workflow
- 🔗 **Number of Edges**: Total connections
- ✅ **DAG Status**: Whether the pipeline is valid (no cycles)

---

## 🚀 Quick Start

### Prerequisites

- Node.js 14+ and npm
- Python 3.8+
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/akash93229/VectorShift-Pipeline-Builder.git
cd VectorShift-Pipeline-Builder
```

2. **Setup Frontend**
```bash
cd frontend-20260121T050900Z-3-001/frontend
npm install
npm start
```
Frontend runs on `http://localhost:3000`

3. **Setup Backend** (in a new terminal)
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
Backend runs on `http://localhost:8000`

4. **Start Building!** 🎉
   - Open `http://localhost:3000` in your browser
   - Drag nodes from the toolbar
   - Connect them to create workflows
   - Click "Submit Pipeline" to validate

---

## 📁 Project Structure

```
VectorShift-Pipeline-Builder/
├── frontend-20260121T050900Z-3-001/
│   ├── frontend/                    # React application
│   │   ├── src/
│   │   │   ├── nodes/              # Node components
│   │   │   │   ├── BaseNode.js     # Reusable node abstraction
│   │   │   │   ├── BaseNode.css    # Unified styling
│   │   │   │   ├── inputNode.js    # Input node
│   │   │   │   ├── outputNode.js   # Output node
│   │   │   │   ├── textNode.js     # Text with variable detection
│   │   │   │   ├── llmNode.js      # LLM integration
│   │   │   │   ├── apiNode.js      # HTTP requests
│   │   │   │   ├── transformNode.js # Data transformations
│   │   │   │   ├── conditionalNode.js # Branching logic
│   │   │   │   ├── filterNode.js   # Data filtering
│   │   │   │   └── databaseNode.js # Database operations
│   │   │   ├── App.js              # Main application
│   │   │   ├── ui.js               # ReactFlow canvas
│   │   │   ├── toolbar.js          # Node toolbar
│   │   │   ├── submit.js           # Pipeline submission
│   │   │   ├── store.js            # Zustand state
│   │   │   └── draggableNode.js    # Drag functionality
│   │   ├── public/                 # Static assets
│   │   └── package.json            # Dependencies
│   │
│   └── backend/                    # FastAPI application
│       ├── main.py                 # API endpoints & DAG validation
│       ├── requirements.txt        # Python dependencies
│       └── README.md              # Backend docs
│
└── README.md                       # This file
```

---

## 🧩 Node Types

### Original Nodes

| Node | Description | Inputs | Outputs |
|------|-------------|--------|---------|
| **Input** | Entry point for data | 0 | 1 |
| **Output** | Exit point for results | 1 | 0 |
| **Text** | Text with variable detection | Dynamic | 1 |
| **LLM** | Language model integration | 2 | 1 |

### Additional Nodes

| Node | Description | Configuration |
|------|-------------|---------------|
| **API** | Make HTTP requests | Method (GET/POST/PUT/DELETE/PATCH), URL, Headers |
| **Transform** | Data transformations | Operation (uppercase, lowercase, trim, reverse, length) |
| **Conditional** | Branching logic | Operator (==, !=, >, <, >=, <=), Value |
| **Filter** | Filter data | Condition (contains, equals, startsWith, endsWith, regex) |
| **Database** | Database operations | Operation (query, insert, update, delete), Table, Query |

---

## 🏗️ Architecture

### Frontend Architecture

```
┌─────────────────────────────────────────┐
│           React Application             │
├─────────────────────────────────────────┤
│  ┌──────────┐  ┌──────────┐            │
│  │ Toolbar  │  │  Canvas  │            │
│  │          │  │(ReactFlow)│            │
│  └──────────┘  └──────────┘            │
│       │              │                  │
│       └──────┬───────┘                  │
│              │                          │
│       ┌──────▼──────┐                   │
│       │   Zustand   │                   │
│       │    Store    │                   │
│       └─────────────┘                   │
└─────────────────────────────────────────┘
```

### Backend Architecture

```
┌─────────────────────────────────────────┐
│          FastAPI Backend                │
├─────────────────────────────────────────┤
│  POST /pipelines/parse                  │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │  1. Receive nodes & edges       │   │
│  │  2. Build adjacency list        │   │
│  │  3. Calculate in-degrees        │   │
│  │  4. Run Kahn's algorithm        │   │
│  │  5. Return validation result    │   │
│  └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

### Data Flow

```
User Action → Zustand Store → ReactFlow → Submit Button
                                              ↓
                                         FastAPI Backend
                                              ↓
                                      DAG Validation
                                              ↓
                                      Response (JSON)
                                              ↓
                                         Alert Display
```

---

## 📡 API Documentation

### Endpoint: `POST /pipelines/parse`

Analyzes pipeline structure and validates if it's a Directed Acyclic Graph (DAG).

#### Request

```json
{
  "nodes": [
    {
      "id": "node-1",
      "type": "customInput",
      "position": {"x": 100, "y": 100},
      "data": {}
    },
    {
      "id": "node-2",
      "type": "customOutput",
      "position": {"x": 400, "y": 100},
      "data": {}
    }
  ],
  "edges": [
    {
      "id": "edge-1",
      "source": "node-1",
      "target": "node-2",
      "sourceHandle": "output",
      "targetHandle": "input"
    }
  ]
}
```

#### Response

```json
{
  "num_nodes": 2,
  "num_edges": 1,
  "is_dag": true
}
```

#### Interactive Documentation

Once the backend is running, visit:
- **Swagger UI**: `http://localhost:8000/docs`
- **ReDoc**: `http://localhost:8000/redoc`

---

## 💡 Technical Highlights

### 1. BaseNode Abstraction

Eliminates code duplication across all node types:

```javascript
<BaseNode
  id={id}
  title="API Node"
  inputs={['trigger']}
  outputs={['response', 'error']}
>
  {/* Custom node content */}
</BaseNode>
```

### 2. Variable Detection Algorithm

Text nodes use regex to detect variables and create dynamic handles:

```javascript
const regex = /\{\{([a-zA-Z_$][a-zA-Z0-9_$]*)\}\}/g;
// Matches: {{name}}, {{userId}}, {{_private}}
// Ignores: {{123}}, {{my-var}}, {{}}
```

### 3. DAG Validation (Kahn's Algorithm)

```python
def is_dag(nodes, edges):
    # Build adjacency list
    graph = defaultdict(list)
    in_degree = {node['id']: 0 for node in nodes}
    
    for edge in edges:
        graph[edge['source']].append(edge['target'])
        in_degree[edge['target']] += 1
    
    # Process nodes with zero in-degree
    queue = [node for node, degree in in_degree.items() if degree == 0]
    processed = 0
    
    while queue:
        node = queue.pop(0)
        processed += 1
        
        for neighbor in graph[node]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)
    
    return processed == len(nodes)
```

### 4. State Management

Zustand provides simple, efficient state management:

```javascript
const useStore = create((set, get) => ({
  nodes: [],
  edges: [],
  addNode: (node) => set({ nodes: [...get().nodes, node] }),
  // ... more actions
}));
```

---

## 🛠️ Development

### Adding a New Node Type

1. Create a new file in `src/nodes/yourNode.js`
2. Use BaseNode for consistency:

```javascript
import BaseNode from './BaseNode';

export const YourNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="Your Node"
      inputs={['input1']}
      outputs={['output1']}
    >
      {/* Your custom content */}
    </BaseNode>
  );
};
```

3. Register in `App.js`:

```javascript
const nodeTypes = {
  // ... existing nodes
  yourNode: YourNode,
};
```

4. Add to toolbar in `toolbar.js`

### Running Tests

```bash
# Frontend tests
cd frontend-20260121T050900Z-3-001/frontend
npm test

# Backend tests (if implemented)
cd frontend-20260121T050900Z-3-001/backend
pytest
```

### Building for Production

```bash
# Frontend
cd frontend-20260121T050900Z-3-001/frontend
npm run build

# Backend (with gunicorn)
pip install gunicorn
gunicorn main:app --workers 4 --worker-class uvicorn.workers.UvicornWorker
```

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Development Guidelines

- Follow existing code style and patterns
- Use BaseNode for new node types
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation as needed

---

## 📚 Resources

- [React Documentation](https://react.dev/)
- [ReactFlow Documentation](https://reactflow.dev/)
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [Zustand Documentation](https://github.com/pmndrs/zustand)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Akash**

- GitHub: [@akash93229](https://github.com/akash93229)
- Project: [VectorShift Pipeline Builder](https://github.com/akash93229/VectorShift-Pipeline-Builder)

---

## 🙏 Acknowledgments

- VectorShift for the technical assessment opportunity
- ReactFlow team for the excellent flow library
- FastAPI team for the modern Python framework

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ by Akash

</div>
