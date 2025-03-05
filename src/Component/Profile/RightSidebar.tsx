import React from "react";
import { IconPencil } from "@tabler/icons-react";
import { useTheme } from "../../ThemeContext";

const RightSidebar: React.FC = () => {
  const tags = [
    "c", "css", "express", "firebase", "html", "java", "javascript", "github",
    "mongodb", "mysql", "next.js", "node.js", "php", "python", "reactjs"
  ];
  const { isDarkMode } = useTheme();

  return (
    <aside className="hidden lg:block w-72 mt-10 mr-6 text-sm">
      {/* Widget Section */}
      <div className="mb-6 shadow-md rounded-2xl bg-blue-400 text-white">
        <h4 className="p-4 text-lg font-bold">The Stemlen Blog</h4>
        <div className="bg-orange-200 p-4 text-cape-cod-600 rounded-b-2xl">
          {["Stemlen is the hub where students can grow, collaborate, and discover new opportunities—whether in jobs, hackathons, or startup ventures. ", "Stemlen Testing: currenty Stemlen is in testing Phase some errors may occur."].map((text, idx) => (
            <div key={idx} className="flex items-start space-x-2 mb-2">
              <IconPencil />
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6 shadow-md rounded-2xl">
        <h4 className="p-4 text-lg font-bold rounded-t-2xl bg-blue-400 text-white">New features</h4>
        <div className="bg-blue-100 p-4 text-cape-cod-600 rounded-b-2xl">
          {[[1, "Now you can test resume score against the job description  "], [2, "features more Jobs and Hackatons with No commercial bias—listings from both big tech and startups."], [3, "Lot more to come..."]].map(([number, text], idx) => (
            <div key={idx} className="flex space-x-2 mb-2">
              <p className="font-bold">{number}</p>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Widget Tags Section */}
      <div className={`mb-6 shadow-md rounded-2xl ${isDarkMode ? 'bg-cape-cod-900 text-white' : 'bg-white text-black'}`}>
        <h4 className="p-4 text-sm font-bold rounded-t-2xl bg-blue-400">Most Common Skill tags</h4>
        <div className="flex flex-wrap p-4 gap-2 rounded-b-2xl">
          {tags.map((tag) => (
            <p key={tag} className={`px-2 py-1 rounded text-xs ${isDarkMode ? 'bg-cape-cod-700 text-blue-400' : 'bg-gray-200 text-blue-600'}`}>{tag}</p>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;