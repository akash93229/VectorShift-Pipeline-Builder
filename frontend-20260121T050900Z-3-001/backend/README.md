# VectorShift Backend

FastAPI backend for the VectorShift pipeline builder.

## Setup

1. Create a virtual environment:
```bash
python -m venv venv
```

2. Activate the virtual environment:
- Windows: `venv\Scripts\activate`
- Mac/Linux: `source venv/bin/activate`

3. Install dependencies:
```bash
pip install -r requirements.txt
```

## Running the Server

```bash
python main.py
```

Or with uvicorn directly:
```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

The API will be available at `http://localhost:8000`

## API Documentation

Once running, visit:
- Swagger UI: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`

## Endpoints

### POST /pipelines/parse

Analyzes a pipeline and returns:
- `num_nodes`: Number of nodes in the pipeline
- `num_edges`: Number of edges in the pipeline
- `is_dag`: Boolean indicating if the pipeline is a valid DAG

### DAG Validation

The backend uses Kahn's algorithm (topological sort) to detect cycles:
1. Builds an adjacency list from edges
2. Calculates in-degrees for all nodes
3. Processes nodes with zero in-degree
4. If all nodes are processed, it's a DAG
5. If nodes remain, there's a cycle
