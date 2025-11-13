import React, { useState } from "react";

export default function AddTodo({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({ title, description });
    setTitle("");
    setDescription("");
  }

  return (
    <form className="add-todo" onSubmit={handleSubmit}>
      <input
        className="title-input"
        placeholder="What do you want to do?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="desc-input"
        placeholder="Optional description..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="add-btn" type="submit">
        Add
      </button>
    </form>
  );
}
