// lib/model/Task.js
import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  status: { type: String, default: "pending" },
  assignedTo: { type: String },
});

const Task = mongoose.models.Task || mongoose.model("Task", TaskSchema);

export { Task };
