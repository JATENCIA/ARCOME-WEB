import React, { useState } from "react";
import aboutImg from "../assets/images/desarrollo.jpg";

const About = () => {
  const info = [
    { text: "Years experience", count: "01" },
    { text: "Completed Projects", count: "04" },
    { text: "Companies Work", count: "01" },
  ];

  const [showFullText, setShowFullText] = useState(false);

  const toggleShowFullText = () => {
    setShowFullText(!showFullText);
  };
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Us</span>
        </h3>
        {/* <p className="text-gray-400 my-3 text-lg">My introduction</p> */}
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
                {showFullText
                  ? "Welcome to our web solutions portfolio! We are a team of entrepreneurs comprised of three Full Stack developers from Argentina, Colombia, and Mexico. Together, we combine our unique skills and experiences to deliver innovative and high-quality web solutions. Our team is committed to the success of our clients. We take pride in offering customized solutions tailored to the specific needs of each project. We are passionate about the world of web development and stay updated with the latest technologies and trends to deliver cutting-edge results. Cultural diversity and collaboration are the cornerstones of our team. The combination of our perspectives and approaches allows us to tackle challenges creatively and find effective solutions. We value clear and open communication, and strive to maintain a close and trusted relationship with our clients. Our service portfolio encompasses a wide range of web solutions, including custom web application development, corporate websites, e-commerce, mobile applications, search engine optimization (SEO), and appealing user interface design. When you work with us, you can expect a customer-centric approach and a high level of professionalism. We are committed to meeting established deadlines and delivering projects that exceed your expectations. Our passion for excellence drives us to continuously improve and provide web solutions that make a difference. We are excited to collaborate with you on your next project. If you are seeking quality web solutions and a reliable team that cares about your goals, don`t hesitate to contact us! We are ready to help you bring your ideas to life and take your online presence to the next level."
                  : "Welcome to our web solutions portfolio! We are a team of entrepreneurs comprised of three Full Stack developers from Argentina, Colombia, and Mexico. Together, we combine our unique skills and experiences to deliver innovative and high-quality web solutions. Our team is committed to the success of our clients. We take pride in offering customized solutions tailored to the specific needs of each project. We are passionate about the world of web development and stay updated with the latest technologies and trends to deliver cutting-edge results."}
              </p>
              <div className="flex mt-10 items-center gap-7">
                {showFullText ? (
                  <button className="btn-primary" onClick={toggleShowFullText}>
                    Read less
                  </button>
                ) : (
                  <button className="btn-primary" onClick={toggleShowFullText}>
                    Reed more
                  </button>
                )}
              </div>

              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              {/* <a href="./src/assets/CV_ José Atencia Jaramillo.pdf" download>
                <button className="btn-primary">Download CV</button>
              </a> */}
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
