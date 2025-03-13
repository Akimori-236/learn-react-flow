
import CircleNode from "./customNodes/CircleNode";
import DiamondNode from "./customNodes/DiamondNode";


export const initialNodes = [
    {
        id: 'start',
        component: CircleNode,
        position: { x: 200, y: 100 },
        data: { label: 'Start' },
    },
    {
        id: 'step1',
        position: { x: 400, y: 50 },
        data: { label: 'Step 1' },
    },
    {
        id: 'yesNo',
        component: DiamondNode,
        position: { x: 600, y: 0 },
        data: { label: 'Yes/No Decision' },
    },
    {
        id: 'ifYes',
        position: { x: 700, y: -50 },
        data: { label: 'If Yes' },
    },
    {
        id: 'doSomething',
        position: { x: 500, y: -150 },
        data: { label: 'Do Something' },
    },
    {
        id: 'ifNo',
        position: { x: 800, y: -100 },
        data: { label: 'If No' },
    },
];

export const initialEdges = [
    { id: 'e1', source: 'start', target: 'step1' },
    { id: 'e2', source: 'step1', target: 'yesNo' },
    { id: 'e3', source: 'yesNo', target: 'ifYes', style: { stroke: 'green' } }, // for yes
    { id: 'e4', source: 'yesNo', target: 'ifNo', style: { stroke: 'red' } }, // for no
];
