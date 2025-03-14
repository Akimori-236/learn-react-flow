
import CircleNode from "./customNodes/CircleNode";
import DiamondNode from "./customNodes/DiamondNode";

const NodeTypes = {
    DEFAULT: "default",
    INPUT: "input",
    OUTPUT: "output",
    GROUP: "group",
};

// Function to create nodes with flexibility for type and label
function createNode(id, label, type = NodeTypes.DEFAULT) {
    // Ensure the type is valid
    if (!Object.values(NodeTypes).includes(type)) {
        throw new Error(`Invalid node type: ${type}`);
    }
    return {
        id: id,
        type: type,  // Dynamically set the node type
        position: { x: 200, y: 100 },
        data: { label: label },
        sourcePosition: "right",  // outgoing
        targetPosition: "left",   // incoming
    };
}


export const initialNodes = [
    {
        id: '1',
        type: "input",
        position: { x: 200, y: 100 },
        data: { label: 'Start' },
        sourcePosition: "right", // outgoing
    },
    createNode("2", "Step 1"),
    {
        id: '3',
        type: 'diamond',  // Register 'diamond' as a custom type
        position: { x: 600, y: 0 },
        data: { label: 'Yes/No Decision' },
        component: DiamondNode,  // Link the custom component
    },
    {
        id: 'ifYes',
        type: "output",
        position: { x: 700, y: -50 },
        data: { label: 'If Yes' },
        targetPosition: "left"
    },
    {
        id: 'doSomething',
        position: { x: 500, y: -150 },
        data: { label: 'Do Something' },

    },
    {
        id: 'ifNo',
        type: "output",
        position: { x: 800, y: -100 },
        data: { label: 'If No' },
        targetPosition: "left"
    },
];

export const initialEdges = [
    { id: 'e1', source: 'start', target: 'step1' },
    { id: 'e2', source: 'step1', target: 'yesNo' },
    { id: 'e3', source: 'yesNo', target: 'ifYes', style: { stroke: 'green' } }, // for yes
    { id: 'e4', source: 'yesNo', target: 'ifNo', style: { stroke: 'red' } }, // for no
];
