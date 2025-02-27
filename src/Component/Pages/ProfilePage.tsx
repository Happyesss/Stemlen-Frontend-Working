import { Divider } from "@mantine/core"

import UserProfile from "../Profile/UserProfile"
import { profile } from "../../assets/Data/TalentData"
import { useEffect, useState } from "react"
import { getAllProfiles } from "../../Services/ProfileServices"
import SmallCardRecommend from "../Talent-Profile/SmallCardRecommend"
import RightSidebar from "../Profile/RightSidebar"
import { useTheme } from "../../ThemeContext"

const ProfilePage = () => {
  const [talents, setTalents] = useState<any>([])
  const { isDarkMode } = useTheme();
 useEffect(() => {
  getAllProfiles().then((res) => {
    setTalents(res);
  }).catch((err) => {
    console.error(err);
  });
}, [])
  return (
    <div className={`min-h-[90vh] ${isDarkMode ? 'bg-cape-cod-950 text-gray-200' : 'bg-cape-cod-10 text-black'} font-['poppins']`}>
        <Divider mx="md" mb="xl" color={isDarkMode ? 'dark' : 'transparent'}/>
        <div className='flex gap-5'>
        <UserProfile {...profile}/>
        {/* <SmallCardRecommend {...talents} /> */}
        <RightSidebar />
        </div>
    </div>
  )
}

export default ProfilePage