import { Button, Checkbox, Textarea } from "@mantine/core";
import fields from "../../assets/Data/Profile"
import SelectInput from "./SelectInput";
import { useEffect } from "react";
import '@mantine/dates/styles.css';
import { useDispatch, useSelector } from "react-redux";
import { isNotEmpty, useForm } from "@mantine/form";
import { changeProfile } from "../../Slices/ProfileSlice";
import { successNotification } from "../../Services/NotificationService";
import { MonthPickerInput } from "@mantine/dates";
import { useTheme } from "../../ThemeContext";

const ExpInput = (props: any) => {
    const select = fields;
    const dispatch = useDispatch();
     const { isDarkMode } = useTheme();
    const profile = useSelector((state: any) => state.profile);
    useEffect(() => {
        if(!props.add)form.setValues({ title: props.title, company: props.company, location: props.location, description: props.description, startDate:new Date (props.startDate), endDate:new Date (props.endDate), working: props.working });
    }, [])
    const form = useForm({
        mode: 'controlled',
        validateInputOnChange: true,
        initialValues: { title: '', company: '', location: '', description: '', startDate: new Date(), endDate: new Date(), working: false },
        validate: {
            title: isNotEmpty('This field is required'),
            company: isNotEmpty('This field is required'),
            location: isNotEmpty('This field is required'),
            description: isNotEmpty('This field is required'),
        }
    });
    const handleSave = () => {
        form.validate();
        if (!form.isValid()) return;
    
        let exp = [...profile.experiences];
        if (props.add) {
            exp.push(form.getValues());
            exp[exp.length - 1].startDate = exp[exp.length - 1].startDate.toISOString();
            exp[exp.length - 1].endDate = exp[exp.length - 1].endDate.toISOString();
        } else {
            exp[props.index] = form.getValues();
            exp[props.index].startDate = exp[props.index].startDate.toISOString();
            exp[props.index].endDate = exp[props.index].endDate.toISOString();
        }
        let updatedProfile = { ...profile, experiences: exp };
        props.setEdit(false); 
        dispatch(changeProfile(updatedProfile));
        successNotification(`Experience ${props.add?"Added": "Updated"} Successfully`, 'Success');
    };
    return (
        <div className="flex flex-col gap-3">
            <div className="text-lg font-semibold">{props.add ? "Add" : "Edit"} Experience</div>
            <div className={`flex gap-10 [&>*]:w-1/2 ${isDarkMode ? ' text-cape-cod-100 [&_input]:bg-cape-cod-900 [&_input]:!text-cape-cod-100 [&_input]:border-cape-cod-900 ' : 'text-cape-cod-900 [&_input]:!text-cape-cod-900'}`}>
                <SelectInput form={form} name="title" {...select[0]} />
                <SelectInput form={form} name="company" {...select[1]} />
            </div>
            <div className={isDarkMode ?  ' text-cape-cod-100 [&_input]:bg-cape-cod-900 [&_input]:!text-cape-cod-100 [&_input]:border-cape-cod-900 ' : 'text-cape-cod-900 [&_input]:!text-cape-cod-900' }>
            <SelectInput form={form} name="location" {...select[2]} colord={isDarkMode ? ' text-cape-cod-100 [&_input]:!bg-cape-cod-900 [&_input]:!text-cape-cod-100 [&_input]:border-cape-cod-900 ' : 'text-cape-cod-900 [&_input]:!text-cape-cod-900'} />
            </div>
            <Textarea
                label="Description"
                placeholder="Write something ..."
                autosize minRows={3} maxRows={6}
                withAsterisk
                {...form.getInputProps('description')}
                styles={() => ({
                    input: {
                        backgroundColor:  isDarkMode ? "#2c3534" : "white",
                        color: isDarkMode ? "white" : "black",
                        borderColor: isDarkMode ? "#161d1d" : "#d1d5db"
                    }
                })}
            />
            <div className="flex gap-10 [&>*]:w-1/2  ">
                <MonthPickerInput
                    withAsterisk
                    maxDate={form.getValues().endDate || undefined}
                    label="Start date"
                    placeholder="Pick date"
                    {...form.getInputProps('startDate')}
                    styles={() => ({
                        input: {
                            backgroundColor:  isDarkMode ? "#2c3534" : "white",
                            color: isDarkMode ? "white" : "black",
                            borderColor: isDarkMode ? "#161d1d" : "#d1d5db"
                        }
                    })}
                />
                <MonthPickerInput
                    withAsterisk
                    disabled={form.getValues().working}
                    minDate={form.getValues().startDate || undefined}
                    maxDate={new Date()}
                    label="End date"
                    placeholder="Pick date"
                    {...form.getInputProps('endDate')}
                    styles={() => ({
                        input: {
                            backgroundColor:  isDarkMode ? "#2c3534" : "white",
                            color: isDarkMode ? "white" : "black",
                            borderColor: isDarkMode ? "#161d1d" : "#d1d5db"
                        }
                    })}
                />
            </div>
            <Checkbox checked={form.getValues().working} onChange={(event)=>form.setFieldValue("working",event.currentTarget.checked)} autoContrast  label="I currently work here" />
            <div className="flex gap-3">
                <Button onClick={handleSave} color="blue.4" variant="outline">Save</Button>
                <Button onClick={() => props.setEdit(false)} color="red.8" variant="light">Cancel</Button>
            </div>
        </div>

    )
}

export default ExpInput