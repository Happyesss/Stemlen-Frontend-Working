import { useTheme } from '../../ThemeContext';
import Hackathon from '../FindHackathon/Hackathon';
import HackathonBanner from '../FindHackathon/HackathonBanner';
import { Helmet } from "react-helmet-async";
const HackathonPage = () => {
  const { isDarkMode } = useTheme();
  return (
    <>
      <Helmet>
        <title>Find Hackathons - Stemlen</title>
        <meta name="description" content="Discover and participate in hackathons. Find the best hackathon events that match your skills and interests. Without any commercial bias" />
      </Helmet>
      <div className={`min-h-[100vh] p-4 ${isDarkMode ? 'bg-cape-cod-950 text-gray-200' : 'bg-cape-cod-10 text-black'} font-['poppins']`}>
        <HackathonBanner />
        <Hackathon />
      </div>
    </>
  );
};

export default HackathonPage;