import { useTheme } from '../../ThemeContext';
import Hackathon from '../FindHackathon/Hackathon';
import HackathonBanner from '../FindHackathon/HackathonBanner';

const HackathonPage = () => {
  const { isDarkMode } = useTheme();
  return (
   <div className={`min-h-[100vh] p-4 ${isDarkMode ? 'bg-cape-cod-950 text-gray-200' : 'bg-cape-cod-10 text-black'} font-['poppins']`}>
    
      <HackathonBanner />
      
      <Hackathon />
    </div>
  );
};

export default HackathonPage;