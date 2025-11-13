import React, { useEffect, useMemo, useState } from "react";
import AddTodo from "./components/AddTodo.jsx";
import EditModal from "./components/EditModel.jsx";
import TodoList from "./components/TodoList.jsx";
import { loadTodos, saveTodos } from "./utils/storage";

const FILTERS = {
  ALL: "all",
  ACTIVE: "active",
  COMPLETED: "completed",
};

export default function App() {
  const [todos, setTodos] = useState(() => loadTodos());
  const [filter, setFilter] = useState(FILTERS.ALL);
  const [query, setQuery] = useState("");
  const [editing, setEditing] = useState(null); // todo object being edited
  const [sortBy, setSortBy] = useState("createdDesc"); // createdAsc | createdDesc | title

  // persist whenever todos change
  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  // Derived filtered + searched + sorted todos
  const visibleTodos = useMemo(() => {
    let arr = [...todos];

    // Filter
    if (filter === FILTERS.ACTIVE) arr = arr.filter((t) => !t.completed);
    if (filter === FILTERS.COMPLETED) arr = arr.filter((t) => t.completed);

    // Search
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      arr = arr.filter(
        (t) =>
          (t.title || "").toLowerCase().includes(q) ||
          (t.description || "").toLowerCase().includes(q)
      );
    }

    // Sort
    if (sortBy === "createdAsc") arr.sort((a, b) => a.createdAt - b.createdAt);
    if (sortBy === "createdDesc") arr.sort((a, b) => b.createdAt - a.createdAt);
    if (sortBy === "title") arr.sort((a, b) => a.title.localeCompare(b.title));

    return arr;
  }, [todos, filter, query, sortBy]);

  // CRUD operations
  function addTodo({ title, description }) {
    const newTodo = {
      id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
      title: title.trim(),
      description: description?.trim() || "",
      completed: false,
      createdAt: Date.now(),
    };
    setTodos((prev) => [newTodo, ...prev]);
  }

  function toggleTodo(id) {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }

  function deleteTodo(id) {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }

  function updateTodo(id, updates) {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, ...updates } : t))
    );
  }

  function clearCompleted() {
    setTodos((prev) => prev.filter((t) => !t.completed));
  }

  // small stats
  const remaining = todos.filter((t) => !t.completed).length;

  return (
    <div className="app-root">
      <div className="container">
        <h1 className="title">React To-Do</h1>

        <AddTodo onAdd={addTodo} />

        <div className="controls">
          <div className="left">
            <div className="filters">
              <button
                className={filter === FILTERS.ALL ? "active" : ""}
                onClick={() => setFilter(FILTERS.ALL)}
              >
                All
              </button>
              <button
                className={filter === FILTERS.ACTIVE ? "active" : ""}
                onClick={() => setFilter(FILTERS.ACTIVE)}
              >
                Active
              </button>
              <button
                className={filter === FILTERS.COMPLETED ? "active" : ""}
                onClick={() => setFilter(FILTERS.COMPLETED)}
              >
                Completed
              </button>
            </div>

            <div className="search">
              <input
                placeholder="Search todos..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="right">
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="createdDesc">Newest</option>
              <option value="createdAsc">Oldest</option>
              <option value="title">Title</option>
            </select>
            <button onClick={clearCompleted} className="danger">
              Clear completed
            </button>
          </div>
        </div>

        <div className="meta">
          <span>
            {remaining} item{remaining !== 1 ? "s" : ""} left
          </span>
          <span>{todos.length} total</span>
        </div>

        <TodoList
          todos={visibleTodos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onEdit={(todo) => setEditing(todo)}
          onUpdate={updateTodo}
        />

        {editing && (
          <EditModal
            todo={editing}
            onClose={() => setEditing(null)}
            onSave={(updates) => {
              updateTodo(editing.id, updates);
              setEditing(null);
            }}
          />
        )}

        <footer className="footer">
          Built with React — no backend. Data stored in your browser.
        </footer>
      </div>
    </div>
  );
}
