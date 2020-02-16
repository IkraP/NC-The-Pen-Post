import React from "react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const url = [
  "https://twitter.com/chemtocode",
  "https://github.com/IkraP/FE-NC-news-api",
  "https://www.linkedin.com/in/ikra-pervaiz/"
];

export default function Footer() {
  const handleClick = url => {
    window.open(url, "_blank");
  };
  return (
    <footer className="footer">
      <div className="footer-icons">
        <FaTwitter
          onClick={() => handleClick(url[0])}
          className="icon"
          color={"#1DA1F2"}
          size={25}
        />
        <FaGithub
          onClick={() => handleClick(url[1])}
          className="icon"
          color={"black"}
          size={25}
        />
        <FaLinkedin
          onClick={() => handleClick(url[2])}
          className="icon"
          color={"#2867B2"}
          size={25}
        />
      </div>
    </footer>
  );
}
