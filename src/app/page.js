"use client";
import { TiAdjustContrast } from "react-icons/ti";
import { TiMail } from "react-icons/ti";
import { GiAbstract033 } from "react-icons/gi";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import Image from "next/image";
import Typewriter from "./Typewriter";
import Pardhiv from "../../public/Pardhiv.jpg";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Education from "./Education";
import Projects from "./Projects";
import TableofContents from "./TableofContents";
import { list } from "./ProjectsList";
export default function Home() {
  const [darkMode, SetdarkMode] = useState(false);

  let plist = list.map((obj) => {
    return (
      <Projects
        key=""
        Name={obj.Name}
        Link={obj.Link}
        Description={obj.Description}
        Photo={obj.Photo}
      />
    );
  });

  return (
    <main className={darkMode ? "dark" : ""} id="Home">
      <div className="bg-white dark:bg-gray-900 ">
        <div className="fixed w-full z-10">
          <nav className="bg-white py-6   flex justify-between shadow-md   fixed w-full top-0 dark:bg-gray-900 shadow-slate-400  ">
            <div className="flex row-span-1 pl-10 scale-125">
              <GiAbstract033
                className="mt-1 "
                color={darkMode ? "white" : "black"}
              />
              <a href="#">
                <h1 className="text-1xl pl-3 font-bold font-burton bg-gradient-to-r from-green-500 to-indigo-500 inline-block bg-clip-text text-transparent cursor-pointer">
                  Pardhiv's Personal Blog
                </h1>
              </a>
            </div>
            <ul className="flex items-center mr-5 gap-3">
              <li>
                <TiAdjustContrast
                  onClick={() => {
                    SetdarkMode(!darkMode);
                  }}
                  className="cursor-pointer text-4xl "
                  color={darkMode ? "white" : "black"}
                />
              </li>
              <li>
                <TiMail
                  className="cursor-pointer text-4xl "
                  color={darkMode ? "white" : "black"}
                />
              </li>
              <li>
                <a
                  href="#"
                  className="px-2 py-2 bg-gradient-to-r from-red-600 to-pink-400 rounded-xl text-white"
                >
                  {" "}
                  Resume{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-2 py-2 bg-gradient-to-r from-purple-600 to-blue-400 rounded-xl text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(`#Projects`).scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  {" "}
                  Projects{" "}
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <Typewriter delay={100} />

        <section className="text-center">
          <div className=" ">
            <Image
              src={Pardhiv}
              alt="Pardhiv's Profile Photo"
              className="  rounded- mx-auto w-60 h-60"
            />
          </div>
          <h1 className="py-2 text-5xl text-teal-600 font-burton">
            {" "}
            Pardhiv Annabattula
          </h1>
          <h2 className="py-2 font-bold dark:text-white">
            Full stack App and Web Developer and Machine learning enthusiast
          </h2>
          <p className="py-2 dark:text-white">
            3rd Year Undergrad in CSE at IIT Tirupati. I am from Hyderabad,
            Telangana. Interested in Machine learning, well versed with Full
            stack development. Check out my projects for more idea.{" "}
          </p>
          <div className="flex justify-center mx-auto  mt-5 gap-5 ">
            <a href="https://twitter.com/PARDHIVANN27456" target="_blank">
              <FaTwitter
                className="scale-150"
                color={darkMode ? "white" : "black"}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/pardhiv-annabattula-93617325b/"
              target="_blank"
            >
              <FaLinkedin
                className="scale-150"
                color={darkMode ? "white" : "black"}
              />
            </a>
            <a href="https://github.com/PardhivA" target="_blank">
              <FaGithub
                className="scale-150"
                color={darkMode ? "white" : "black"}
              />
            </a>
          </div>
        </section>
        <div className="flex row-auto mt-20">
          <div className="w-100 h-100 mr-10 mt-10">
            <TableofContents />
          </div>
          <div className="mx-auto ">
            <section>
              <Education />
            </section>
            <section>
              <h2
                className="text-cyan-400 text-4xl pb-10 mt-40 font-sans"
                id="Projects"
              >
                ★ Projects
              </h2>
              {plist}
            </section>
            <section>
              <h2
                className="text-green-400 text-4xl pb-10 mt-40 font-sans"
                id="Chat"
              >
                ★ Chat
              </h2>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
