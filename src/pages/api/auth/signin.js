import { connectDB } from "../../../lib/config/db";
import { signin } from "../../../lib/controller/authController";

export default async function handler(req, res) {
  try {
    await connectDB();

    if (req.method === "POST") {
      await signin(req, res);
    } else {
      res.status(405).json({ message: "Method not allowed" });
    }
  } catch (error) {
    console.error("API Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
