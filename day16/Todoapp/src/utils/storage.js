const KEY = 'react_todo_app_v1';

export function loadTodos() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to load todos', e);
    return [];
  }
}

export function saveTodos(todos) {
  try {
    localStorage.setItem(KEY, JSON.stringify(todos));
  } catch (e) {
    console.error('Failed to save todos', e);
  }
}
