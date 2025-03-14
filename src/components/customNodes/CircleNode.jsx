import { Handle } from "@xyflow/react";

export default function CircleNode({ id, data }) {
    // Destructure id and label from data prop
    const { label } = data;

    const commonStyles = {
        position: 'relative',
        width: '150px',  // Width of the circle
        height: '150px', // Height of the circle (same as width to make it round)
        borderRadius: '50%',  // Make the node circular
        backgroundColor: 'lightblue',  // Circle color
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',  // Center the label inside the circle
        boxSizing: 'border-box',
        zIndex: 1,  // Ensure circle node is above the label if necessary
    };

    const labelStyles = {
        fontSize: '18px',  // Increase font size for better visibility
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',  // Label color
        zIndex: 2,  // Ensure label is on top of the circle node
        position: 'absolute',
    };

    if (label.toUpperCase() === "START") {
        return (
            <div style={commonStyles}>
                <div style={labelStyles}>{label}</div>
                <Handle
                    type="source"
                    position="right"
                    id={`right-${id}`}
                    style={{
                        background: '#555',
                        right: '-12px',  // Adjust for correct placement
                    }}
                />
            </div>
        );
    }
    else if (label.toUpperCase() === "END") {
        return (
            <div style={commonStyles}>
                <div style={labelStyles}>{label}</div>
                <Handle
                    type="target"
                    position="left"
                    id={`left-${id}`}
                    style={{
                        background: '#555',
                        left: '-12px',  // Adjust for correct placement
                    }}
                />
            </div>
        );
    }
    else {
        return (
            <div style={commonStyles}>
                <div style={labelStyles}>{label}</div>
            </div>
        );
    }
}
