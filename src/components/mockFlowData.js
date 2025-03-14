import FlowEdge from "../classes/FlowEdge";
import FlowNode from "../classes/FlowNode";
import CircleNode from "./customNodes/CircleNode";
import DiamondNode from "./customNodes/DiamondNode";


export const initialNodes = [
    new FlowNode("1", "Start", { x: 0, y: 0 }, "circle", CircleNode),
    new FlowNode("2", "Step 1", { x: 100, y: 0 }, "default"),
    new FlowNode("3", "Yes/No Decision", { x: 300, y: 0 }, "diamond", DiamondNode),
    new FlowNode("4", "If Yes", { x: 500, y: -100 }, "output"),
    new FlowNode("5", "Do Something", { x: 700, y: -100 }, "default"),
    new FlowNode("6", "If No", { x: 500, y: 100 }, "output"),
]

export const initialEdges = [
    new FlowEdge('e1', '1', '2'),  // From 'Start' to 'Step 1'
    new FlowEdge('e2', '2', '3'),  // From 'Step 1' to 'Yes/No Decision'
    new FlowEdge('e3', '3', '4', { stroke: 'green' }),  // Yes path (green)
    new FlowEdge('e4', '3', '6', { stroke: 'red' }),  // No path (red)
]