import React, { useState } from 'react';
import SelectInput from './SelectInput';
import { Button, Textarea, FileInput, TagsInput, TextInput } from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';
import { fields } from '../../assets/Data/PostHackathon';
import { DatePickerInput } from '@mantine/dates';
import TextEditor from '../PostJobs/TextEditor';
import { postHackathon } from '../../Services/HackathonService';
import { errorNotification, successNotification } from '../../Services/NotificationService';
import { useNavigate } from 'react-router-dom';
import { desc } from '../../assets/Data/HackaDescData';
import { useTheme } from '../../ThemeContext';

const PostHackathon = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  const [editorData] = useState(desc);
  const form = useForm({
    mode: 'controlled',
    validateInputOnChange: true,
    initialValues: {
      title: '',
      organizer: '',
      eventDate: null,
      duration: '',
      location: '',
      prize: '',
      about: '',
      description: desc,
      bannerImage: null,
      iconImage: null,
      eligibilityCriteria: [],
      applyUrl: '',
    },
    validate: {
      title: isNotEmpty('Title is required'),
      organizer: isNotEmpty('Organizer is required'),
      eventDate: isNotEmpty('Event Date is required'),
      duration: isNotEmpty('Duration is required'),
      location: isNotEmpty('Location is required'),
      prize: isNotEmpty('Prize is required'),
      about: isNotEmpty('About is required'),
      bannerImage: isNotEmpty('Banner Image is required'),
      iconImage: isNotEmpty('Icon Image is required'),
      eligibilityCriteria: isNotEmpty('Eligibility Criteria is required'),
      applyUrl: isNotEmpty('Apply URL is required'),
    },
  });

  const toBase64 = (file: File): Promise<string> => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result.split(',')[1]); // Extract Base64 string
      } else {
        reject(new Error('Failed to convert file to Base64'));
      }
    };
    reader.onerror = (error) => reject(error);
  });

  const handlePost = async () => {
    form.validate();
    if (!form.isValid()) return;

    try {
      const bannerBase64 = form.values.bannerImage ? await toBase64(form.values.bannerImage) : null;
      const iconBase64 = form.values.iconImage ? await toBase64(form.values.iconImage) : null;

      const formData = {
        ...form.getValues(),
        eventDate: form.values.eventDate ? (form.values.eventDate as Date).toISOString().split('T')[0] : null, // Convert to YYYY-MM-DD
        bannerImage: bannerBase64,
        iconImage: iconBase64,
      };

      await postHackathon(formData);
      successNotification('Hackathon Posted Successfully', 'success');
      navigate('/find-hackathon');
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        errorNotification((error as any).response?.data?.errorMessage || 'An error occurred', 'error');
      } else {
        errorNotification('An unexpected error occurred', 'error');
      }
    }
  };

  return (
    <div className="w-4/5 mx-auto md-mx:w-[96%]">
      <div className="text-2xl font-semibold mt-4 mb-5">Post Hackathon</div>
      <div className="flex flex-col gap-5">
        <div className={`flex gap-10 [&>*]:w-1/2 ${isDarkMode ? ' text-cape-cod-100 [&_input]:bg-cape-cod-900 [&_input]:!text-cape-cod-100 [&_input]:border-cape-cod-900 ' : 'text-cape-cod-900 [&_input]:!text-cape-cod-900'}`}>
          <SelectInput form={form} name="title" {...fields[0]} />
          <SelectInput form={form} name="organizer" {...fields[1]} />
        </div>
        <div className={`flex gap-10 [&>*]:w-1/2 ${isDarkMode ? ' text-cape-cod-100 [&_input]:bg-cape-cod-900 [&_input]:!text-cape-cod-100 [&_input]:border-cape-cod-900 ' : 'text-cape-cod-900 [&_input]:!text-cape-cod-900'}`}>
          <DatePickerInput {...form.getInputProps('eventDate')}
            label="Event Date"
            placeholder="Pick event date"
            withAsterisk
            styles={() => ({
              input: {
                backgroundColor: isDarkMode ? "#2c3534" : "white",
                color: isDarkMode ? "white" : "black",
                borderColor: isDarkMode ? "#161d1d" : "#d1d5db"
              }
            })}
          />
          <SelectInput form={form} name="duration" {...fields[3]} />
        </div>
        <div className={`flex gap-10 [&>*]:w-1/2 ${isDarkMode ? ' text-cape-cod-100 [&_input]:bg-cape-cod-900 [&_input]:!text-cape-cod-100 [&_input]:border-cape-cod-900 ' : 'text-cape-cod-900 [&_input]:!text-cape-cod-900'}`}>
          <SelectInput form={form} name="location" {...fields[4]} />
          <SelectInput form={form} name="prize" {...fields[5]} />
        </div>
        <div className="flex gap-10 [&>*]:w-1/2">
          <FileInput {...form.getInputProps('bannerImage')}
            label="Background Banner Image"
            placeholder="Upload Image"
            withAsterisk
            styles={() => ({
              input: {
                backgroundColor: isDarkMode ? "#2c3534" : "white",
                color: isDarkMode ? "white" : "black",
                borderColor: isDarkMode ? "#161d1d" : "#d1d5db"
              }
            })}
          />
          <FileInput {...form.getInputProps('iconImage')}
            label="Icon Image"
            placeholder="Upload Icon Image"
            withAsterisk
            styles={() => ({
              input: {
                backgroundColor: isDarkMode ? "#2c3534" : "white",
                color: isDarkMode ? "white" : "black",
                borderColor: isDarkMode ? "#161d1d" : "#d1d5db"
              }
            })}
          />
        </div>
        <TagsInput {...form.getInputProps('eligibilityCriteria')}
          withAsterisk
          label="Eligibility Criteria"
          placeholder="Enter the eligibility criteria"
          splitChars={['|']}
          clearable
          acceptValueOnBlur
          styles={() => ({
            input: {
              backgroundColor: isDarkMode ? "#2c3534" : "white",
              color: isDarkMode ? "white" : "black",
              borderColor: isDarkMode ? "#161d1d" : "#d1d5db"
            }
          })}
        />
        <TextInput {...form.getInputProps('applyUrl')}
          withAsterisk
          label="Apply URL"
          placeholder="Enter the apply URL"
          styles={() => ({
            input: {
              backgroundColor: isDarkMode ? "#2c3534" : "white",
              color: isDarkMode ? "white" : "black",
              borderColor: isDarkMode ? "#161d1d" : "#d1d5db"
            }
          })}
        />
        <Textarea {...form.getInputProps('about')}
          withAsterisk
          label="About"
          placeholder="Enter about the hackathon"
          minRows={3} maxRows={6}
          styles={() => ({
            input: {
              backgroundColor: isDarkMode ? "#2c3534" : "white",
              color: isDarkMode ? "white" : "black",
              borderColor: isDarkMode ? "#161d1d" : "#d1d5db"
            }
          })}
        />
        <div className="[&_button[data-active='true']]:!text-blue-400 [&_button[data-active='true']]:!bg-blue-400/20">
          <div className="text-sm font-medium">Hackathon Description <span className="text-red-500">*</span></div>
          <TextEditor form={form} data={editorData} />
        </div>
        <div className="flex gap-4">
          <Button color="blue.4" variant="light" onClick={handlePost}>Publish</Button>
        </div>
      </div>
    </div>
  );
};

export default PostHackathon;
