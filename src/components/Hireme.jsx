import React from "react";
import hireMe from "../assets/images/robot7.png";
const Hireme = () => {
  const ourSolutions = [
    { logo: "person-outline", name: "Custom Systems" },
    { logo: "settings-outline", name: "System Integration" },
    { logo: "tv-outline", name: "Web Development" },
    { logo: "hammer-outline", name: "Technological Assistance" },
  ];

  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Our <span className="text-cyan-600">Solutions</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div>
          <h2 className=" text-2xl font-semibold">
            Are you interested in any of our services?
          </h2>
          <p className="text-justify max-w-lg text-sm mt-4 text-gray-200 leading-7">
            In ARCOME, we are industry leaders in software development, and we
            are here to provide you with exceptional solutions. Our highly
            skilled and experienced team is dedicated to understanding your
            needs and delivering high-quality results. With our collaborative
            approach and ongoing support, we can drive your business towards
            success. Contact us today and discover how our expertise in software
            development can help you achieve your goals.
          </p>
          <br />
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {ourSolutions.map((elem, i) => (
              <div
                key={i}
                className="text-justify text-1xl 8 text-cyan-600  group-hover:text-cyan-600 "
              >
                <p>
                  {" "}
                  <ion-icon name={elem.logo}></ion-icon> &nbsp; {elem.name}
                </p>
              </div>
            ))}
            <a href="#contact">
              <button className="btn-primary mt-10">Say Hello</button>
            </a>
          </div>
        </div>
        <img
          src={hireMe}
          alt=""
          className="lg:h-[32rem] h-80 lg:absolute bottom-0 -right-3 object-cover"
        />
      </div>
    </section>
  );
};

export default Hireme;
