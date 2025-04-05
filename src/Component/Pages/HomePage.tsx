import DreamJob from '../LandingPage/DreamJob';
import Companies from '../LandingPage/Companies';
import Working from '../LandingPage/Working';
import Information from '../LandingPage/Information';
import QuickSection from '../LandingPage/QuickSection';
import { useTheme } from '../../ThemeContext';
import { Divider } from '@mantine/core';
import Testimonials from '../LandingPage/Testimonial';

const HomePage = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-[100vh] ${isDarkMode ? 'bg-cape-cod-950 text-gray-200' : 'bg-cape-cod-10 text-black'} font-['poppins']`}>
      <DreamJob />
      <Companies />
      <QuickSection />
      <Information />
      <Working />
      <Testimonials />
      <Divider mx="md" size="xs" color={isDarkMode ? 'dark' : 'gray'} />
    </div>
  );
};

export default HomePage;
