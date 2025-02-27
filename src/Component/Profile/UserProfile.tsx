import { Avatar, Divider, FileInput, Indicator } from "@mantine/core";
import { IconPencil } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import Info from "./Info";
import { changeProfile } from "../../Slices/ProfileSlice";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Certificate from "./Certificate";
import { successNotification } from "../../Services/NotificationService";
import { getBase64 } from "../../Services/Utilities";
import ProfilePostedJob from "../PostedJob/ProfilePostedJob";

const UserProfile = (props: any) => {
  const dispatch = useDispatch();
  const profile = useSelector((state: any) => state.profile);
  const user = useSelector((state: any) => state.user);

  const handleProfilePicChange = async (image: any) => {
    let picture: any = await getBase64(image);
    let updatedProfile = { ...profile, picture: picture.split(',')[1] };
    dispatch(changeProfile(updatedProfile));
    successNotification('Profile Picture Updated Successfully', 'Success');
  };

  const handleprofileBackgroundChange = async (image: any) => {
    let profileBackground: any = await getBase64(image);
    let updatedProfile = { ...profile, profileBackground: profileBackground.split(',')[1] };
    dispatch(changeProfile(updatedProfile));
    successNotification('ProfileBackground Updated Successfully', 'Success');
  };

  return (

    <div className="w-2/3 mx-10 lg-mx:w-full bs-mx:mx-2 ">
      <div className="relative">
        <img
          className="rounded-t-2xl w-full h-40 xsm:h-44 xs:h-48 sm:h-52 md:h-56 bs:h-60 lg:h-64 xl:h-72 object-cover"
          src={profile.profileBackground ? `data:image/jpeg;base64,${profile.profileBackground}` : require(`../../assets/images/bgimg.jpg`)}
          alt="Profile Background"
        />

        <div className="absolute bottom-1/6 right-1">
          <Indicator
            className="[&_.mantine-Indicator-indicator]:!border-4 [&_.img]:hover:opacity-80"
            autoContrast
            inline
            offset={30}
            label={<IconPencil className="h-4/5 w-4/5" stroke={1.5} />}
            size="45"
            position="bottom-end"
            color="blue.4"
            withBorder
          >
            <FileInput
              onChange={handleprofileBackgroundChange}
              className="absolute bottom-2 right-2 z-[201] w-12 [&_div]:text-transparent"
              variant="unstyled"
              size="lg"
              radius="xl"
              accept="image/png,image/jpeg"
            />
          </Indicator>
        </div>
        <div className="absolute -bottom-1/3 left-3">
          <Indicator color="transparent"
          >
            <Avatar
              className="!w-48 !h-48 lg-mx:!h-40 lg-mx:!w-40 sm-mx:!w-32 sm-mx:!h-32  rounded-full -bottom-1/3 absolute left-3 border-cape-cod-950 border-8 cursor-pointer"
              src={profile.picture ? `data:image/jpeg;base64,${profile.picture}` : require(`../../assets/images/avatar.png`)}
              alt="Profile"
              onClick={() => document.getElementById('profile-pic-input')?.click()}
            />
            <FileInput
              id="profile-pic-input"
              onChange={handleProfilePicChange}
              className="absolute bottom-2 right-2 z-[201] w-12 [&_div]:text-transparent sm-mx:!w-8"
              variant="unstyled"
              size="lg"
              radius="xl"
              accept="image/png,image/jpeg"
              style={{ display: 'none' }}
            />
          </Indicator>
        </div>
      </div>
      <Info />
      <Divider mx="xs" my="xl" color="dark" />
      <About />

      {user.accountType === 'COMPANY' &&
      <><Divider mx="xs" my="xl" color="dark" /><ProfilePostedJob /></>
       }
      
      {user.accountType !== 'COMPANY' && (
        <>
          <Divider mx="xs" my="xl" color="dark" />
          <Skills />
          <Divider mx="xs" my="xl" color="dark" />
          <Experience />
          <Divider mx="xs" my="xl" color="dark" />
          <Certificate />
        </>
      )}
    </div>
  );
};

export default UserProfile;
