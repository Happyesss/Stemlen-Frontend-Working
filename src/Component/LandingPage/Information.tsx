import jobImage from '../../assets/images/jobimg1.png';
import connetingImage from '../../assets/images/connectingImg.png';
import { useTheme } from "../../ThemeContext";

const Information = () => {
    const { isDarkMode } = useTheme();
    return (
        <div className={`mt-20 pb-5 py-10 ${isDarkMode ? 'bg-cape-cod-950 text-white' : 'bg-cape-cod-10 text-black'}`}>
      <div className="text-4xl text-center font-semibold mb-3">
        Why <span className="text-blue-400">Stemlen</span>
      </div>
      <p className={`text-lg mb-10 mx-auto ${isDarkMode ? 'text-cape-cod-300' : 'text-cape-cod-700'} text-center w-1/2 sm-mx:w-[90%]`}>
        Stemlen is where growth begins. Just like a plant stems upward to reach new heights, we help you grow taller in your career, skills, and opportunities.
      </p>
            <div className="flex flex-wrap px-16 justify-center items-center gap-10">
                <div className="bg-purple-200 p-6 rounded-lg shadow-lg text-center w-72">
                    <img className="w-30 h-40 mx-auto mb-4" src={jobImage} alt="Job Opportunities" />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Job Opportunities</h3>
                    <p className="text-gray-600">Climb higher in your career with access to top jobs, internships, and mentorship programs.</p>
                </div>

                <div className="bg-green-200 p-6 rounded-lg shadow-lg text-center w-72">
                    <img className="w-40 h-40 mx-auto mb-4" src={"https://images.credly.com/images/05228e64-dd4b-4840-82fe-c504b2159376/image.png"} alt="Hackathons" />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Hackathons</h3>
                    <p className="text-gray-600">Participate in exciting hackathons by top leading companies and showcase your talent to the world.</p>
                </div>

                <div className="bg-orange-200 p-6 rounded-lg shadow-lg text-center w-72">
                    <img className="w-40 h-40s mx-auto mb-4" src={connetingImage} alt="Networking" />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Steming</h3>
                    <p className="text-gray-600">Connect with a community of like-minded individuals who support your growth journey. Stemlen Provides the a Strong Connecting Stem Just like the Plant</p>
                </div>
            </div>
        </div>
    )
}

export default Information;