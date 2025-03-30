// import { Link, useLocation } from "react-router-dom";

// const NavLinks = () => {
//   const links = [
//     { name: "Find jobs", url: "find-jobs" },
//     { name: "Find Talent", url: "find-talent" },
//     { name: "Post jobs", url: "post-job" },
//     { name: "About us", url: "about" },
//   ];
  
//   const location = useLocation();

//   return (
//     <div className="flex gap-5 ">
//       {links.map((link, index) => (
//         <Link
//           key={index}
//           to={link.url}
//           className="hover:text-blue-500 transition-colors duration-300 [&_button[data-active='true']]:text-blue-400"
//         >
//           {link.name}
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default NavLinks;

import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
  const links = [
    { name: "Jobs", url: "find-jobs" },
    { name: "Hackathon", url: "find-hackathon" },
    { name: "Post jobs", url: "post-job/0" },
    { name: "About us", url: "about-us" },
  ];

  const location = useLocation();

  return (
    <div className="flex gap-5 bs-mx:hidden">
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/${link.url}`}
          className={`transition-colors duration-300 ${
            location.pathname === `/${link.url}` ? "text-blue-400" : "hover:text-blue-500"
          }`}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
