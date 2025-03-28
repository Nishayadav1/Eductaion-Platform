import React, { useState } from "react";
import LeftNav from "../components/LeftNav";
import MiddleNav from "../components/MiddleNav";
import RightNav from "../components/RightNav";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="px-6">
        <nav className="flex items-center justify-between h-16">
          {/* Left Section */}
          <LeftNav />

          {/* Middle Section - Desktop */}
          <div className="hidden md:flex flex-1 justify-center px-4">
            <MiddleNav />
          </div>

          {/* Right Section - Desktop */}
          <div className="hidden md:flex items-center">
            <RightNav />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <MiddleNav mobileView />
          </div>
          <div className="px-4 pt-2 pb-4 border-t border-gray-100">
            <RightNav mobileView />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;





// import React, { useState, useEffect } from "react";
// import {
//   FaBars,
//   FaBook,
//   FaClock,
//   FaCalendarAlt,
//   FaChartPie,
//   FaGraduationCap,
//   FaCertificate,
//   FaSignInAlt,
//   FaSignOutAlt,
//   FaUserCog,
//   FaUserCircle,
// } from "react-icons/fa";
// // import logo from "../assets/booklogo.webp";
// import user from "../assets/user.ico";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth <= 1024);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const navItems = [
//     { icon: <FaGraduationCap />, label: "Dashboard" },
//     { icon: <FaBook />, label: "Courses" },
//     { icon: <FaCalendarAlt />, label: "Calendar" },
//     { icon: <FaChartPie />, label: "Analytics" },
//     { icon: <FaCertificate />, label: "Certificates" },
//   ];

//   const rightIcons = [
//     { icon: <FaCalendarAlt /> },
//     { icon: <FaClock />, badge: true },
//   ];

//   const userDropdownItems = [
//     {
//       icon: <FaUserCog />,
//       label: "Settings",
//       action: () => console.log("Settings"),
//     },
//     {
//       icon: <FaSignInAlt />,
//       label: "Login",
//       action: () => console.log("Login"),
//     },
//     {
//       icon: <FaSignOutAlt />,
//       label: "Logout",
//       action: () => console.log("Logout"),
//     },
//   ];

//   return (
//     <div className="relative flex items-center justify-between bg-white px-6 h-[110px] shadow-lg rounded-lg w-full z-50">
//       {/* Logo */}
//       <img src='https://cdn.dribbble.com/userupload/39252236/file/original-f353eff0d72df666d721033436f7d818.png?resize=1024x768&vertical=center' alt="Logo" className="w-14 h-14 rounded-full shadow-md" />

//       {/* Mobile Toggle Button */}
//       {isMobile && (
//         <button
//           className="ml-auto p-3 rounded-lg bg-gray-200 hover:bg-pink-300 transition-transform duration-300 shadow-md hover:scale-110"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <FaBars />
//         </button>
//       )}

//       {/* Navigation Links */}
//       <nav
//         className={`${
//           isMobile
//             ? `absolute top-16 right-0 bg-white shadow-xl rounded-lg p-5 w-60 transition-transform duration-300 ${
//                 isOpen ? "translate-x-0" : "translate-x-full"
//               }`
//             : "flex items-center space-x-6 mx-auto"
//         }`}
//       >
//         <ul
//           className={`flex ${
//             isMobile ? "flex-col space-y-4" : "space-x-6"
//           } text-gray-700 font-semibold`}
//         >
//           {navItems.map((item, index) => (
//             <li
//               key={index}
//               className="flex items-center space-x-2 cursor-pointer hover:text-pink-500 transition duration-300 px-3 py-2 rounded-lg text-lg hover:scale-110"
//             >
//               <span className="transition-transform duration-300">
//                 {item.icon}
//               </span>
//               <span>{item.label}</span>
//             </li>
//           ))}
//         </ul>

//         {/* Right-Side Icons for Mobile */}
//         {isMobile && isOpen && (
//           <div className="flex justify-between mt-6 border-t pt-4">
//             {rightIcons.map((item, index) => (
//               <button
//                 key={index}
//                 className="p-3 rounded-full bg-gray-200 hover:bg-pink-300 transition-transform duration-300 shadow-sm hover:scale-110 relative"
//               >
//                 {item.icon}
//                 {item.badge && (
//                   <span className="absolute top-1 right-1 w-3 h-3 bg-pink-500 rounded-lg animate-pulse"></span>
//                 )}
//               </button>
//             ))}
//             <div className="relative">
//               <button
//                 onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
//                 className="p-1 rounded-lg hover:bg-gray-200 transition"
//               >
//                 <img
//                   src={user}
//                   alt="User"
//                   className="w-12 h-12 rounded-lg border-2 border-pink-500 shadow-md"
//                 />
//               </button>
//               {isUserDropdownOpen && (
//                 <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-lg py-2 z-50">
//                   {userDropdownItems.map((dropdownItem, idx) => (
//                     <button
//                       key={idx}
//                       className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
//                       onClick={dropdownItem.action}
//                     >
//                       <span className="mr-3">{dropdownItem.icon}</span>
//                       <span>{dropdownItem.label}</span>
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Right-Side Icons for Desktop */}
//       {!isMobile && (
//         <div className="flex items-center space-x-6 ml-auto ">
//           {rightIcons.map((item, index) => (
//             <button
//               key={index}
//               className="p-3 rounded-lg bg-gray-200 hover:bg-pink-300 transition-transform duration-300 shadow-sm hover:scale-110 relative"
//             >
//               {item.icon}
//               {item.badge && (
//                 <span className="absolute top-1 right-1 w-3 h-3 bg-pink-500 rounded-lg animate-pulse"></span>
//               )}
//             </button>
//           ))}
//           <div className="relative 
//           ">
//             <button
//               onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
//               className="p-1 rounded-lg hover:bg-gray-200 transition"
//             >
//               <img
//                 src={user}
//                 alt="User"
//                 className="w-12 h-12 rounded-lg border-2 border-pink-500 shadow-md"
//               />
//             </button>
//             {isUserDropdownOpen && (
//               <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-lg py-2 z-50">
//                 {userDropdownItems.map((dropdownItem, idx) => (
//                   <button
//                     key={idx}
//                     className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
//                     onClick={dropdownItem.action}
//                   >
//                     <span className="mr-3">{dropdownItem.icon}</span>
//                     <span>{dropdownItem.label}</span>
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
