"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Signup() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("/api/auth/signup", formData);
      if (res.status === 201) {
        alert("Signup Successful! Please login.");
        router.push("/auth/Signin");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Signup Failed");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-900 to-purple-700 p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8"
      >
        <h2 className="text-3xl font-bold text-center text-black mb-6">Create an Account</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-black  text-white p-3 rounded-lg font-semibold transition duration-300"
          >
            {loading ? "Creating Account..." : "Signup"}
          </motion.button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <span
            onClick={() => router.push("/auth/Signin")}
            className="text-green-600 hover:underline cursor-pointer"
          >
            Sign In
          </span>
        </p>
      </motion.div>
    </div>
  );
}
