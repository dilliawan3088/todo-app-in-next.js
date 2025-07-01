'use client';

import { useState } from 'react';

export default function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim() === '') return;
    setTasks([input, ...tasks]);
    setInput('');
  };

  const removeTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6 flex flex-col items-center justify-center">
      <div className="bg-white rounded-lg shadow-md w-full max-w-md p-6">
        <h1 className="text-2xl font-bold text-center mb-4">My To-Do App</h1>
        
        <div className="flex items-center gap-2 mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a task..."
            className="flex-grow p-2 border border-gray-300 rounded"
          />
          <button
            onClick={addTask}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Add
          </button>
        </div>

        <ul className="space-y-2">
          {tasks.length === 0 && (
            <li className="text-gray-500 text-center">No tasks yet.</li>
          )}
          {tasks.map((task, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded"
            >
              <span>{task}</span>
              <button
                onClick={() => removeTask(index)}
                className="text-red-500 hover:text-red-700 font-semibold"
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
