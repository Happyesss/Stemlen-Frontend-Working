import { Button, Divider, Drawer } from '@mantine/core'
import PostedJobs from '../PostedJob/PostedJobs'
import PostedJobDesc from '../PostedJob/PostedJobDesc'
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getJobPostedBy } from '../../Services/JobService';
import { useTheme } from '../../ThemeContext';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';


const PostedJob = () => {
  const { isDarkMode } = useTheme();
  const {id}=useParams();
  const navigate =useNavigate()
  const user =useSelector((state:any)=>state.user)
  const [opened,{open,close}]= useDisclosure(false);
  const [jobList, setJobList] = useState<any[]>([])
  const [job, setJob] = useState<any>({});
  const matches = useMediaQuery('(max-width: 768px)');
  useEffect(() => {
    window.scrollTo(0, 0);
    getJobPostedBy(user.id).then((res) => {
      setJobList(res);
      if(res && res.length>0&& Number(id)===0)navigate(`/posted-job/${res[0].id}`);
      setJob(res.find((item:any)=>item.id==id));
    }).catch((error) => {
      console.log(error);
    })
  }, [id])
  return (
    <div className={`min-h-[100vh] ${isDarkMode ? 'bg-cape-cod-950 text-gray-200' : 'bg-cape-cod-10 text-black'} font-['poppins'] p-4`}>
    <Divider size="xs" color={isDarkMode ? 'dark' : 'transparent'} />
    {matches&&<Button onClick={open} my="xs" variant="outline">All Jobs</Button>}
      <Drawer  size="xs" opened={opened} onClose={close} title="All Jobs"  >
      <PostedJobs job={job} jobList={jobList}/>
        </Drawer>
      <div className="flex gap-5">
      {!matches&&<PostedJobs job={job} jobList={jobList}/>}
       <PostedJobDesc {...job}/>
      </div>
    </div>
  )
}

export default PostedJob