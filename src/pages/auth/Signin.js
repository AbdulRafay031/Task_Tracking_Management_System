"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "../Component/Navbar";

export default function Signin() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("/api/auth/signin", formData);
      if (res.status === 200) {
        alert("Signin Successful!");
        router.push("/dashboard");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Signin Failed");
    }
    setLoading(false);
  };

  return (
    <div>
      {/* <Navbar /> */}
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
        {/* Right Side - Image */}
        <div className="hidden md:flex items-center justify-center bg-white h-screen">
          <div className="relative w-[700px] h-[650px]">
            <Image
              src="/sy2.jpg"
              alt="Signin Illustration"
              fill
              className="object-cover "
            />
          </div>
        </div>

        {/* Left Side - Signin Form */}
        <div className="flex items-center justify-center bg-white p-8">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8"
          >
            <h2 className="text-3xl font-bold text-center text-black mb-6">
              WELCOME
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-300 outline-none"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-300 outline-none"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-black text-white p-3 rounded-lg font-semibold transition duration-300"
              >
                {loading ? "Signing In..." : "Signin"}
              </motion.button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <span
                onClick={() => router.push("/auth/Signup")}
                className="text-green-500 hover:underline cursor-pointer"
              >
                Sign Up
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
