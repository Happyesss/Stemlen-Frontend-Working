import SearchBar from "../FindJobs/SearchBar"
import Jobs from "../FindJobs/Jobs"
import FilterSidebar from "../FindJobs/FilterSidebar"
import { useTheme } from "../../ThemeContext"

const Findjobs = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-[100vh] ${isDarkMode ? 'bg-cape-cod-950 text-gray-200' : 'bg-cape-cod-10 text-black'} font-['poppins']`}>
      <SearchBar />
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/4 bs-mx:hidden ">
          <div className='text-2xl my-6 mx-4 ml-7 font-semibold'>Filter Jobs</div>
          <FilterSidebar />
        </div>
        <div className="w-full lg:w-3/4">
          <Jobs />
        </div>
      </div>
    </div>
  )
}

export default Findjobs