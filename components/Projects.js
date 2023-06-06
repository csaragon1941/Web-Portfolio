import React from "react";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Economic Benefit Opportunity 'EBO'",
      description: "Description of Project 1",
      image: "/thumbnail/LogoDigitalWallet.png",
      link: "./digitalwallet",
    },
    {
      id: 2,
      title: "Perseverance Rover Machine Learning Algorithm",
      description: "Description of Project 2",
      image: "/thumbnail/LogoOurHouse.png",
      link: "./ourhouse",
    },
    {
      id: 3,
      title: "Discord Bot",
      description: "Description of Project 3",
      image: "/thumbnail/DcBot.png",
      link: "./discordbot",
    },
    {
      id: 4,
      title: "Red Planet Hazard Hunter",
      description: "Description of Project 4",
      image: "/thumbnail/LogoMarsRover.png",
      link: "./redplanet",
    },
  ];

  return (
    <div className="bg-[#f4f3ee] dark:bg-[#1F1F1F]">
      <div className="max-w-6xl mx-auto grid grid-cols-2 gap-4 mt-10">
        {projects.map((project) => (
          <div key={project.id}>
            <div className="bg-[#D1D5DB] dark:bg-[#252C37] rounded-lg shadow-lg p-6 w-full h-full">
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
              <Link href={project.link} passHref>
                <span className="mt-4 text-[#0070F3] dark:text-[#0070F3] font-medium hover:underline">
                  Learn More
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
