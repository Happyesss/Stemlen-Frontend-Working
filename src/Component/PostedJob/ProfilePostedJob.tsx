import { Button } from '@mantine/core';
import landingImage from '../../assets/images/Posted jobs.png';
import { useTheme } from "../../ThemeContext";
import { IconArrowNarrowRight } from '@tabler/icons-react';

const ProfilePostedJob = () => {
  const { isDarkMode } = useTheme();

  return (<>
    <div className="text-2xl font-semibold mb-3 flex justify-between ml-4">
      Posted Jobs
    </div>
    <div className={'flex items-center px-20 bs-mx:px-10 md-mx:px-5 sm-mx:px-2 sm-mx:flex-col-reverse mb-5 '}>

      <div className="flex flex-col w-[45%] sm-mx:w-[92%] gap-3">
        <div className={`text-4xl bs-mx:text-5xl md-mx:text-4xl sm-mx:text-3xl font-bold leading-tight ${isDarkMode ? 'text-white' : 'text-black'} [&>span]:text-blue-400`}>
          Get Track of Your<span> Posted Job </span>
        </div>
        <div className={`${isDarkMode ? 'text-cape-cod-200' : 'text-cape-cod-700'}`}>
          Discover thousands of opportunities tailored to your skills and ambitions. Whether you're a fresher or a seasoned professional, we’ve got the perfect role for you.
        </div>
        <div className='flex gap-3 mt-2'>
          <Button
            className="flex items-center justify-center mt-2 !rounded-full sm-mx:!w-[30%]"
            onClick={() => window.location.href = '/posted-job/0'}
          >Posted Jobs <IconArrowNarrowRight/></Button>
        </div>
      </div>

      <div className="w-[55%] sm-mx:w-full flex items-center justify-center">
        <div className="w-[35rem] relative sm-mx:w-full">
          <img src={landingImage} alt="" className="sm-mx:w-full" />

        </div>
      </div>
    </div>
  </>
  )
}

export default ProfilePostedJob