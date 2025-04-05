import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
  const links = [
    { name: "Jobs", url: "find-jobs" },
    { name: "Hackathon & Events", url: "find-hackathon" },
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
