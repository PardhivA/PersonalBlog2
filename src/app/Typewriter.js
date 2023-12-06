import React, { useState, useEffect } from "react";

const Typewriter = ({ delay }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCondition, setCurrentCondition] = useState(0);
  const [currentType, setCurrentType] = useState(0);
  const [currentRefText, setCurrentRefText] = useState(
    "Welcome to my personal blog ! "
  );
  useEffect(() => {
    let timeout;
    if (currentIndex < currentRefText.length && currentCondition === 0) {
      timeout = setTimeout(() => {
        setCurrentText((prevText) => {
          let temp = prevText.substring(0, prevText.length - 1);
          return temp + currentRefText[currentIndex] + "|";
        });
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      //   return () => clearTimeout(timeout);
    } else if (currentIndex > 0) {
      timeout = setTimeout(() => {
        setCurrentCondition(1);
        setCurrentText(() => {
          return currentRefText.substring(0, currentIndex - 2) + "|";
        });
        setCurrentIndex((prevIndex) => prevIndex - 1);
      }, delay / 2);
    } else {
      timeout = setTimeout(() => {
        if (currentType == 0) {
          setCurrentType(1);
          setCurrentRefText("Explore me and my projects, contact me !!");
        } else {
          setCurrentType(0);
          setCurrentRefText("Welcome to my personal blog !!  ");
        }
        setCurrentCondition(0);
      }, delay);
    }
    return () => clearTimeout(timeout);
  }, [currentIndex, delay, currentRefText, currentCondition]);

  return (
    <div className="flex justify-center mt-20 pt-5">
      <span className="font-mono text-black text-4xl object-center mb-20 dark:text-white">
        {currentText}
      </span>
    </div>
  );
};

export default Typewriter;
