import { ActionIcon, NumberInput, TextInput } from "@mantine/core";
import { IconBriefcase, IconCancel, IconDeviceFloppy, IconMapPin, IconPencil, IconTie } from "@tabler/icons-react";
import SelectInput from "./SelectInput";
import fields from "../../assets/Data/Profile";
import { useState } from "react";
import { useForm } from "@mantine/form";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../Slices/ProfileSlice";
import { successNotification } from "../../Services/NotificationService";
import { useTheme } from "../../ThemeContext";

const Info = () => {
  const select = fields;
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  const [edit, setEdit] = useState(false);
  const profile = useSelector((state: any) => state.profile);
  const { isDarkMode } = useTheme();

  const form = useForm({
    mode: "controlled",
    initialValues: { name: "", jobTitle: "", company: "", location: "", totalExp: 0 },
    validate: {
      name: (value: string) => (value.trim().length === 0 ? "Name cannot be empty" : null),
    },
  });
  

  const handleEdit = () => {
    if (!edit) {
      setEdit(true);
      form.setValues({
        name: profile.name,
        jobTitle: profile.jobTitle,
        company: profile.company,
        location: profile.location,
        totalExp: profile.totalExp,
      });
    } else {
      setEdit(false);
    }
  };

  const handleSave = () => {
    if (form.validate().hasErrors) return; // Stop saving if validation fails

    setEdit(false);
    const updatedProfile = { ...profile, ...form.getValues() };
    dispatch(changeProfile(updatedProfile));
    successNotification("Profile Updated Successfully", "Success");
  };

  return (
    <div className="px-3 mt-24">
      <div className="text-3xl flex font-semibold justify-between">
        {edit ? (
          <TextInput
            withAsterisk
            placeholder="Enter Your Name"
            {...form.getInputProps("name")}
            error={form.errors.name} // Show error message if validation fails
            styles={() => ({
              input: {
                backgroundColor: isDarkMode ? "#2c3534" : "white",
                color: isDarkMode ? "white" : "black",
                borderColor: isDarkMode ? "#161d1d" : "#d1d5db",
              },
            })}
          />
        ) : (
          profile.name
        )}
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
        <>
          {user.accountType !== 'COMPANY' && (
            <>
              <div
                className={`flex gap-10 [&>*]:w-1/2 ${
                  isDarkMode
                    ? " text-cape-cod-100 [&_input]:bg-cape-cod-900 [&_input]:!text-cape-cod-100 [&_input]:border-cape-cod-900 "
                    : "text-cape-cod-900 [&_input]:!text-cape-cod-900"
                }`}
              >
                <SelectInput form={form} name="jobTitle" {...select[0]} />
                <SelectInput form={form} name="company" {...select[1]} />
              </div>
              <div
                className={`flex gap-10 [&>*]:w-1/2 ${
                  isDarkMode
                    ? " text-cape-cod-100 [&_input]:bg-cape-cod-900 [&_input]:!text-cape-cod-100 [&_input]:border-cape-cod-900 "
                    : "text-cape-cod-900 [&_input]:!text-cape-cod-900"
                }`}
              >
                <SelectInput form={form} name="location" {...select[2]} />
                <NumberInput
                  withAsterisk
                  label="Experience"
                  placeholder="Enter Your Experience"
                  hideControls
                  clampBehavior="strict"
                  min={0}
                  max={50}
                  {...form.getInputProps("totalExp")}
                />
              </div>
            </>
          )}
          {user.accountType === 'COMPANY' && (
            <div
              className={`flex gap-10 [&>*]:w-1/2 ${
                isDarkMode
                  ? " text-cape-cod-100 [&_input]:bg-cape-cod-900 [&_input]:!text-cape-cod-100 [&_input]:border-cape-cod-900 "
                  : "text-cape-cod-900 [&_input]:!text-cape-cod-900"
              }`}
            >
              <SelectInput form={form} name="location" {...select[2]} />
            </div>
          )}
        </>
      ) : (
        <>
          {user.accountType !== 'COMPANY' && (
            <>
              <div className="text-xl flex gap-1 items-center">
                <IconTie className="h-5 w-5" stroke={1.5} /> {profile.jobTitle} &bull; {profile.company}
              </div>
              <div className={`flex gap-1 text-lg items-center ${isDarkMode ? "text-cape-cod-300" : "text-gray-500"}`}>
                <IconMapPin className="h-5 w-5" stroke={1.5} /> {profile.location}
              </div>
              <div className={`flex gap-1 text-lg items-center ${isDarkMode ? "text-cape-cod-300" : "text-gray-500"}`}>
                <IconBriefcase className="h-5 w-5" stroke={1.5} /> {profile.totalExp} years of experience
              </div>
            </>
          )}
          {user.accountType === 'COMPANY' && (
            <div className={`flex gap-1 text-lg items-center ${isDarkMode ? "text-cape-cod-300" : "text-gray-500"}`}>
              <IconMapPin className="h-5 w-5" stroke={1.5} /> {profile.location}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Info;
