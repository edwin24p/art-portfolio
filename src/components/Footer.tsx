import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="bg-purple-600 h-14 p-5 flex justify-between ">
      <div className="flex flex-col justify-center">
        <h3 className="bold">KIARA.</h3>
      </div>
      <div className="flex flex-col justify-center">
        <ul className="flex gap-4 underline">
          <li>About Me</li>
          <li>Projects</li>
          <li>Contact Me</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
