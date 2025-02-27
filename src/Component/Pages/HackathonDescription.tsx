import { Button, Divider } from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons-react'
import { Link } from 'react-router-dom'
import HackathonDesc from '../FindHackathon/HackathonDesc'
import RecommendedHacka from '../FindHackathon/RecommendedHacka'
import { useTheme } from '../../ThemeContext'

const HackathonDescription = () => {
   const { isDarkMode } = useTheme();
  
  return (
    <div className={`min-h-[100vh] ${isDarkMode ? 'bg-cape-cod-950 text-gray-200' : 'bg-cape-cod-10 text-black'} font-['poppins'] p-4`}>
        <Divider size="xs" color={isDarkMode ? 'dark' : 'transparent'} />
      <Link className='my-4 inline-block' to="/find-hackathon">
        <Button leftSection={<IconArrowLeft size={20} />} color="blue.4" variant='light'>Back</Button>
      </Link>
      <div className='flex flex-col lg:flex-row gap-5 justify-around'>
        <HackathonDesc />
        <RecommendedHacka />
      </div>
    </div>
  )
}

export default HackathonDescription