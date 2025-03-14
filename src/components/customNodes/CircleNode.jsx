import React, { memo } from "react";
import { Handle } from "reactflow";

// eslint-disable-next-line react-refresh/only-export-components
export default memo(({ data, isConnectable }) => {
    return (
        <div
            style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                background: "#CCCCCC",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative", // Ensures handles stay in the right position
            }}
        >
            {/* Target handle for connections */}
            <Handle
                type="target"
                position="left"
                style={{ background: "#555" }}
                onConnect={(params) => console.log("handle onConnect", params)}
                isConnectable={isConnectable}
            />

            {/* Display label */}
            <div>{data.label}</div>

            {/* Source handle for connections */}
            <Handle
                type="source"
                position="right"
                id="a"
                style={{ background: "#555" }}
                isConnectable={isConnectable}
            />
        </div>
    );
});
