import { Button, Divider } from "@mantine/core"
import { IconArrowLeft } from "@tabler/icons-react"
import { useNavigate, useParams } from "react-router-dom"
import ApplyJobComp from "../ApplyJob/ApplyJobComp"
import { useEffect, useState } from "react"
import { getJob } from "../../Services/JobService"
import { useTheme } from "../../ThemeContext"

const ApplyJob = () => {
  const navigate=useNavigate();
  const {id}=useParams();
  const [job, setJob] = useState<any>(null);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
    getJob(id).then((res) => {
      setJob(res);
    }).catch((error) => {
      console.log(error);
    })
  }, [id])
  return (
    <div className={`min-h-[100vh] ${isDarkMode ? 'bg-cape-cod-950 text-gray-200' : 'bg-cape-cod-10 text-black'} font-['poppins'] p-4`}>
    <Divider size="xs" color={isDarkMode ? 'dark' : 'transparent'} />
       <Button my="md" leftSection={<IconArrowLeft size={20}/>} onClick={()=>navigate(-1)} color="blue.4" variant='light' >Back</Button> 
    <ApplyJobComp {...job}/>
    </div>
  )
}

export default ApplyJob