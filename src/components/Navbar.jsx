// import React, { useEffect, useState } from "react";

// const Navbar = () => {
//   const [sticky, setSticky] = useState(false);
//   const [open, setOpen] = useState(false);
//   const menuLinks = [
//     { name: "HOME", link: "#home" },
//     { name: "ABOUT", link: "#about" },
//     { name: "SKILLS", link: "#skills" },
//     { name: "PROJECTS", link: "#projects" },
//     { name: "CONTACT", link: "#contact" },
//   ];
//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       const nav = document.querySelector("nav");
//       window.scrollY > 0 ? setSticky(true) : setSticky(false);
//     });
//   }, []);

//   return (
//     <nav
//       className={`fixed w-full left-0 top-0 z-[999] ${
//         sticky ? "bg-white/80  text-sky-900" : "text-white"
//       }`}
//     >
//       <div className="flex items-center justify-between">
//         <div className="mx-2 md:mx-20">
//           <a href="#home">
//             <button style={{ position: "relative", overflow: "hidden" }}>
//               <h4 className="text-6xl uppercase font-bold">
//                 <span
//                   className="gradient-text"
//                   style={{
//                     background:
//                       "linear-gradient(45deg, cyan 40% 42%, white 20% 58%, cyan 40% 60%)",
//                     WebkitBackgroundClip: "text",
//                     WebkitTextFillColor: "transparent",
//                     opacity: 1,
//                     textShadow:
//                       "3px 3px 5px rgba(0, 0, 0, 0.8), -3px -3px 5px rgba(0, 0, 0, 0.8)",
//                   }}
//                 >
//                   AR
//                 </span>
//                 <span
//                   className="gradient-text"
//                   style={{
//                     background:
//                       "linear-gradient(45deg, yellow 40% 50%, blue 30% 60%, red 70%)",
//                     WebkitBackgroundClip: "text",
//                     WebkitTextFillColor: "transparent",
//                     opacity: 1,
//                     textShadow:
//                       "3px 3px 5px rgba(0, 0, 0, 0.8), -3px -3px 5px rgba(0, 0, 0, 0.8)",
//                   }}
//                 >
//                   CO
//                 </span>
//                 <span
//                   className="gradient-text"
//                   style={{
//                     background:
//                       "linear-gradient(45deg, green 37%, white 20% 60%, red 42% 70%)",
//                     WebkitBackgroundClip: "text",
//                     WebkitTextFillColor: "transparent",
//                     opacity: 1,
//                     textShadow:
//                       "3px 3px 5px rgba(0, 0, 0, 0.8), -3px -3px 5px rgba(0, 0, 0, 0.8)",
//                   }}
//                 >
//                   ME
//                 </span>
//               </h4>
//               <span
//                 style={{
//                   content: "",
//                   position: "absolute",
//                   top: "50%",
//                   left: "50%",
//                   transform: "translate(-50%, -50%)",
//                   width: "200%",
//                   height: "200%",
//                   background:
//                     "radial-gradient(circle, rgba(255, 0, 0, 0.3) 0%, rgba(255, 0, 0, 0) 70%)",
//                   opacity: 0,
//                   pointerEvents: "none",
//                   animation: "lightEffect 2s linear infinite",
//                 }}
//               />
//             </button>
//           </a>
//         </div>

//         <div
//           className={` ${
//             sticky ? "md:bg-white/0 bg-white" : "bg-white"
//           } text-gray-900 md:block hidden px-7 py-2 font-medium  rounded-bl-full`}
//         >
//           <ul className="flex items-center gap-1 py-2 text-lg">
//             {menuLinks?.map((menu, i) => (
//               <li key={i} className="px-6 hover:text-cyan-600">
//                 <a href={menu?.link}>{menu?.name}</a>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div
//           onClick={() => setOpen(!open)}
//           className={`z-[999]  ${
//             open ? "text-gray-900" : "text-gray-100"
//           } text-3xl md:hidden m-5`}
//         >
//           <ion-icon name="menu"></ion-icon>
//         </div>
//         <div
//           className={`md:hidden text-gray-900 absolute w-2/3 h-screen
//       px-7 py-2 font-medium bg-white top-0 duration-300 ${
//         open ? "right-0" : "right-[-100%]"
//       }`}
//         >
//           <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
//             {menuLinks?.map((menu, i) => (
//               <li
//                 onClick={() => setOpen(false)}
//                 key={i}
//                 className="px-6 hover:text-cyan-600"
//               >
//                 <a href={menu?.link}>{menu?.name}</a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       <style>
//         {`
//           @keyframes lightEffect {
//             0% {
//               background: radial-gradient(
//                 circle,
//                 rgba(25, 255, 255, 0.3) 0%,
//                 rgba(0, 0, 0, 0) 70%
//               );
//             }
//             33% {
//               background: radial-gradient(
//                 circle,
//                 rgba(255, 255, 0, 0.3) 0%,
//                 rgba(0, 0, 0, 0) 70%
//               );
//             }
//             66% {
//               background: radial-gradient(
//                 circle,
//                 rgba(0, 255, 0, 0.3) 0%,
//                 rgba(0, 0, 0, 0) 70%
//               );
//             }
//             100% {
//               background: radial-gradient(
//                 circle,
//                 rgba(25, 255, 255, 0.3) 0%,
//                 rgba(0, 0, 0, 0) 70%
//               );
//             }
//           }
//         `}
//       </style>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const menuLinks = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "SKILLS", link: "#skills" },
    { name: "PROJECTS", link: "#projects" },
    { name: "CONTACT", link: "#contact" },
  ];
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] ${
        sticky ? "bg-white/80  text-sky-900" : "text-white"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="mx-2 md:mx-20">
          <a href="#home">
            <button style={{ position: "relative", overflow: "hidden" }}>
              <h4 className="text-6xl uppercase font-bold">
                <span
                  className="gradient-text"
                  style={{
                    background:
                      "linear-gradient(45deg, cyan 40% 42%, white 20% 58%, cyan 40% 60%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    opacity: 1,
                    textShadow:
                      "3px 3px 5px rgba(0, 0, 0, 0.8), -3px -3px 5px rgba(0, 0, 0, 0.8)",
                  }}
                >
                  AR
                </span>
                <span
                  className="gradient-text"
                  style={{
                    background:
                      "linear-gradient(45deg, yellow 40% 50%, blue 30% 60%, red 70%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    opacity: 1,
                    textShadow:
                      "3px 3px 5px rgba(0, 0, 0, 0.8), -3px -3px 5px rgba(0, 0, 0, 0.8)",
                  }}
                >
                  CO
                </span>
                <span
                  className="gradient-text"
                  style={{
                    background:
                      "linear-gradient(45deg, green 37%, white 20% 60%, red 42% 70%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    opacity: 1,
                    textShadow:
                      "3px 3px 5px rgba(0, 0, 0, 0.8), -3px -3px 5px rgba(0, 0, 0, 0.8)",
                  }}
                >
                  ME
                </span>
              </h4>
              <span
                style={{
                  content: "",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "200%",
                  height: "200%",
                  background:
                    "radial-gradient(circle, rgb(255, 165, 1) 10%,rgb(0, 0, 255,1) 20%,rgba(255,0,0,1) 25%,rgba(25, 255, 255, 1) 30%, rgba(255, 255, 255,1) 40%,rgba(25, 255, 255, 1) 50%,rgba(0,100,0,1) 60%,rgba(255, 255, 255,1) 70%,rgb(255,0,0,1) 80%,rgba(255, 99, 71, 0) 90%)",
                  opacity: 0,
                  pointerEvents: "none",
                  animation: "lightEffect 5s linear infinite",
                }}
              />
            </button>
          </a>
        </div>

        <div
          className={` ${
            sticky ? "md:bg-white/0 bg-white" : "bg-white"
          } text-gray-900 md:block hidden px-7 py-2 font-medium  rounded-bl-full`}
        >
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li key={i} className="px-6 hover:text-cyan-600">
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999]  ${
            open ? "text-gray-900" : "text-gray-100"
          } text-3xl md:hidden m-5`}
        >
          <ion-icon name="menu"></ion-icon>
        </div>
        <div
          className={`md:hidden text-gray-900 absolute w-2/3 h-screen
      px-7 py-2 font-medium bg-white top-0 duration-300 ${
        open ? "right-0" : "right-[-100%]"
      }`}
        >
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li
                onClick={() => setOpen(false)}
                key={i}
                className="px-6 hover:text-cyan-600"
              >
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>
        {`
        @keyframes lightEffect {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0.5;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0;
          }
        }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
