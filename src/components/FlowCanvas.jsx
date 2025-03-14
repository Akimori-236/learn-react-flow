import {
    addEdge,
    Background,
    Controls,
    MiniMap,
    ReactFlow,
    ReactFlowProvider,
    useEdgesState,
    useNodesState,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import React, { useCallback, useEffect } from "react";
import { useDrop } from "react-dnd";
import CircleNode from "./customNodes/CircleNode";
import DiamondNode from "./customNodes/DiamondNode";
// import GroupNode from "./customNodes/GroupNode";
import { initialEdges, initialNodes } from "./mockFlowData";
import Sidebar from "./Sidebar";

const connectionLineStyle = { stroke: "#ddd", strokeWidth: 2 };
const snapGrid = [15, 15];
const nodeTypes = {
    // default: DefaultNode,
    circle: CircleNode,  // Custom node components (CircleNode, etc.)
    diamond: DiamondNode,  // For diamond node
    // group: GroupNode,
};


export default function FlowCanvas() {
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


    function handleNodeDrop(item, monitor) {
        const offset = monitor.getClientOffset();
        const reactFlowContainer = document.querySelector('.react-flow'); // React Flow container
        const containerBounds = reactFlowContainer.getBoundingClientRect();

        // Adjust for container's position
        const xPos = offset.x - containerBounds.left;
        const yPos = offset.y - containerBounds.top;

        // Adjust the Y-position so that y=0 is the center of the container
        const centerY = containerBounds.height / 2; // Find the center of the container
        const adjustedY = yPos - centerY;

        // Optionally, apply grid snapping
        const snappedX = Math.round(xPos/2 / snapGrid[0]) * snapGrid[0];
        const snappedY = Math.round(adjustedY / snapGrid[1]) * snapGrid[1];

        const newNode = {
            id: `${Date.now()}`, // Unique ID for each new node
            type: item.nodeType,  // Node type ("circle", "diamond", etc.)
            position: {
                x: snappedX,  // Apply snapping
                y: snappedY,  // Apply snapping with adjusted Y to be relative to the center
            },
            data: { label: item.label },
        };

        setNodes((prevNodes) => [...prevNodes, newNode]);
    }

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "node",  // Accept nodes from the sidebar
        drop: (item, monitor) => handleNodeDrop(item, monitor),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    }));

    return (
        <ReactFlowProvider>
            <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
                {/* Sidebar */}
                <Sidebar onNodeDrop={handleNodeDrop} />
                <div
                    ref={drop}
                    style={{
                        flex: 1,
                        position: "relative",
                        backgroundColor: "#333",
                        padding: "10px",
                    }}
                >
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
            </div>
        </ReactFlowProvider>
    )
}