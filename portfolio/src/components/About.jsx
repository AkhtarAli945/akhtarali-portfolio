import React from "react";

export default function About() {
  return (
    <section id="about" className="py-16 px-6 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>

        <p className="text-lg leading-7 text-gray-600">
          I am a passionate MERN Stack Developer who enjoys building modern,
          responsive, and user-friendly web applications. I specialize in
          React, Node.js, Express, and MongoDB, and I love turning ideas into
          real-world projects.
        </p>

        <p className="text-lg leading-7 text-gray-600 mt-4">
          My goal is to continuously improve my skills and build impactful
          digital experiences that solve real problems.
        </p>
      </div>
    </section>
  );
}