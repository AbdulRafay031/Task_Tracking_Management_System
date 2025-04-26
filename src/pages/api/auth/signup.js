import { connectDB } from "../../../lib/config/db";
import { signup } from "../../../lib/controller/authController";

export default async function handler(req, res) {
  await connectDB();
  if (req.method === "POST") {
    await signup(req, res);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
