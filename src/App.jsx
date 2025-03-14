import {
  addEdge,
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  ReactFlowProvider,
  useEdgesState,
  useNodesState,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import React, { useCallback, useEffect } from 'react';
import { initialEdges, initialNodes } from './components/mockFlowData';
import CircleNode from "./components/customNodes/CircleNode";
import DiamondNode from "./components/customNodes/DiamondNode";


const connectionLineStyle = { stroke: "#fff" };
const snapGrid = [20, 20];
const nodeTypes = {
  diamond: DiamondNode,
  circle: CircleNode
};


export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  useEffect(() => {
    setNodes(initialNodes);
    setEdges(initialEdges);
  }, [setEdges, setNodes]);

  return (
    <ReactFlowProvider>
      <div style={{ width: '100vw', height: '100vh' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          connectionLineStyle={connectionLineStyle}
          snapToGrid={true}
          snapGrid={snapGrid}
          fitView
          style={{ background: "#333" }}
          attributionPosition="bottom-left"
        >
          <Controls />
          <MiniMap />
          <Background variant="dots" gap={12} size={1} />
        </ReactFlow>
      </div>
    </ReactFlowProvider>
  );
}
