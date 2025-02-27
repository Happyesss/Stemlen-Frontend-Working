import { Button, Divider } from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons-react'
import { useNavigate } from 'react-router-dom'
import Profile from '../Talent-Profile/Profile'
import { profile } from '../../assets/Data/TalentData'
import RecommendTalent from '../Talent-Profile/RecommendTalent'
import { useEffect, useState } from 'react'
import { getAllProfiles } from '../../Services/ProfileServices'

const TalentProfile = () => {
 const navigate =useNavigate()
 const [talents, setTalents] = useState<any>([])
 useEffect(() => {
  getAllProfiles().then((res) => {
    setTalents(res);
  }).catch((err) => {
    console.error(err);
  });
}, [])
  return (
    <div className="min-h-[100vh] bg-cape-cod-950 font-['poppins'] p-4" >
    <Divider size="xs"/>
    
       <Button onClick={()=>navigate(-1)} my="sm" leftSection={<IconArrowLeft size={20}/>} color="blue.4" variant='light' >Back</Button> 
    
    <div className='flex gap-5'>
        <Profile {...profile}/>
        <RecommendTalent talents={talents}/>
    </div>
</div>
  )
}

export default TalentProfile