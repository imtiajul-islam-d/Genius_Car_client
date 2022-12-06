import React from "react";
import person from './../../../assets/images/about_us/person.jpg'
import parts from './../../../assets/images/about_us/parts.jpg'


const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-4/5 md:w-1/2 relative mb-16">
          <img
            src={person}
            className=" max-w-sm rounded-lg shadow-2xl w-full md:w-4/5"
            alt=""
          />
          <img
            src={parts}
            className="absolute md:w-3/5 right-5 top-1/2 rounded-lg shadow-2xl"
            alt=""
          />
        </div>
        <div className="w-4/5 mt-6 md:w-1/2 md:pl-3">
            <p className="text-red-700 font-bold">About us</p>
            <h1 className="text-2xl md:text-5xl font-bold"> We are qualified <br /> & of experience <br /> in this field</h1>
            <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
                a id nisi.
                lorem20
            </p>
            <button className="btn btn-error bg-red-700 text-white">Get more info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
