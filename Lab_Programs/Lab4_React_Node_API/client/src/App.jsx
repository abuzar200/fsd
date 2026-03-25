import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const API_BASE = 'http://localhost:3000/api';

export default function App() {
  const [count, setCount] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const [apiMessage, setApiMessage] = useState('');

  useEffect(() => {
    axios.get(`${API_BASE}/hello`)
      .then(res => setApiMessage(res.data.message))
      .catch(() => setApiMessage('Could not reach API. Is the server running?'));
    loadTasks();
  }, []);

  const loadTasks = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_BASE}/tasks`);
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    try {
      const res = await axios.post(`${API_BASE}/tasks`, { title: newTitle.trim() });
      setTasks([...tasks, res.data]);
      setNewTitle('');
    } catch (err) {
      console.error(err);
    }
  };

  const toggleTask = async (id) => {
    try {
      const res = await axios.patch(`${API_BASE}/tasks/${id}/toggle`);
      setTasks(tasks.map(t => (t.id === id ? res.data : t)));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <h2>Abuzar Dashboard</h2>
        <div className="sidebar-stats">
          <div className="stat-item">
            <span className="stat-label">Total Tasks</span>
            <span className="stat-value">{tasks.length}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Completed</span>
            <span className="stat-value">{tasks.filter(t => t.done).length}</span>
          </div>
        </div>
      </aside>

      <main className="main-content">
        <header className="header">
          <h1>Overview</h1>
          <div className="api-status">
            <div className={`status-indicator ${apiMessage.includes('Hello') ? 'online' : 'offline'}`}></div>
            {apiMessage.includes('Hello') ? 'Endpoint Responsive' : 'System Offline'}
          </div>
        </header>

        <div className="grid">
          {/* Counter App */}
          <div className="card">
            <h3>Interactive Counter</h3>
            <p className="subtitle">React state isolation</p>
            <div className="counter-ui">
              <div className="counter-value">{count}</div>
              <div className="d-flex gap-3 justify-content-center">
                <button className="btn btn-primary" onClick={() => setCount(c => c + 1)}>Increment</button>
                <button className="btn btn-secondary" onClick={() => setCount(0)}>Reset</button>
              </div>
            </div>
          </div>

          {/* Tasks App */}
          <div className="card">
            <h3>Enterprise Tasks</h3>
            <p className="subtitle">Real-time persistence API</p>
            
            <form onSubmit={addTask} className="task-form">
              <input
                type="text"
                className="input-field"
                placeholder="What is your next focus?"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
              <button type="submit" className="btn btn-primary" style={{ flex: '0 0 100px' }}>Add</button>
            </form>

            <ul className="task-list">
              {tasks.map(t => (
                <li key={t.id} className={`task-item ${t.done ? 'complete' : ''}`} onClick={() => toggleTask(t.id)}>
                  <div className="custom-checkbox">
                    {t.done && '✓'}
                  </div>
                  <span>{t.title}</span>
                </li>
              ))}
              {tasks.length === 0 && !loading && (
                <li className="empty-state">No active focus items.</li>
              )}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
