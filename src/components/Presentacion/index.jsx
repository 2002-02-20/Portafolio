import React from "react";
import ProfilePic from "/derek.jpg";

const Presentacion = () => {
  return (
    <>
      <div className="sm:px-10 text-5xl text-indigo-900 md:flex md:items-center">
        <h1 className="text-wrap py-4 px-8">
          Hi 👋, <br />
          My name is <br />
          Derek Moscui <br />
          I build things for web <br />
        </h1>
        <img src={ProfilePic} alt="Master Developer" className=" w-[500px] rounded-[50%] border-4 border-indigo-700/100 transform hover:scale-110 transition duration-300 ease-in-out md:w-[550px] md:border-sky-400 " />
      </div>
    </>
  );
};

export default Presentacion;
