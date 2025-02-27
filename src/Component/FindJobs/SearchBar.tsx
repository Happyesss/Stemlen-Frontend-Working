import { Divider } from "@mantine/core";
import { dropdownData } from "../../assets/Data/JobsData";
import MultiInput from "./MultiInput";
import React from "react";
import { useTheme } from "../../ThemeContext";

const SearchBar = () => {
  const { isDarkMode } = useTheme();

  return (<>
    <Divider color={isDarkMode ? 'dark' : 'gray'}/>
    <div className={`flex flex-wrap items-center gap-x-2 px-3 py-2 shadow-sm rounded-full mx-4 ${isDarkMode ? 'bg-cape-cod-900' : 'bg-white'}`}>
      {dropdownData
        .filter((item) => item.title === "Job Title" || item.title === "Location")
        .map((item, index) => (
          <React.Fragment key={index}>
            <div className="flex-1 min-w-0">
              <MultiInput {...item} />
            </div>
            {index === 0 && (
              <Divider className="hidden sm:block" mr="xs" size="xs" orientation="vertical" color={isDarkMode ? 'gray' : 'dark'} />
            )}
          </React.Fragment>
        ))}
    </div>
    </>
  );
};

export default SearchBar;
