// src/pages/lib/config/db.js

import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;

    if (!uri) throw new Error("MongoDB URI not defined");

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    throw new Error("Failed to connect to MongoDB");
  }
};
