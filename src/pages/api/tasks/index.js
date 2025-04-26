// pages/api/tasks/index.js
import { connectDB } from "../../../lib/config/db";
import { Task } from "../../../lib/model/Task";

export default async function handler(req, res) {
  try {
    await connectDB(); // Ensure DB is connected

    if (req.method === "GET") {
      const tasks = await Task.find(); // Fetch tasks from DB
      return res.status(200).json(tasks);
    }

    if (req.method === "POST") {
      const { title, description, status, assignedTo } = req.body;
      const newTask = new Task({ title, description, status, assignedTo });
      await newTask.save(); // Save the new task to DB
      return res.status(201).json(newTask);
    }

    return res.status(405).json({ message: "Method Not Allowed" });
  } catch (error) {
    console.error("Error in API handler:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
