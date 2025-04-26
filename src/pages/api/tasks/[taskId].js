import { connectDB } from "../../lib/config/db";
import { Task } from "../../lib/model/Task";

export default async function handler(req, res) {
  const { taskId } = req.query; // Get taskId from query

  await connectDB(); // Ensure DB is connected

  if (req.method === "PUT") {
    try {
      // Find the task by taskId and update the status
      const { status } = req.body;
      const task = await Task.findByIdAndUpdate(
        taskId,
        { status },
        { new: true }
      );

      if (!task) {
        return res.status(404).json({ message: "Task not found" });
      }

      return res.status(200).json(task);
    } catch (error) {
      console.error("Error updating task:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  res.status(405).json({ message: "Method Not Allowed" });
}
