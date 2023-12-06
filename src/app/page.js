"use client";
import { TiAdjustContrast } from "react-icons/ti";
import { TiMail } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import Image from "next/image";
import Typewriter from "./Typewriter";
import Pardhiv from "../../public/Pardhiv.jpg";
import { useState } from "react";
import PAIcon from "../../public/PAIcon.png";
import Education from "./Education";
import Projects from "./Projects";
import TableofContents from "./TableofContents";
import { list } from "./ProjectsList";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Chat from "./Chat";
import ChatSpace from "@/app/ChatSpace";
export default function Home() {
  const [darkMode, SetdarkMode] = useState(false);
  const [user] = useAuthState(auth);
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
              <Image
                src={PAIcon}
                alt="Icon"
                className="mt-1 w-8 h-8 rounded-md"
              />
              <a href="#">
                <h1 className="text-1xl pl-3 mt-2 font-bold font-burton bg-gradient-to-r from-green-500 to-indigo-500 inline-block bg-clip-text text-transparent cursor-pointer">
                  Pardhiv Personal Blog
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
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(`#ContactMe`).scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                />
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1USYTegBU6o1JaOaHPmLpD5-_1fnPh2Ke/view?usp=sharing"
                  className="px-2 py-2 bg-gradient-to-r from-red-600 to-pink-400 rounded-xl text-white"
                  target="_blank"
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
          <h2 className="py-2 font-bold text-black dark:text-white">
            Full stack App and Web Developer and Machine learning enthusiast
          </h2>
          <p className="py-2 text-black dark:text-white">
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
                id="ContactMe"
              >
                ★ ContactMe
              </h2>
              {/* {!user ? <Chat /> : <LogginChat />} */}
              {!user ? <Chat /> : <ChatSpace />}{" "}
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
