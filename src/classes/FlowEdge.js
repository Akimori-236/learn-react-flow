export default class FlowEdge {
    constructor(id, source, target, style = {}) {
        this.id = id;
        this.source = source;
        this.target = target;
        this.style = style; // Optional, default is empty if no custom styles are needed
    }
}