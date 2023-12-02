import Image from "next/image";
import React from "react";
import IITT from "../../public/IITTP.jpg";
import FIITJEE from "../../public/FIITJEE.png";
import Bhashyam from "../../public/Bhashyam.png";
function Education() {
  return (
    <>
      <h2
        className="text-fuchsia-400 text-4xl pb-10 mt-3 font-sans"
        id="Education"
      >
        ★ Education
      </h2>
      <section>
        <div className="flex row-auto border-s-8 gap-2">
          <Image
            src={IITT}
            alt=""
            height={200}
            width={200}
            // className="w-20 h-20"
          ></Image>
          <div>
            <p className="text-fuchsia-600 text-lg  mb-2">2021-2025</p>
            <h2 className="text-2xl font-semibold mb-2 dark:text-white">
              B.Tech in Computer Science and Engineering
            </h2>
            <h2 className="text-red-900 text-xl mb-2">IIT Tirupati</h2>
            <p className="font-light dark:text-white">CGPA: 8.9</p>
          </div>
        </div>
        <hr className="mt-4 mb-4" />
        <div className="flex row-auto border-s-8 gap-2">
          <Image
            src={FIITJEE}
            alt=""
            // className="w-20 h-20"
            height={150}
            width={150}
          ></Image>
          <div className="">
            <p className="text-fuchsia-600 text-lg mt-2 mb-2">2019-2021</p>
            <h2 className="text-2xl font-semibold mb-2 dark:text-white">
              Intermediate - MPC
            </h2>
            <h2 className="text-amber-300 text-xl mb-2 ">
              FIITJEE Junior College
            </h2>
            <p className="font-light dark:text-white">CGPA: 98.8</p>
          </div>
        </div>
        <hr className="mt-4 mb-4" />
        <div className="flex row-auto border-s-8 gap-2">
          <Image
            src={Bhashyam}
            alt=""
            // className="w-20 h-20"
            height={150}
            width={150}
          ></Image>
          <div>
            <p className="text-fuchsia-600 text-lg mt-2 mb-2">2014-2019</p>
            <h2 className="text-2xl font-semibold mb-2 dark:text-white">
              High School
            </h2>
            <h2 className="text-red-600 text-xl mb-2">Bhashyam Olympiad</h2>
            <p className="font-light dark:text-white">CGPA: 9.8</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Education;
