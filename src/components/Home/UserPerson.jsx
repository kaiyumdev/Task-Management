import React from 'react';
import Manager from "../../assets/images/Managers.jpg"
import team from "../../assets/images/team.jpg"
import Freelancers from "../../assets/images/Freelancers.jpg"
import Students from "../../assets/images/Students.jpg"

const UserPerson = () => {
  const personas = [
    {
      title: "Project Managers",
      description: "Keep track of project milestones, assign tasks, and monitor team progress efficiently.",
      icon: Manager,
    },
    {
      title: "Team Members",
      description: "Collaborate with your team, stay updated on task statuses, and contribute to project goals.",
      icon: team,
    },
    {
      title: "Freelancers",
      description: "Organize your tasks, manage deadlines, and ensure you meet client expectations.",
      icon: Freelancers,
    },
    {
      title: "Students",
      description: "Manage your assignments, plan your study schedule, and never miss a deadline.",
      icon: Students,
    }
  ];

  return (
    <section className="user-personas-section bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-10 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Who Can Use Our Task Management Tool?</h2>
          <p className="text-gray-300">
            Our tool is versatile and can be used by a variety of professionals and individuals to stay organized and productive.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {personas.map((persona, index) => (
            <div key={index} className="persona-card bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <img src={persona.icon} alt={persona.title} className="w-20 h-20 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{persona.title}</h3>
              <p className="text-gray-300">{persona.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserPerson;
