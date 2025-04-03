import React from 'react';
import { Handle, Position } from '@xyflow/react';
import CreateTaskDialog from '../CreateTaskDialog';

type StepNodeProps = {
  readonly data: {
    label: string;
    description: string;
    tasks: Array<{ id: string; name: string }>;
  };
};

export default function StepNode({ data }: StepNodeProps) {
  return (
    <div
      style={{
        position: 'relative',
        width: '100px', // Width of the step node
        height: '100px', // Height of the step node
      }}
    >
      {/* Node body - the actual step node */}
      <div
        style={{
          backgroundColor: 'lightblue', // Change color for step node
          color: 'black',
          borderRadius: '10px',
          padding: '20px',
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center', // Center the label inside the step node
          boxSizing: 'border-box',
          transform: 'rotate(45deg)', // Rotating it to give it a similar visual feel to the diamond node
          transformOrigin: 'center',
        }}
      >
        <div
          style={{
            transform: 'rotate(315deg)', // Rotate to make it look visually appealing
          }}
        >
          {/* Label */}
          <h3 className="font-bold text-lg">{data.label}</h3>
          <p className="text-sm text-gray-500">{data.description}</p>

          {/* Tasks */}
          <div className="mt-2">
            <h4 className="font-semibold text-sm">{'Tasks:'}</h4>
            <ul className="text-xs text-gray-700">
              {data.tasks.map((task) => (
                <li key={task.id}>
                  {'• '}
                  {task.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Outgoing connection points */}
      <Handle
        type="target"
        position={Position.Top}
        style={{
          background: '#555',
          left: '-12px',
        }}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        style={{
          background: '#555',
          bottom: '-12px',
        }}
      />
    </div>
  );
}
