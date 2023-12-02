import React from "react";
import { useEffect, useState } from "react";

function TableofContents() {
  const [headings, setHeadings] = useState([]);
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h2, h3, h4")).map(
      (elem) => ({
        id: elem.id,
        text: elem.innerText,
        level: Number(elem.nodeName.charAt(1)),
      })
    );
    setHeadings(elements);
  }, []);

  const getClassName = (level) => {
    switch (level) {
      case 2:
        return "head2";
      case 3:
        return "head3";
      case 4:
        return "head4";
      default:
        return null;
    }
  };

  return (
    <nav className=" top-40 pl-10 w-60  sticky self-start  overflow-auto mr-20 ">
      <ul>
        {headings.map((heading) => {
          if (heading.text[0] == "★") {
            return (
              <li key={heading.text} className={getClassName(heading.level)}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(`#${heading.id}`).scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  className=" text-2xl dark:text-white"
                >
                  {heading.text}
                </a>
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
}

export default TableofContents;
