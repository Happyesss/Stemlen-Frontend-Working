import { Avatar, Button, TextInput } from '@mantine/core';
import landingImage from '../../assets/images/Connecting.png';
import { IconSearch } from '@tabler/icons-react';
import { useTheme } from "../../ThemeContext";

const DreamJob = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={'flex items-center px-20 bs-mx:px-10 md-mx:px-5 sm-mx:px-2 sm-mx:flex-col-reverse '}>
      <div className="flex flex-col w-[45%] sm-mx:w-[92%] gap-3">
        <div className={`text-6xl bs-mx:text-5xl md-mx:text-4xl sm-mx:text-3xl font-bold leading-tight ${isDarkMode ? 'text-white' : 'text-black'} [&>span]:text-blue-400`}>
          Get your <span>dream job </span> ready
        </div>
        <div className={`${isDarkMode ? 'text-cape-cod-200' : 'text-cape-cod-700'}`}>
          Discover thousands of opportunities tailored to your skills and ambitions. Whether you're a fresher or a seasoned professional, we’ve got the perfect role for you.
        </div>
        <div className='flex gap-3 mt-4'>
          <TextInput
            className={`rounded-lg p-1 px-2 ${isDarkMode ? ' text-cape-cod-100 [&_input]:bg-cape-cod-800 [&_input]:!text-cape-cod-100 [&_input]:border-transparent' : 'text-cape-cod-900 [&_input]:!text-cape-cod-900'} sm-mx:!w-full`}
            size="sm"
            radius="xl"
            label="Job Title"
            placeholder="Software Engineer"
          />
          <TextInput
            className={`rounded-lg p-1 px-2 ${isDarkMode ? 'text-cape-cod-100 [&_input]:bg-cape-cod-800 [&_input]:!text-cape-cod-100 [&_input]:border-transparent ' : 'text-cape-cod-900 [&_input]:!text-cape-cod-900'} sm-mx:!w-full`}
            size="sm"
            radius="xl"
            label="Job Type"
            placeholder="Fulltime"
          />
          <Button className="flex items-center justify-center mt-7 !rounded-full sm-mx:!w-[30%]">
            <span className="sm-mx:hidden">Search.</span> 
            <IconSearch className="hidden sm-mx:inline" /> 
          </Button>
        </div>
      </div>

      <div className="w-[55%] sm-mx:w-full flex items-center justify-center">
        <div className="w-[35rem] relative sm-mx:w-full">
          <img src={landingImage} alt="" className="sm-mx:w-full" />
          <div className={`absolute -right-10 bs-mx:right-0 w-fit top-[40%] border-blue-400 border rounded-lg p-2 backdrop-blur-md sm-mx:top-[30%] sm-mx:right-0 sm-mx:p-1 ${isDarkMode ? 'bg-cape-cod-900' : 'bg-white'}`}>
            <div className={`text-center mb-1 text-sm ${isDarkMode ? 'text-cape-cod-100' : 'text-cape-cod-900'} sm-mx:text-xs`}>10k+ got job</div>
            <Avatar.Group>
              <Avatar src="image.png" />
              <Avatar src="image.png" />
              <Avatar src="image.png" />
              <Avatar>+10k</Avatar>
            </Avatar.Group>
          </div>
          <div className={`absolute -left-10 w-fit top-[60%] border-blue-400 border rounded-lg p-2 backdrop-blur-md sm-mx:top-[50%] sm-mx:left-0 sm-mx:p-1 ${isDarkMode ? 'bg-cape-cod-900' : 'bg-white'}`}>
            <div className='flex gap-3 items-center sm-mx:gap-2'>
              <div className={`w-10 h-10 p-1 ${isDarkMode ? 'bg-cape-cod-900' : 'bg-white'} rounded-lg sm-mx:w-8 sm-mx:h-8`}>
                <img src="https://pngimg.com/d/google_PNG19635.png" alt="" />
              </div>
              <div className={`text-sm ${isDarkMode ? 'text-cape-cod-100' : 'text-cape-cod-900'} sm-mx:text-xs`}>
                <div>Software Engineer</div>
                <div className={`text-sm ${isDarkMode ? 'text-cape-cod-200' : 'text-cape-cod-700'} sm-mx:text-xs`}>India</div>
              </div>
            </div>
            <div className={`flex gap-2 justify-around ${isDarkMode ? 'text-cape-cod-200' : 'text-cape-cod-700'} text-xs sm-mx:text-[10px]`}>
              <span>Explore big giants</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DreamJob;