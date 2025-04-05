import { IconPalette, IconCode, IconArticle, IconSchool, IconTrophy, IconSpeakerphone } from "@tabler/icons-react";
import digitalMarketingImage from '../../assets/images/digital-marketing.png';
import uiuxImage from '../../assets/images/ui-ux.jpg'
import webdevImage from '../../assets/images/webdevimg.png'
import hackathonImage from '../../assets/images/hackathon.png'
import { useTheme } from "../../ThemeContext";
import { Loder } from "./Loder";

const quickItems = [
    {
        title: "UI-UX Designer",
        description: "Craft stunning user experiences and engage users.",
        bg: "#f6ded4",
        icon: <IconPalette />,
        image: uiuxImage
    },
    {
        title: "Web Developer",
        description: "Responsive, and high-performance websites that bring ideas to life.",
        bg: "#e4fff6",
        icon: <IconCode />,
        image: webdevImage
    },
    {
        title: "Content Writing",
        description: "Create compelling stories, informative blogs and engaging articles.",
        bg: "#b9e2f5",
        icon: <IconArticle />,
        image: "https://cdni.iconscout.com/illustration/premium/thumb/content-writing-illustration-download-in-svg-png-gif-file-formats--news-article-blog-writer-journalist-agile-pack-people-illustrations-5253308.png"
    },
    {
        title: "Jobs",
        description: "Find your dream job and take the next step in your career.",
        bg: "#ddc2ff",
        icon: <IconSpeakerphone />,
        image: digitalMarketingImage
    },
    {
        title: "Internship",
        description: "Gain hands-on experience,and kickstart your career in a professional setting.",
        bg: "#cdd3ff",
        icon: <IconSchool />,
        image: "https://static.wixstatic.com/media/ad04f7_1450ab6bf1ac44c98cf9f259b44f4d84~mv2.png/v1/fill/w_420,h_420,al_c,lg_1,q_85,enc_avif,quality_auto/ad04f7_1450ab6bf1ac44c98cf9f259b44f4d84~mv2.png"
    },
    {
        title: "Hackathons",
        description: "Challenge yourself, collaborate with innovators, and build groundbreaking projects",
        bg: "#e3ffd7",
        icon: <IconTrophy />,
        image: hackathonImage
    },
];

const QuickSection = () => {
    const { isDarkMode } = useTheme();
    return (
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 px-4 py-16 rounded-xl">
        {/* Left Section: Text */}
        <div className="flex flex-col justify-center space-y-6">
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold text-center sm:text-left ${isDarkMode ? 'text-cape-cod-100' : 'text-cape-cod-900'}`}>
            Top Categories &
            <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 text-cape-cod-900 before:bg-blue-300">
                        <span className="relative">Companies </span>
                    </span>
                    Searched
          </h1>
          <p className={`text-sm sm:text-base md:text-lg text-center sm:text-left ${isDarkMode ? 'text-cape-cod-300' : 'text-cape-cod-700'}`}>
            Explore a wide range of categories and find your perfect fit. Whether you're looking for a career in design, development, or marketing, we have something for everyone.
            <br /> Discover the latest trends and opportunities in your field of interest.
          </p>
          <div className="flex justify-center sm:justify-start">
           <Loder />
          </div>
        </div>
      
        {/* Right Section: Always Two Columns */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {quickItems.map((item, index) => (
            <div
              key={index}
              className="relative p-3 sm:p-4 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-1 min-h-[120px] sm:min-h-[140px] flex flex-col justify-between"
              style={{ background: item.bg }}
            >
              <div>
                <span className="text-cape-cod-700 text-lg sm:text-2xl mb-2 inline-block">
                  {item.icon}
                </span>
                <h5 className="text-cape-cod-900 text-sm sm:text-base font-semibold">{item.title}</h5>
                <p className="text-cape-cod-800 text-xs sm:text-sm">{item.description}</p>
              </div>
              <img
                src={item.image}
                alt={item.title}
                className="absolute top-2 right-2 w-12 h-12 sm:w-14 sm:h-14 object-cover rounded-lg border border-white shadow"
              />
            </div>
          ))}
        </div>
      </div>
    );
};

export default QuickSection;
