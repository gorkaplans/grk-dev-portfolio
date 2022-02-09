import React from "react";
import "./Abstract.scss";

const Abstract = () => {
  return (
    <div className="mx-auto w-full flex flex-col border-b border-solid border-current md:flex-row">
      <div className="w-full md:w-7/12 border-b md:border-b-0 md:border-r border-solid border-current">
        <p className="text-extralight pt-10 pb-10 pr-10">
          Graduated on Multidisciplinary Design and then trained in front-end
          development, I have worked in a wide range of sectors, going from
          music entertainment to public administration. These experiences
          enabled me to acquire new methodologies in the workplace and establish
          a strong background in any kind of visual communications. <br></br>
          <br></br>I’m a detail-oriented and problem solving person.I master
          design softwares such as Suit Adobe and programming languages like
          Javascript.
        </p>
      </div>
      <div className="w-full md:w-5/12 flex md:px-10">
        <ul className="text-extralight py-10 grid grid-cols-2 lg:grid-cols-3 w-full circle">
          <li>Javascript</li>
          <li>React</li>
          <li>Vue</li>
          <li>Nextjs</li>
          <li>Html</li>
          <li>css</li>
          <li>SASS</li>
          <li>Tailwind css</li>
          <li>Wordpress</li>
          <li>API</li>
          <li>Redux</li>
          <li>npm</li>
        </ul>
      </div>
    </div>
  );
};

export default Abstract;
