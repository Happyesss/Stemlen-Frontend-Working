import { ActionIcon, Textarea } from "@mantine/core";
import { IconCancel, IconDeviceFloppy, IconPencil } from "@tabler/icons-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { successNotification } from "../../Services/NotificationService";
import { changeProfile } from "../../Slices/ProfileSlice";
import { useTheme } from "../../ThemeContext";

const About = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state: any) => state.profile);
  const [about, setAbout] = useState("");
  const [edit, setEdit] = useState(false);
  const { isDarkMode } = useTheme();

  const handleEdit = () => {
    if (!edit) {
      setEdit(true);
      setAbout(profile.about);
    } else {
      setEdit(false);
    }
  };

  const handleSave = () => {
    setEdit(false);
    let updatedProfile = { ...profile, about: about };
    dispatch(changeProfile(updatedProfile));
    successNotification("Profile Updated Successfully", "Success");
  };

  return (
    <div>
      <div className="px-3">
        <div className="text-2xl font-semibold mb-3 flex justify-between">
          About
          <div>
            {edit && (
              <ActionIcon variant="subtle" radius="lg" color="blue.4" size="lg" onClick={handleSave}>
                <IconDeviceFloppy className="h-4/5 w-4/5" />
              </ActionIcon>
            )}
            <ActionIcon variant="subtle" radius="lg" color={edit ? "red.8" : "blue.4"} size="lg" onClick={handleEdit}>
              {edit ? <IconCancel className="h-4/5 w-4/5" /> : <IconPencil className="h-4/5 w-4/5" stroke={1.5} />}
            </ActionIcon>
          </div>
        </div>
        {edit ? (
          <Textarea
            value={about}
            placeholder="Write something about yourself..."
            autosize
            minRows={3}
            maxRows={6}
            onChange={(event) => setAbout(event.currentTarget.value)}
            styles={() => ({
              input: {
                  backgroundColor: isDarkMode ? "#2c3534" : "white",
                  color: isDarkMode ? "white" : "black",
                  borderColor: isDarkMode ? "#161d1d" : "#d1d5db"
              }
          })}
            />
        ) : (
          <div className={`text-sm text-justify ${isDarkMode ? 'text-cape-cod-300' : 'text-gray-500'}`}>{profile.about}</div>
        )}
      </div>
    </div>
  );
};

export default About;