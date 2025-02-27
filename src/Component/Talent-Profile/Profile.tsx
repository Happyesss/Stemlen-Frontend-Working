import { Button, Divider } from "@mantine/core";
import { IconBriefcase, IconMapPin, IconTie } from "@tabler/icons-react";
import ExperienceCard from "./ExperienceCard";
import CertiCard from "./CertiCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProfile } from "../../Services/ProfileServices";

const Profile = (props: any) => {
  const { id } = useParams();
  const[profile,setProfile]=useState<any>({})
  useEffect(() => {
    window.scrollTo(0, 0);
    getProfile(id).then((res) => {
      setProfile(res);
    }).catch((err) => {
      console.error(err);
    });
  }, [id])
  return (
    <div className="w-2/3">
      <div className="relative">
      <img
            className="rounded-t-2xl w-full h-64 object-cover"
            src={profile.profileBackground ? `data:image/jpeg;base64,${profile.profileBackground}` : require(`../../assets/images/bgimg.jpg`)}
            alt="ProfileBackground"
          />
        <img
          className="w-48 h-48 rounded-full -bottom-1/3 absolute left-3 border-cape-cod-950 border-8"
          src={profile.picture ? `data:image/jpeg;base64,${profile.picture}` : require(`../../assets/images/avatar.png`)}alt=""
        />
      </div>
      <div className="px-3 mt-24">
        <div className="text-3xl flex font-semibold justify-between">
          {profile?.name}
          <Button color="blue.4" variant="light">
            Message
          </Button>
        </div>
        <div className="text-xl flex gap-1 items-center">
          <IconTie className="h-5 w-5" stroke={1.5} />{profile?.jobTitle} &bull; {profile?.company}
        </div>
        <div className="flex gap-1 text-lg text-cape-cod-300 items-center">
          <IconMapPin className="h-5 w-5" stroke={1.5} /> {profile?.location}
        </div>
        <div className="flex gap-1 text-lg text-cape-cod-300 items-center">
          <IconBriefcase className="h-5 w-5" stroke={1.5} /> {profile?.totalExp} years of experience
          </div>
      </div>
      <Divider mx="xs" my="xl" />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-3">About</div>
        <div className="text-sm text-cape-cod-300 text-justify">{profile?.about}</div>
      </div>
      <Divider mx="xs" my="xl" />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-3">Skills</div>
        <div className="flex flex-wrap gap-2">
          {
            profile?.skills && Array.isArray(profile?.skills) ? (
              profile?.skills.map((skill: any, index: any) => (
                <div
                  key={index}
                  className="bg-blue-300 bg-opacity-15 rounded-3xl text-blue-400 text-sm font-medium px-3 py-1"
                >
                  {skill}
                </div>
              ))
            ) : (
              <div>No skills available</div>
            )
          }
        </div>
      </div>
      <Divider mx="xs" my="xl" />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-3">Experience</div>
        <div className="flex flex-col gap-8">
        {
            profile?.experiences?.map((exp:any,index:any)=><ExperienceCard key={index} {...exp}/>)
        }
        </div>
      </div>
      <Divider mx="xs" my="xl" />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-3">Certification</div>
        {
            profile?.certifications?.map((certi:any,index:any)=><CertiCard key={index} {...certi}/>)
        }
      </div>
    </div>
  );
};

export default Profile;
