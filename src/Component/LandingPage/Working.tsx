import { IconBriefcase, IconBriefcaseFilled, IconBrowserCheck, IconBrowserShare, IconChecklist } from '@tabler/icons-react';
import landingImage from '../../assets/images/Connecting.png';
import { useTheme } from "../../ThemeContext";

const Working = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`mt-20 pb-20 flex flex-col items-center ${isDarkMode ? 'bg-cape-cod-950 text-white' : ' text-black'}`}>
      {/* Heading Section */}
      <div className="text-center mb-16">
        <h1 className={`text-4xl font-semibold ${isDarkMode ? 'text-white' : 'text-cape-cod-900'}`}>
          How to get <span className="text-blue-400">started</span>
        </h1>
        <p className={`text-lg mt-4 ${isDarkMode ? 'text-cape-cod-200' : 'text-cape-cod-300'} max-w-2xl mx-auto`}>
          Follow these simple steps to land your dream job.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl px-8">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
          <img className="w-[30rem]" src="https://mindfulbots.com/assets/about-rpa/Public-Sector.png" alt="Landing" />
        </div>

        {/* Steps Section */}
        <div className="md:w-1/2 flex flex-col gap-8">
          {/* Step 1 */}
          <div className="flex items-center gap-6">
            <div className=" flex-shrink-0">
              <IconChecklist size='64'/>  
            </div>
            <div>
              <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-cape-cod-800'}`}>1. Build Your Resume</h2>
              <p className={`${isDarkMode ? 'text-cape-cod-200' : 'text-cape-cod-600'}`}>
                Create a professional resume that highlights your skills and experience.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-center gap-6">
            <div className=" flex-shrink-0">
              <IconBrowserShare size='64' className='text-blue-400'/>
            </div>
            <div>
              <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-cape-cod-800'}`}>2. Search for Jobs</h2>
              <p className={`${isDarkMode ? 'text-cape-cod-200' : 'text-cape-cod-600'}`}>
                Use our search tool to find job listings that match your criteria.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-center gap-6">
            <div className=" flex-shrink-0">
            <IconBrowserCheck size='64' className='text-green-400'/>
              </div>
            <div>
              <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-cape-cod-800'}`}>3. Apply Online</h2>
              <p className={`${isDarkMode ? 'text-cape-cod-200' : 'text-cape-cod-600'}`}>
                Submit your application directly through our portal.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex items-center gap-6">
            <div className=" flex-shrink-0">
            <IconBriefcaseFilled size='64' className='text-yellow-400'/>
              </div>
            <div>
              <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-cape-cod-800'}`}>4. Get Hired</h2>
              <p className={`${isDarkMode ? 'text-cape-cod-200' : 'text-cape-cod-600'}`}>
                Receive job offers and start your new career.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Working;