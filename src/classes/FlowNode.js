export default class FlowNode {
    constructor(id, label, position, type = "default", component = null) {
        // Ensure the type is valid
        const NodeType = {
            DEFAULT: "default",
            INPUT: "input",
            OUTPUT: "output",
            GROUP: "group",
            DIAMOND: "diamond",
            CIRCLE: "circle",
        };

        if (!Object.values(NodeType).includes(type)) {
            throw new Error(`Invalid node type: ${type}`);
        }

        this.id = id;
        this.type = type;
        this.position = position;
        this.data = { label: label };
        this.sourcePosition = "right";  // outgoing
        this.targetPosition = "left";   // incoming
        this.component = component || null;
    }
}