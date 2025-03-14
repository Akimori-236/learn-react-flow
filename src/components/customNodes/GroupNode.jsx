import React, { useState, useRef } from "react";
import { Handle } from "@xyflow/react";
import { NodeResizer } from "@reactflow/node-resizer";


export default function GroupNode({ id, label, position, data, onResize }) {
    const [width, setWidth] = useState(300); // initial width of the group node
    const [height, setHeight] = useState(300); // initial height of the group node
    const nodeRef = useRef(null); // Reference to the node for resizing

    // Function to handle resizing when dragged
    const handleResize = (event) => {
        const newWidth = Math.max(event.clientX - nodeRef.current.getBoundingClientRect().left, 150); // Minimum width 150px
        const newHeight = Math.max(event.clientY - nodeRef.current.getBoundingClientRect().top, 150); // Minimum height 150px
        setWidth(newWidth);
        setHeight(newHeight);
        onResize(newWidth, newHeight); // Callback to parent to update node dimensions
    };

    return (
        <div
            ref={nodeRef}
            style={{
                position: "absolute",
                top: position.y,
                left: position.x,
                width: `${width}px`, // Dynamic width
                height: `${height}px`, // Dynamic height
                backgroundColor: "#e1e1e1", // Light grey color for the group
                borderRadius: "8px",
                padding: "20px",
                boxSizing: "border-box",
                border: "2px dashed #888", // Dashed border for group node
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                overflow: "hidden",
                cursor: "move", // Set cursor to indicate the node can be dragged
            }}
        >
            <div style={{ fontWeight: "bold", marginBottom: "10px" }}>{label}</div>
            {/* Placeholder for nodes inside the group */}
            <div style={{ flex: 1, width: "100%" }}>
                {data?.containedNodes?.map((node, index) => (
                    <div key={index} style={{ marginBottom: "10px" }}>
                        {/* Render the contained nodes (could be CircleNode or others) */}
                        {node}
                    </div>
                ))}
            </div>

            {/* Handle resizing at the bottom-right corner */}
            <div
                style={{
                    position: "absolute",
                    bottom: "-10px",
                    right: "-10px",
                    width: "20px",
                    height: "20px",
                    backgroundColor: "gray",
                    cursor: "se-resize", // Resize cursor
                }}
                onMouseDown={(e) => {
                    e.preventDefault();
                    // Start resizing on mouse down
                    document.addEventListener("mousemove", handleResize);
                    document.addEventListener("mouseup", () => {
                        // Stop resizing on mouse up
                        document.removeEventListener("mousemove", handleResize);
                    });
                }}
            ></div>

            {/* Connection Handles */}
            <Handle
                type="target"
                position="top"
                id={`top-${id}`}
                style={{
                    background: "#555",
                    top: "-12px",
                }}
            />
            <Handle
                type="target"
                position="bottom"
                id={`bottom-${id}`}
                style={{
                    background: "#555",
                    bottom: "-12px",
                }}
            />
        </div>
    );
}
