import React from "react";
import { useDrag } from "react-dnd";

// Sidebar Item (draggable node or group)
// eslint-disable-next-line no-unused-vars
function SidebarItem({ nodeType, label, onDragStart }) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "node",
        item: { nodeType, label },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    return (
        <div
            ref={drag}
            style={{
                padding: "10px",
                margin: "5px",
                backgroundColor: "#fff",
                border: "1px solid #ccc",
                cursor: "move",
                opacity: isDragging ? 0.5 : 1,
            }}
        >
            {label}
        </div>
    );
};

// Sidebar Component
export default function Sidebar({ onNodeDrop }) {
    const handleDrop = (item) => {
        // When a node is dropped from the sidebar, call the onNodeDrop function
        onNodeDrop(item);
    };

    return (
        <div
            style={{
                width: "200px",
                height: "100vh",
                backgroundColor: "#f4f4f4",
                padding: "10px",
                overflowY: "auto",
            }}
        >
            <h3>Sidebar</h3>
            <SidebarItem nodeType="circle" label="Start" onNodeDrop={handleDrop} />
            <SidebarItem nodeType="default" label="Step 1" onNodeDrop={handleDrop} />
            <SidebarItem nodeType="diamond" label="Yes/No Decision" onNodeDrop={handleDrop} />
            <SidebarItem nodeType="output" label="Output" onNodeDrop={handleDrop} />
            <SidebarItem nodeType="group" label="Group" onNodeDrop={handleDrop} />
        </div>
    );
};
