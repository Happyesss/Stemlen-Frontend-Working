import { Divider } from "@mantine/core"
import JobGallery from "../JobGallery/JobGallery"
import { useTheme } from "../../ThemeContext";

const JobGalleryPage = () => {
  const { isDarkMode } = useTheme();
    return (
      <div className={`min-h-[100vh] ${isDarkMode ? 'bg-cape-cod-950 text-gray-200' : 'bg-cape-cod-10 text-black'} font-['poppins'] p-4`}>
    <Divider size="xs" color={isDarkMode ? 'dark' : 'transparent'} />
          <div className=" my-5">
           <JobGallery/>
          </div>
        </div>
      )
}

export default JobGalleryPage