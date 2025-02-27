import { IconPalette, IconCode, IconArticle, IconSchool, IconTrophy, IconSpeakerphone } from "@tabler/icons-react";
import digitalMarketingImage from '../../assets/images/digital-marketing.png';
import uiuxImage from '../../assets/images/ui-ux.jpg'
import webdevImage from '../../assets/images/webdevimg.png'
import hackathonImage from '../../assets/images/hackathon.png'
import { useTheme } from "../../ThemeContext";

const quickItems = [
    {
        title: "UI-UX Designer",
        description: "Craft stunning user experiences and intuitive interfaces that captivate and engage users.",
        bg: "#f6ded4",
        icon: <IconPalette />,
        image: uiuxImage
    },
    {
        title: "Web Developer",
        description: "Build dynamic, responsive, and high-performance websites that bring ideas to life.",
        bg: "#e4fff6",
        icon: <IconCode />,
        image: webdevImage
    },
    {
        title: "Content Writing",
        description: "Create compelling stories, informative blogs, and persuasive copy that resonate with audiences.",
        bg: "#b9e2f5",
        icon: <IconArticle />,
        image: "https://cdni.iconscout.com/illustration/premium/thumb/content-writing-illustration-download-in-svg-png-gif-file-formats--news-article-blog-writer-journalist-agile-pack-people-illustrations-5253308.png"
    },
    {
        title: "Digital Marketing",
        description: "Leverage SEO, social media, and online campaigns to amplify brand presence and drive engagement.",
        bg: "#ddc2ff",
        icon: <IconSpeakerphone />,
        image: digitalMarketingImage
    },
    {
        title: "Internship",
        description: "Gain hands-on experience, develop new skills, and kickstart your career in a professional setting.",
        bg: "#cdd3ff",
        icon: <IconSchool />,
        image: "https://static.wixstatic.com/media/ad04f7_1450ab6bf1ac44c98cf9f259b44f4d84~mv2.png/v1/fill/w_420,h_420,al_c,lg_1,q_85,enc_avif,quality_auto/ad04f7_1450ab6bf1ac44c98cf9f259b44f4d84~mv2.png"
    },
    {
        title: "Hackathons",
        description: "Challenge yourself, collaborate with innovators, and build groundbreaking projects in coding competitions.",
        bg: "#e3ffd7",
        icon: <IconTrophy />,
        image: hackathonImage
    },
];

const QuickSection = () => {
    const { isDarkMode } = useTheme();
    return (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 mt-20  p-3 rounded-xl">
           <div className="space-y-6">
                <h1 className={`text-5xl font-bold text-center md:text-left ${isDarkMode ? 'text-cape-cod-100' : 'text-cape-cod-900'}`}>Category</h1>
                <p className={`text-lg text-center md:text-left mx-auto md:mx-0 ${isDarkMode ? 'text-cape-cod-400' : 'text-cape-cod-700'}`}>
                    Get what you need, in a quick! Here's a rundown of what we offer, tailored to your needs.
                    No more endless searching. Find precisely what you're looking for in an instant.
                </p>
                <h2 className={`text-3xl font-semibold text-center md:text-left ${isDarkMode ? 'text-white' : 'text-cape-cod-900'}`}>
                    <span className="text-blue-400">Explore</span> Your <span className="text-blue-400">Roadmap</span> of Chosen <span className="text-blue-400">Language</span>
                </h2>
                <a href="roadmap.html" className="bg-blue-400 text-white px-6 py-2 rounded-lg inline-block hover:bg-blue-500 text-center md:text-left">
                    Get In
                </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {quickItems.map((item, index) => (
                    <div key={index} className="relative p-4 rounded-2xl shadow-md" style={{ background: item.bg }}>
                        {/* Image at the top right */}
                        <img 
                            src={item.image} 
                            alt={item.title} 
                            className="absolute top-2 right-2 w-20 h-20 object-cover rounded-lg"
                        />
                        <span className="text-cape-cod-600 text-2xl p-1 rounded-lg inline-block mb-4">
                            {item.icon}
                        </span>
                        <h5 className="text-cape-cod-900 text-lg font-semibold mb-2">{item.title}</h5>
                        <p className="text-cape-cod-800">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QuickSection;
