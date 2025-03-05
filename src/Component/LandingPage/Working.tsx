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
          <img className="w-[30rem]" src={landingImage} alt="Landing" />
        </div>

        {/* Steps Section */}
        <div className="md:w-1/2 flex flex-col gap-8">
          {/* Step 1 */}
          <div className="flex items-center gap-6">
            <div className=" flex-shrink-0">
              <img className="h-20 w-20" src="https://static.vecteezy.com/system/resources/previews/032/851/483/non_2x/cv-approved-3d-illustration-icon-or-resume-approved-3d-illustration-icon-free-png.png" alt="Step 1" />
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
              <img className="h-20 w-20" src="https://cdn3d.iconscout.com/3d/premium/thumb/web-searching-3d-icon-download-in-png-blend-fbx-gltf-file-formats--search-browsing-ui-kit-elements-pack-user-interface-icons-5285037.png" alt="Step 2" />
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
              <img className="h-20 w-20" src="https://cdn3d.iconscout.com/3d/premium/thumb/apply-button-3d-icon-download-in-png-blend-fbx-gltf-file-formats--add-to-cart-call-action-click-cta-gesture-pack-user-interface-icons-11171750.png" alt="Step 3" />
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
              <img className="h-20 w-20" src="https://static.vecteezy.com/system/resources/thumbnails/038/567/487/small_2x/business-bag-isolated-on-transparent-3d-render-png.png" alt="Step 4" />
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