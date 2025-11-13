import React from "react";

export default function TodoItem({
  todo,
  onToggle,
  onDelete,
  onEdit,
  onUpdate,
}) {
  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <div className="left">
        <input type="checkbox" checked={todo.completed} onChange={onToggle} />
        <div className="text" onDoubleClick={onEdit}>
          <div className="title">{todo.title}</div>
          {todo.description && <div className="desc">{todo.description}</div>}
        </div>
      </div>

      <div className="actions">
        <button onClick={onEdit} title="Edit">
          ✏️
        </button>
        <button
          onClick={() => onUpdate({ completed: !todo.completed })}
          title="Toggle"
        >
          🔁
        </button>
        <button onClick={onDelete} className="del" title="Delete">
          🗑️
        </button>
      </div>
    </li>
  );
}
