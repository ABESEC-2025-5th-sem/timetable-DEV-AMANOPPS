import React from "react";
import TodoItem from "./Todoitem.jsx";

export default function TodoList({
  todos,
  onToggle,
  onDelete,
  onEdit,
  onUpdate,
}) {
  if (!todos.length)
    return <p className="empty">No todos — add your first one!</p>;

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={() => onToggle(todo.id)}
          onDelete={() => onDelete(todo.id)}
          onEdit={() => onEdit(todo)}
          onUpdate={(updates) => onUpdate(todo.id, updates)}
        />
      ))}
    </ul>
  );
}
