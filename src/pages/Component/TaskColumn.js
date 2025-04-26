import { useState } from "react";
import TaskCard from "./TaskCard";

export default function TaskColumn({ title, tasks = [], status, onDropTask, onDragStart, onAddTask }) {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    assignedTo: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask({ ...formData, status });
    setFormData({ title: "", description: "", assignedTo: "" });
    setShowForm(false);
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md p-4 min-h-[500px] w-[300px] mx-2 flex flex-col justify-between"
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => onDropTask(e, status)}
    >
      <div className="flex flex-col items-center mb-6">
        <h2 className="text-2xl font-extrabold text-red-700 drop-shadow-[0_0_10px_rgba(255,0,0,1)] uppercase">
          {title}
        </h2>
        <div className="w-16 h-1 bg-white mt-2 rounded-full"></div>

        {/* If tasks are not available, show a loading state */}
        {tasks.length === 0 ? (
          <div className="text-center text-gray-500 py-4">No tasks available</div>
        ) : (
          tasks.map((task) => (
            <TaskCard key={task._id} task={task} onDragStart={onDragStart} />
          ))
        )}
      </div>

      {/* Add Card Button and Form */}
      <div className="mt-4">
        {showForm ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="border p-2 rounded"
              required
            />
            <textarea
              placeholder="Description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Assigned To"
              value={formData.assignedTo}
              onChange={(e) => setFormData({ ...formData, assignedTo: e.target.value })}
              className="border p-2 rounded"
            />
            <div className="flex gap-2">
              <button
                type="submit"
                className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
              >
                Add
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="text-gray-500 hover:underline"
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <button
            onClick={() => setShowForm(true)}
            className="bg-gradient-to-br from-red-900 to-purple-900 text-white w-full py-2 rounded hover:bg-teal-600"
          >
            + Add Card
          </button>
        )}
      </div>
    </div>
  );
}
