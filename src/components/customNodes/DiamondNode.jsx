import { Handle } from "@xyflow/react";


export default function DiamondNode({ id, label }) {
    return (
        <div style={{
            position: 'relative',
            width: '150px',  // Width of the diamond
            height: '150px', // Height of the diamond
        }}>
            {/* Node body - the actual diamond shape */}
            <div style={{
                backgroundColor: 'yellow',
                color: 'black',
                borderRadius: '10px',
                padding: '20px',
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center', // Center the label inside the diamond
                boxSizing: 'border-box',
                transform: 'rotate(45deg)', // Rotate the node to make it diamond-shaped
                transformOrigin: 'center',
            }}>
                <div>{label}</div>
            </div>

            {/* Outgoing connection points (top and bottom) */}
            <Handle
                type="source"
                position="top"
                id={`top-${id}`}
                style={{
                    background: '#555',
                    top: '-12px',
                }}
            />
            <Handle
                type="source"
                position="bottom"
                id={`bottom-${id}`}
                style={{
                    background: '#555',
                    bottom: '-12px',
                }}
            />

            {/* Incoming connection point (left) */}
            <Handle
                type="target"
                position="left"
                id={`left-${id}`}
                style={{
                    background: '#555',
                    left: '-12px',
                }}
            />
        </div>
    );
}
