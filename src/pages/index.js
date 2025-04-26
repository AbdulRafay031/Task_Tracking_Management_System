import React from 'react';
import Navbar from './Component/Navbar';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 to-purple-700 text-white">
      <Navbar />
      <section className="flex flex-col items-center justify-center text-center px-6 py-20">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-[0_0_10px_rgba(255,0,0,1)]">
          Welcome to Task Tracking Management System
        </h1>
        <div className="w-24 h-1 bg-white mb-10 rounded-full"></div>

        <p className="max-w-3xl text-lg md:text-xl mb-8 leading-relaxed">
          Manage your tasks efficiently with our powerful task management app.  
          Plan your work, track your progress, and boost your productivity — all in one place!
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-10">
          <div className="bg-white bg-opacity-10 p-6 rounded-xl hover:scale-105 transform transition duration-300 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-yellow-300">🚀 Boost Productivity</h2>
            <p className="text-base text-black">
              Stay organized and prioritize your work. Move tasks easily between To-Do, In Progress, and Completed columns.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 p-6 rounded-xl hover:scale-105 transform transition duration-300 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-green-300">📋 Easy Task Tracking</h2>
            <p className="text-base text-black">
              Keep an eye on all your tasks at a glance. Smooth drag-and-drop feature to manage task status effortlessly.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 p-6 rounded-xl hover:scale-105 transform transition duration-300 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-pink-300">🔔 Smart Notifications</h2>
            <p className="text-base text-black">
              Get notified for important deadlines and updates. Never miss a crucial task again!
            </p>
          </div>

          <div className="bg-white bg-opacity-10 p-6 rounded-xl hover:scale-105 transform transition duration-300 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-blue-300">⚙️ User-Friendly Interface</h2>
            <p className="text-base text-black">
              Simple and intuitive design. No complicated setup — just sign in and start tracking your tasks!
            </p>
          </div>
        </div>

        {/* Highlighted Note */}
        <div className="mt-20 p-6 bg-white bg-opacity-20 rounded-2xl shadow-lg max-w-xl">
          <h3 className="text-2xl font-extrabold text-black mb-4">⚡ Important Note</h3>
          <p className="text-lg">
            <span className="text-black font-bold">Once you Sign In, the App will Start Automatically! 
           Access all features like task creation, drag & drop, and more.
           </span> 
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
