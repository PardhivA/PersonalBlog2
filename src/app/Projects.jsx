import Image from "next/image";
import React from "react";
import { list } from "./ProjectsList";
function Projects({ Name, Photo, Link, Description }) {
  return (
    <>
      <section>
        <div className="flex row-auto border-s-8 gap-2">
          <Image
            src={Photo}
            alt=""
            height={200}
            width={200}
            className="rounded-xl"
            // className="w-20 h-20"
          ></Image>
          <div>
            <h2 className="text-2xl font-semibold mb-2 dark:text-white">
              {Name}
            </h2>
            <a
              href={Link}
              target="_blank"
              className="text-fuchsia-600 text-lg  mb-2"
            >
              Repo Link
            </a>
            <p className="font-light dark:text-white">{Description}</p>
          </div>
        </div>
        <hr className="mt-4 mb-4" />
      </section>
    </>
  );
}

export default Projects;
