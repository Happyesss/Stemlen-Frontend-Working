import { Avatar, Button, TextInput } from '@mantine/core';
import landingImage from '../../assets/images/Connecting.png';
import { IconFileCv, IconSearch, IconTie } from '@tabler/icons-react';
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
            <span className="sm-mx:hidden">Search</span>
            <IconSearch className="hidden sm-mx:inline" />
          </Button>
        </div>
      </div>

      <div className="w-[55%] sm-mx:w-full flex items-center justify-center">
        <div className="w-[35rem] relative sm-mx:w-full">
          <img src={landingImage} alt="" className="sm-mx:w-full" />
          <div
            className={`absolute -right-10 w-fit top-[40%] border-blue-400 border rounded-lg p-2
            sm-mx:top-[44%] sm-mx:-right-4 sm-mx:p-[4px] sm-mx:scale-[0.65] sm-mx:rounded-md
            md:-right-6 md:top-[42%] md:p-[6px] md:scale-[0.85]
            ${isDarkMode ? 'bg-cape-cod-900' : 'bg-white'}`}>

            <div
              className={`text-center mb-[2px] text-sm sm-mx:text-[9px] sm-mx:mb-[1px] md:text-xs ${isDarkMode ? 'text-cape-cod-100' : 'text-cape-cod-900'}`}>
              Join 25k+ People
            </div>

            <Avatar.Group className="gap-[2px] sm-mx:gap-[1px] md:gap-[3px]">
              <Avatar
                className="sm-mx:h-[14px] sm-mx:w-[14px] md:h-[20px] md:w-[20px] h-6 w-6"
                src="https://img.freepik.com/free-photo/portrait-delighted-hipster-male-student-with-crisp-hair_176532-8157.jpg?semt=ais_hybrid&w=740"
              />
              <Avatar
                className="sm-mx:h-[14px] sm-mx:w-[14px] md:h-[20px] md:w-[20px] h-6 w-6"
                src="https://static.vecteezy.com/system/resources/thumbnails/054/007/118/small/a-young-man-with-a-backpack-and-plaid-shirt-photo.jpg"
              />
              <Avatar
                className="sm-mx:h-[14px] sm-mx:w-[14px] md:h-[20px] md:w-[20px] h-6 w-6"
                src="https://plus.unsplash.com/premium_photo-1683140621573-233422bfc7f1?fm=jpg&q=60&w=3000"
              />
              <Avatar
                className="text-sm text-black sm-mx:h-[16px] sm-mx:w-[16px] sm-mx:text-[9px] md:h-[20px] md:w-[20px] md:text-xs"
                color="text-black"
              >
                +10k
              </Avatar>
            </Avatar.Group>
          </div>



          <div className={`absolute -right-10 w-fit top-[15%] sm-mx:right-0 sm-mx:p-1 bg-transparent`}>
            <div className='flex gap-3 items-center sm-mx:gap-2'>
              <div className={`w-28 h-10 p-1 bg-transparent rounded-lg sm-mx:w-16 sm-mx:h-8`}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Paper_Plane_Vector.svg/2560px-Paper_Plane_Vector.svg.png" alt="" />
              </div>
            </div>
          </div>
          <div className={`absolute  w-fit top-[25%] sm-mx:left-4 sm-mx:p-1 bg-transparent`}>
            <div className='flex gap-3 items-center sm-mx:gap-2'>
              <div className={`w-28 h-10 p-1 bg-transparent rounded-lg sm-mx:w-16 sm-mx:h-8`}>
                <IconTie className='text-blue-400' />
              </div>
            </div>
          </div>

          <div
            className={`absolute -left-5 w-fit top-[50%] border-blue-400 border rounded-lg p-2 sm-mx:left-0 
            sm-mx:p-1 sm-mx:scale-[0.75] md:-left-3 md:p-[6px] md:scale-[0.9] ${isDarkMode ? 'bg-cape-cod-900' : 'bg-white'}`}>
            <div className='flex gap-3 items-center sm-mx:gap-2 md:gap-2.5'>
              <div
                className={`w-10 h-10 p-1 rounded-lg ${isDarkMode ? 'bg-cape-cod-900' : 'bg-white'} sm-mx:w-6 sm-mx:h-6 sm-mx:p-[2px] 
                md:w-8 md:h-8 md:p-[3px]`}>
                <img
                  src="https://pngimg.com/d/google_PNG19635.png"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <div
                className={`text-sm sm-mx:text-[10px] sm-mx:-ml-2 md:text-xs md:-ml-1${isDarkMode ? 'text-cape-cod-100' : 'text-cape-cod-900'}`}>
                <div>Software Engineer</div>
              </div>
            </div>

            <div
              className={`flex gap-2 ml-8 justify-around text-xs sm-mx:ml-4 sm-mx:gap-1 sm-mx:text-[9px] md:ml-6 md:gap-1.5 md:text-[11px]
              ${isDarkMode ? 'text-cape-cod-200' : 'text-cape-cod-700'}`}>
              <span>Explore big giants</span>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default DreamJob;