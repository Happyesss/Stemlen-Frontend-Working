import { ActionIcon, Button, Divider } from "@mantine/core";
import { IconBookmark, IconBookmarkFilled } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { card } from "../../assets/Data/JobDescData";
//@ts-ignore
import DOMPurify from 'dompurify';
import { timeAgo } from "../../Services/Utilities";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../Slices/ProfileSlice";
import { useEffect, useState } from "react";
import { postJob } from "../../Services/JobService";
import { errorNotification, successNotification } from "../../Services/NotificationService";
import { useTheme } from "../../ThemeContext";

const JobDesc = (props: any) => {
  const data = DOMPurify.sanitize(props.description);
  const [applied, setApplied] = useState(false);
  const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const profile = useSelector((state: any) => state.profile);
  const { isDarkMode } = useTheme();

  const handleSaveJob = () => {
    let savedJobs = Array.isArray(profile.savedJobs) ? [...profile.savedJobs] : [];

    if (savedJobs.includes(props.id)) {
      savedJobs = savedJobs.filter((id) => id !== props.id);
    } else {
      savedJobs = [...savedJobs, props.id];
    }

    const updatedProfile = { ...profile, savedJobs };
    dispatch(changeProfile(updatedProfile));
  };

  useEffect(() => {
    if (props.applicants?.filter((applicant: any) => applicant.applicantId == user.id).length > 0) {
      setApplied(true);
    } else {
      setApplied(false);
    }
  }, [props]);

  const handleClose = () => {
    postJob({ ...props, jobStatus: "CLOSED" }).then((res) => {
      successNotification("Job Closed Successfully", "Success");
    }).catch((err) => {
      errorNotification(err.response.data.errorMessage, "Error");
    });
  };

  return (
    <div className={`w-2/3 bs-mx:w-full ${isDarkMode ? 'bg-cape-cod-950 text-gray-200' : 'bg-cape-cod-10 text-black'}`}>
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className={`p-3 rounded-xl ${isDarkMode ? 'bg-cape-cod-800' : 'bg-gray-200'}`}>
            {props.company && <img className="h-7" src={require(`../../assets/Icons/${props.company}.png`)} alt="" />}
          </div>
          <div>
            <div className="font-semibold text-2xl">{props.jobTitle}</div>
            <div className={`text-lg ${isDarkMode ? 'text-cape-cod-300' : 'text-gray-500'}`}>{props.company} &bull; {timeAgo(props.postTime)} &bull; {props.applicants ? props.applicants.length : 0} Applicants </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center">
          {(props.edit || !applied) && <Link to={props.edit ? `/post-job/${props.id}` : `/apply-job/${props.id}`}>
            <Button color="blue.4" size="sm" variant='light'>{props.closed ? "Reopen" : props.edit ? "Edit" : "Apply"}</Button>
          </Link>}
          {
            !props.edit && applied && <Button color="blue.4" size="sm" variant='transparent'>Applied</Button>
          }
          {props.edit && !props.closed ? <Button color="red.4" size="sm" variant='light' onClick={handleClose}>Close</Button> :

            profile.savedJobs?.includes(props.id) ? <IconBookmarkFilled onClick={handleSaveJob} className="cursor-pointer text-blue-400" stroke={1.5} />
              : <IconBookmark onClick={handleSaveJob} className={`cursor-pointer hover:text-blue-400 ${isDarkMode ? 'text-cape-cod-300' : 'text-gray-500'}`} />
          }
        </div>
      </div>
      <Divider my="xl" color='dark'/>
      <div className="flex justify-around">
        {
          card.map((item: any, index: number) => <div key={index} className="flex flex-col items-center gap-1">
            <ActionIcon className="!h-12 !w-12" color="blue.4" variant="transparent" radius="xl" aria-label="Settings">
              <item.icon className="h-4/5 w-4/5" stroke={1.5} />
            </ActionIcon>
            <div className={`text-sm ${isDarkMode ? 'text-cape-cod-300' : 'text-gray-500'}`}>{item.name}</div>
            <div className="font-semibold">{props ? props[item.id] : "NA"}{item.id == "packageOffered" && <>K</>}</div>
          </div>
          )}
      </div>
      <Divider my="xl" color='dark'/>
      <div>
        <div className="text-xl font-semibold mb-5">Required Skills</div>
        <div className="flex flex-wrap gap-2">{
          props?.skillsRequired?.map((skill: any, index: number) =>
            <ActionIcon key={index} className="!h-fit font-medium !text-sm !w-fit" color="blue.4" p="xs" variant="light" radius="xl" aria-label="Settings">
              {skill}
            </ActionIcon>
          )}
        </div>
      </div>
      <Divider my="xl" color='dark'/>
      <div className={`[&_*]:${isDarkMode ? 'text-cape-cod-300' : 'text-gray-500'} [&_h4]:text-xl [&_h4]:my-5 [&_h4]:font-semibold [&_h4]:${isDarkMode ? 'text-cape-cod-200' : 'text-gray-700'} [&_p]:text-justify [&_li]:marker:text-blue-400 [&_li]:mb-1`}
        dangerouslySetInnerHTML={{ __html: data }}>

      </div>
      {/*
      <Divider my="xl" color='dark'/>
       <div>
        <div className="text-xl font-semibold mb-5">About Company</div>
        <div className="flex justify-between mb-3">
          <div className="flex gap-2 items-center">
            <div className={`p-3 rounded-xl ${isDarkMode ? 'bg-cape-cod-800' : 'bg-gray-200'}`}>
              {props.company && <img className="h-7" src={require(`../../assets/Icons/${props.company}.png`)} alt="" />}
            </div>
            <div className="flex flex-col">
              <div className="font-medium text-2xl">{props.company}</div>
              <div className={`${isDarkMode ? 'text-cape-cod-300' : 'text-gray-500'}`}>10k+ viewed </div>
            </div>
          </div>
          <Link to={`/company/${props.company}`}>
            <Button color="blue.4" size="sm" variant='light'>Know More</Button>
          </Link>
        </div>
        <div className={`${isDarkMode ? 'text-cape-cod-300' : 'text-gray-500'} text-justify`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo illum itaque,
          commodi animi repellat atque laudantium laborum, dicta cupiditate vitae debitis tenetur iure! Sed odit qui ab inventore,
          harum doloribus.</div>
      </div> */}
    </div>
  )
}

export default JobDesc;