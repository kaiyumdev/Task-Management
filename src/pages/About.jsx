import React from 'react'
import taskImage from "../assets/images/banner_cleanup.jpg"

const About = () => {
  return (
    <section className="about-section bg-black text-white py-12">
      <div className="container mx-auto px-4 md:px-10 lg:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Our Task Management Tool</h2>
            <p className="text-gray-300 mb-6">
              Our task management tool is designed to help you streamline your workflow, increase productivity, and stay organized. Whether you're managing personal tasks or collaborating with a team, our tool provides a simple and intuitive interface to manage your tasks efficiently.
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-6">
              <li>Create and manage tasks with ease</li>
              <li>Set deadlines and reminders</li>
              <li>Collaborate with team members</li>
              <li>Track progress and productivity</li>
              <li>Customizable project views and dashboards</li>
            </ul>
            <p className="text-gray-300">
              Our goal is to provide you with a powerful tool that adapts to your needs and helps you achieve your goals. Start managing your tasks more effectively today!
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <img src={taskImage} alt="Task Management Tool" className="w-3/4 md:w-full rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
