import { useEffect, useState } from "react";
import axios from "axios";
import TaskColumn from "../pages/Component/TaskColumn"; 
import Link from "next/link";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);


  useEffect(() => {
    fetchTasks();
  }, []);

  async function fetchTasks() {
    const res = await axios.get("/api/tasks");
    setTasks(res.data);
  }

  const onDragStart = (e, taskId) => {
    e.dataTransfer.setData("taskId", taskId);
  };

  const onDropTask = async (e, newStatus) => {
    const taskId = e.dataTransfer.getData("taskId");

    try {
      await axios.put(`/api/tasks/${taskId}`, { status: newStatus });
      fetchTasks();
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const onAddTask = async (taskData) => {
    try {
      await axios.post("/api/tasks", taskData);
      fetchTasks();
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const todoTasks = tasks.filter((task) => task.status === "todo");
  const inProgressTasks = tasks.filter((task) => task.status === "inprogress");
  const doneTasks = tasks.filter((task) => task.status === "done");

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-red-900 to-purple-900 p-6">
    
      {/* Logout Button */}
      <Link href="/">
        <button className="fixed top-4 right-4 bg-red-500 text-white p-2 rounded-full shadow-lg hover:bg-red-700 transition-colors">
          Logout
        </button>
      </Link>
      
      <div className="w-full text-center border-b-2 border-red-500 pb-4 mb-10">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-[0_0_10px_rgba(255,0,0,1)]">
          Task Management Dashboard
        </h1>
      </div>
    
      {/* Task Columns - Responsiveness Added */}
      <div className="flex flex-col sm:flex-row sm:justify-center sm:w-full gap-6 sm:gap-10">
        <TaskColumn
          title="To Do"
          tasks={todoTasks}
          status="todo"
          onDropTask={onDropTask}
          onDragStart={onDragStart}
          onAddTask={onAddTask}
        />
        <TaskColumn
          title="In Progress"
          tasks={inProgressTasks}
          status="inprogress"
          onDropTask={onDropTask}
          onDragStart={onDragStart}
          onAddTask={onAddTask}
        />
        <TaskColumn
          title="Completed"
          tasks={doneTasks}
          status="done"
          onDropTask={onDropTask}
          onDragStart={onDragStart}
          onAddTask={onAddTask}
        />
      </div>
    </div>
  );
}
