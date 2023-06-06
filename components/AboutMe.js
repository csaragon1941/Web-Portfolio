import React from "react";
import userData from "@constants/data";


export default function AboutMe() {
  return (
    <section className="bg-[#f4f3ee] dark:bg-[#1F1F1F]">
      <div className="max-w-6xl mx-auto h-48 bg-[#f4f3ee] dark:bg-[#1F1F1F]">
        <h1 className="text-5xl md:text-8xl font-bold py-20 text-center md:text-left">
          About Me.
        </h1>
      </div>
      <div className="bg-[#f4f3ee] -mt-10 dark:bg-[#1F1F1F]">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-2xl md:text-3xl font-semibold mx-4"
            style={{ lineHeight: "3rem" }}
          >
            {userData.about.title}. Currently working on{" "}
            <a
              className="bg-[#B3C3E5] dark:bg-[#F3F5F7] rounded-md px-2 py-1 text-[#1E355C] dark:text-[#6C5B4B]"
              href={userData.about.currentProjectUrl}
            >
              {userData.about.currentProject} ✈️
            </a>
          </p>
        </div>
      </div>
      <div className="bg-[#f4f3ee] dark:bg-[#1F1F1F] px-3">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Social Links and Job Opportunities */}
          <div>
            <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Job Opportunities
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                I'm looking for a job currently. If you see me as a good fit,
                check my{" "}
                <a
                  href={userData.resumeUrl}
                  target="__blank"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  CV/Resume
                </a>{" "}
                and I'd love to work for you.
              </p>
            </div>
            <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Social Links
              </h1>
              <div className="mt-4 ml-4">
                <div className="flex flex-row justify-start items-center">
                  <a
                    href={userData.socialLinks.linkedin}
                    className="flex flex-row items-center space-x-4 group"
                  >
                    <div className="my-4">&rarr;</div>
                    <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                      <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                      LinkedIn
                    </div>
                  </a>
                </div>
                <div className="flex flex-row justify-start items-center">
                  <a
                    href={userData.socialLinks.github}
                    className="flex flex-row items-center space-x-4 group"
                  >
                    <div className="my-4">&rarr;</div>
                    <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                      <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                      GitHub
                    </div>
                  </a>
                </div>
                <div className="flex flex-row justify-start items-center">
                  <a
                    href={`mailto:${userData.email}`}
                    className="flex flex-row items-center space-x-4 group"
                  >
                    <div className="my-4">&rarr;</div>
                    <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                      <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                      Email Me!
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Text area */}
          <div className="col-span-1 md:col-span-2">
            {userData.about.description?.map((desc, idx) => (
              <p
                key={idx}
                className="text-xl text-gray-700 mb-4 dark:text-gray-300"
              >
                {desc}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 max-w-6xl mx-auto gap-y-20 gap-x-20 center">
        {/* Tech Stack */}
        <h1 className="bg-[#B3C3E5] dark:bg-[#F3F7F3] text-4xl rounded-md px-4 py-2 inline-block font-bold text-[#1E355C] dark:text-[#FFFFFF]">
          Tech Stack
        </h1>

        <div className="mt-4">
          {/* Operating Systems */}
          <h1 className="text-lg font-bold mb-4 ml-8">Operating Systems</h1>
          <div className="flex flex-row items-center justify-center">
            {/* Images */}
            <img
              src="tech stack/windows.svg"
              className="h-20 w-20 mx-4 my-4"
            />
            <img
              src="tech stack/osx.svg"
              className="h-20 w-20 mx-4 my-4"
            />
            <img
              src="tech stack/ios.svg"
              className="h-20 w-20 mx-4 my-4"
            />
          </div>
        </div>

        {/* Add the remaining code for Tech Stack and closing tags */}

        <div className="mt-4">
          {/* Languages */}
          <h1 className="text-lg font-bold mb-4 ml-8">Languages</h1>
          <div className="flex flex-row items-center justify-center">
            {/* Images */}
            <img
              src="tech stack/python.svg"
              className="h-20 w-20 mx-4 my-4"
            />
            <img
              src="tech stack/c++.svg"
              className="h-20 w-20 mx-4 my-4"
            />
            <img
              src="tech stack/java.svg"
              className="h-20 w-20 mx-4 my-4"
            />
            <img
              src="tech stack/javascript.svg"
              className="h-20 w-20 mx-4 my-4"
            />
            <img
              src="tech stack/css3.svg"
              className="h-20 w-20 mx-4 my-4"
            />
            <img
              src="tech stack/tailwind.svg"
              className="h-20 w-20 mx-4 my-4"
            />
          </div>
        </div>

        <div className="mt-4">
          {/* Creative Spaces */}
          <h1 className="text-lg font-bold mb-4 ml-8">Creative Spaces</h1>
          <div className="flex flex-row items-center justify-center">
            {/* Images */}
            <img
              src="tech stack/figma.svg"
              className="h-20 w-20 mx-4 my-4"
            />
            <img
              src="tech stack/photoshop.svg"
              className="h-20 w-20 mx-4 my-4"
            />
            <img
              src="tech stack/premirepro.svg"
              className="h-20 w-20 mx-4 my-4"
            />
          </div>
        </div>

        <div className="mt-4">
          {/* IDE */}
          <h1 className="text-lg font-bold mb-4 ml-8">IDE</h1>
          <div className="flex flex-row items-center justify-center">
            {/* Images */}
            <img
              src="tech stack/vsc.svg"
              className="h-20 w-20 mx-4 my-4"
            />
            <img
              src="tech stack/eclipse.svg"
              className="h-20 w-20 mx-4 my-4"
            />
            <img
              src="tech stack/jb.svg"
              className="h-20 w-20 mx-4 my-4"
            />
            <img
              src="tech stack/git.svg"
              className="h-20 w-20 mx-4 my-4"
            />
            <img
              src="tech stack/nextjs.svg"
              className="h-20 w-20 mx-4 my-4"
            />
            <img
              src="tech stack/nodejs.svg"
              className="h-20 w-20 mx-4 my-4"
            />
            <img
              src="tech stack/azure.svg"
              className="h-20 w-20 mx-4 my-4"
            />
            <img
              src="tech stack/vercel.svg"
              className="h-20 w-20 mx-4 my-4"
            />
          </div>
        </div>


      </div>
    </section>);
}

