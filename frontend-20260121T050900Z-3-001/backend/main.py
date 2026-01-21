"""
FastAPI Backend for VectorShift Pipeline Builder
Handles pipeline parsing and DAG validation
"""

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Any
from collections import defaultdict, deque

app = FastAPI(title="VectorShift Pipeline API")

# Enable CORS for frontend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Node(BaseModel):
    id: str
    type: str
    position: Dict[str, float]
    data: Dict[str, Any]


class Edge(BaseModel):
    id: str
    source: str
    target: str
    sourceHandle: str = None
    targetHandle: str = None


class Pipeline(BaseModel):
    nodes: List[Node]
    edges: List[Edge]


class PipelineResponse(BaseModel):
    num_nodes: int
    num_edges: int
    is_dag: bool


def is_dag(nodes: List[Node], edges: List[Edge]) -> bool:
    """
    Check if the pipeline forms a Directed Acyclic Graph (DAG)
    Uses Kahn's algorithm (topological sort with BFS)
    
    Returns True if DAG, False if contains cycles
    """
    if not nodes:
        return True
    
    # Build adjacency list and calculate in-degrees
    graph = defaultdict(list)
    in_degree = defaultdict(int)
    
    # Initialize all nodes with in-degree 0
    node_ids = {node.id for node in nodes}
    for node_id in node_ids:
        in_degree[node_id] = 0
    
    # Build graph from edges
    for edge in edges:
        graph[edge.source].append(edge.target)
        in_degree[edge.target] += 1
    
    # Kahn's algorithm
    queue = deque([node_id for node_id in node_ids if in_degree[node_id] == 0])
    processed_count = 0
    
    while queue:
        current = queue.popleft()
        processed_count += 1
        
        # Process all neighbors
        for neighbor in graph[current]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)
    
    # If we processed all nodes, it's a DAG
    # If not, there's a cycle
    return processed_count == len(node_ids)


@app.get("/")
def read_root():
    """Health check endpoint"""
    return {"status": "ok", "message": "VectorShift Pipeline API"}


@app.post("/pipelines/parse", response_model=PipelineResponse)
def parse_pipeline(pipeline: Pipeline):
    """
    Parse pipeline and return analysis
    
    - Counts nodes and edges
    - Validates if pipeline is a DAG
    """
    try:
        num_nodes = len(pipeline.nodes)
        num_edges = len(pipeline.edges)
        dag_status = is_dag(pipeline.nodes, pipeline.edges)
        
        return PipelineResponse(
            num_nodes=num_nodes,
            num_edges=num_edges,
            is_dag=dag_status
        )
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error processing pipeline: {str(e)}")


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
