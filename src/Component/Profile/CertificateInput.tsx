import { Button, TextInput } from "@mantine/core";
import fields from "../../assets/Data/Profile";
import SelectInput from "./SelectInput";
import { MonthPickerInput } from "@mantine/dates";
import { useState } from "react";
import { isNotEmpty, useForm } from "@mantine/form";
import { successNotification } from "../../Services/NotificationService";
import { changeProfile } from "../../Slices/ProfileSlice";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "../../ThemeContext";

const CertificateInput = (props: any) => {
  const select = fields;
  const dispatch = useDispatch();
  const profile = useSelector((state: any) => state.profile);
  const { isDarkMode } = useTheme();

  const form = useForm({
    mode: 'controlled',
    validateInputOnChange: true,
    initialValues: { name: '', issuer: '', issueDate: new Date(), certificateID: '' },
    validate: {
      name: isNotEmpty('This field is required'),
      issuer: isNotEmpty('This field is required'),
      certificateID: isNotEmpty('This field is required'),
    }
  });

  const handleSave = () => {
    form.validate();
    if (!form.isValid()) return;

    let certi = [...profile.certifications];
    certi.push(form.getValues());
    let updatedProfile = { ...profile, certifications: certi };
    props.setEdit(false);
    dispatch(changeProfile(updatedProfile));
    successNotification('Certificate Added Successfully', 'Success');
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="text-lg font-semibold">Add Certificate</div>
      <div className={`flex gap-10 [&>*]:w-1/2 ${isDarkMode ? ' text-cape-cod-100 [&_input]:bg-cape-cod-900 [&_input]:!text-cape-cod-100 [&_input]:border-cape-cod-900 ' : 'text-cape-cod-900 [&_input]:!text-cape-cod-900'}`}>
        <TextInput {...form.getInputProps("name")} label="Title" placeholder="Enter title" required />
        <SelectInput form={form} name="issuer" {...select[1]} />
      </div>
      <div className={`flex gap-10 [&>*]:w-1/2 ${isDarkMode ? ' text-cape-cod-100 [&_input]:bg-cape-cod-900 [&_input]:!text-cape-cod-100 [&_input]:border-cape-cod-900 ' : 'text-cape-cod-900 [&_input]:!text-cape-cod-900'}`}>
        <MonthPickerInput
          withAsterisk
          maxDate={new Date()}
          label="Issued date"
          placeholder="Pick date"
          {...form.getInputProps("issueDate")}
          styles={() => ({
            input: {
                backgroundColor:  isDarkMode ? "#2c3534" : "white",
                color: isDarkMode ? "white" : "black",
                borderColor: isDarkMode ? "#161d1d" : "#d1d5db"
            }
        })}
        />
        <TextInput {...form.getInputProps("certificateID")} label="Certificate ID" placeholder="Enter ID" required />
      </div>
      <div className="flex gap-3">
        <Button onClick={handleSave} color="blue.4" variant="outline">Save</Button>
        <Button onClick={() => props.setEdit(false)} color="red.8" variant="light">Cancel</Button>
      </div>
    </div>
  );
};

export default CertificateInput;