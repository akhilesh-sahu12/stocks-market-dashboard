// Widget.js
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Widget = ({ id, title, content, onRemove }) => {
  return (
    <Draggable draggableId={id.toString()} index={id - 1}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="widget"
        >
          <div className="widget-header">
            <span>{title}</span>
            <button onClick={() => onRemove(id)}>Remove</button>
          </div>
          <div className="widget-content">{content}</div>
        </div>
      )}
    </Draggable>
  );
};

export default Widget;
