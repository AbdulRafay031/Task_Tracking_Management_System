// components/TaskCard.js
export default function TaskCard({ task, onDragStart }) {
  // Ensure task is defined and has the necessary properties
  if (!task || !task.title) {
    return <div className="text-red-500">Task data is missing</div>;
  }

  return (
    <div
      className="bg-white shadow-md p-4 rounded-lg mb-4 cursor-pointer"
      draggable
      onDragStart={(e) => onDragStart(e, task._id)}
    >
      <h3 className="font-bold text-lg">{task.title}</h3>
      <p className="text-gray-500 text-sm">{task.assignedTo || 'Unassigned'}</p>
      {task.description && (
        <p className="text-gray-600 mt-2 text-xs">{task.description}</p>
      )}
    </div>
  );
}
