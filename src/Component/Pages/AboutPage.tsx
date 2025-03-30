import { Divider } from "@mantine/core";
import { useTheme } from "../../ThemeContext";
import { AboutUs } from "../AboutUs/AboutUs";

const AboutPage = () => {
   const { isDarkMode } = useTheme();
  
    return (
      <div className={`min-h-[100vh] ${isDarkMode ? 'bg-cape-cod-950 text-gray-200' : 'bg-cape-cod-10 text-black'} font-['poppins']`}>
        <AboutUs />
        <Divider mx="md" size="xs" color={isDarkMode ? 'dark' : 'gray'} />
      </div>
    );
}

export default AboutPage