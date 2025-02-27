import { Divider } from '@mantine/core'
import PostJobs from '../PostJobs/PostJobs'
import { useTheme } from '../../ThemeContext';

const PostPage = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className={`min-h-[100vh] ${isDarkMode ? 'bg-cape-cod-950 text-gray-200' : 'bg-cape-cod-10 text-black'} font-['poppins'] p-4`}>
    <Divider size="xs" color={isDarkMode ? 'dark' : 'transparent'} />
    <PostJobs/>
    </div>
  )
}

export default PostPage