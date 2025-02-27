import { useState } from "react";
import { successNotification } from "../../Services/NotificationService";
import { changeProfile } from "../../Slices/ProfileSlice";
import { useDispatch, useSelector } from "react-redux";
import { ActionIcon, TagsInput } from "@mantine/core";
import { IconCancel, IconDeviceFloppy, IconPencil } from "@tabler/icons-react";
import { useTheme } from "../../ThemeContext";

const Skills = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state: any) => state.profile);
  const [skills, setSkills] = useState<string[]>([]);
  const [edit, setEdit] = useState(false);
  const { isDarkMode } = useTheme();

  const handleEdit = () => {
    if (!edit) {
      setEdit(true);
      setSkills(Array.isArray(profile.skills) ? [...profile.skills] : []);
    } else {
      setEdit(false);
    }
  };

  const handleSave = () => {
    setEdit(false);
    const updatedProfile = { ...profile, skills: [...skills] };
    dispatch(changeProfile(updatedProfile));
    successNotification("Skills Updated Successfully", "Success");
  };

  const handleSkillsChange = (updatedSkills: string[]) => {
    setSkills([...updatedSkills]); 
  };

  return (
    <div className="px-3">
      <div className="text-2xl font-semibold mb-3 flex justify-between">
        Skills
        <div>
          {edit && (
            <ActionIcon
              variant="subtle"
              radius="lg"
              color="blue.4"
              size="lg"
              onClick={handleSave}
            >
              <IconDeviceFloppy className="h-4/5 w-4/5" />
            </ActionIcon>
          )}
          <ActionIcon
            variant="subtle"
            radius="lg"
            color={edit ? "red.8" : "blue.4"}
            size="lg"
            onClick={handleEdit}
          >
            {edit ? (
              <IconCancel className="h-4/5 w-4/5" />
            ) : (
              <IconPencil className="h-4/5 w-4/5" stroke={1.5} />
            )}
          </ActionIcon>
        </div>
      </div>

      {edit ? (
        <TagsInput
          value={skills}
          onChange={handleSkillsChange}
          placeholder="Add your skills"
          splitChars={[",", " ", "|"]}
          styles={() => ({
            input: {
                backgroundColor:  isDarkMode ? "#2c3534" : "white",
                color: isDarkMode ? "white" : "black",
                borderColor: isDarkMode ? "#161d1d" : "#d1d5db"
            }
        })}
        />
      ) : (
        <div className="flex flex-wrap gap-2">
          {profile?.skills?.map((skill: string, index: number) => (
            <div
              key={index}
              className="bg-blue-300 bg-opacity-15 rounded-3xl text-blue-400 text-sm font-medium px-3 py-1"
            >
              {skill}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Skills;