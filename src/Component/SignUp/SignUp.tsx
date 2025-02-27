import {Anchor,Button,Checkbox,Group,LoadingOverlay,PasswordInput,Radio,rem,TextInput,} from "@mantine/core";
import { IconAt, IconCheck, IconLock } from "@tabler/icons-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../Services/UserService";
import { SignUpValidation } from "../../Services/FormValidation";
import { notifications } from "@mantine/notifications";
import { errorNotification } from "../../Services/NotificationService";

const initialFormState: Record<string, string> = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  accountType: "APPLICANT",
};

const SignUp = () => {
  const [formData, setFormData] = useState<Record<string, string>>(initialFormState);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleChange = (event: any) => {
    if (typeof event === "string") {
      setFormData({ ...formData, accountType: event });
      return;
    }

    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    const error = SignUpValidation(name, value);
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
      confirmPassword:
        name === "password" && formData.confirmPassword && formData.confirmPassword !== value
          ? "Passwords do not match"
          : name === "confirmPassword" && formData.password && formData.password !== value
          ? "Passwords do not match"
          : "",
    }));
  };

  const handleSubmit = async () => {
    const newFormErrors: Record<string, string> = {};
    let isValid = true;

    for (const key in formData) {
      if (key === "accountType") continue;

      if (key === "confirmPassword") {
        if (formData[key] !== formData.password) {
          newFormErrors[key] = "Passwords do not match";
          isValid = false;
        }
      } else {
        const error = SignUpValidation(key, formData[key]);
        if (error) {
          newFormErrors[key] = error;
          isValid = false;
        }
      }
    }

    setFormErrors(newFormErrors);
    

    if (isValid) {
      setLoading(true);
      try {
        const response = await registerUser(formData);
        console.log("Registration successful:", response);
        setFormData(initialFormState);
        notifications.show({
          title: 'Registration successful:',
          message: 'Redirecting to login page....',
          icon: <IconCheck style={{width:"90%",height:"90%"}} />,
          color: 'green',
          withBorder: true,
          className:"!border-green-500"
        })
        setTimeout(() => {
          setLoading(false);
          navigate("/login");
        }, 3000);
      }catch (error: any) {
        setLoading(false);
        if (error.response?.data?.errorMessage) {
          errorNotification(error.response.data.errorMessage, "Error");
        } else {
          errorNotification("An unexpected error occurred.", "Error");
        }
      }
      
    }
  };

  return (
    <><LoadingOverlay visible={loading} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
    <div className="w-1/2 px-24 flex flex-col justify-center gap-1 mx-auto sm-mx:w-full sm-mx:px-4">
      <div className="text-2xl font-semibold sm-mx:text-xl">Create Account</div>

      <TextInput
        name="name"
        error={formErrors.name}
        value={formData.name}
        onChange={handleChange}
        withAsterisk
        label="Full Name"
        placeholder="Your name"
      />

      <TextInput
        name="email"
        error={formErrors.email}
        value={formData.email}
        onChange={handleChange}
        withAsterisk
        leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}
        label="Email"
        placeholder="Your email"
      />

      <PasswordInput
        name="password"
        error={formErrors.password}
        value={formData.password}
        onChange={handleChange}
        withAsterisk
        leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
        label="Password"
        placeholder="Password"
      />

      <PasswordInput
        name="confirmPassword"
        error={formErrors.confirmPassword}
        value={formData.confirmPassword}
        onChange={handleChange}
        withAsterisk
        leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
        label="Confirm Password"
        placeholder="Confirm password"
      />

      <Radio.Group
        value={formData.accountType}
        onChange={handleChange}
        label="You are?"
        withAsterisk
      >
        <Group mt="xs" className="sm-mx:flex-col sm-mx:gap-2">
          <Radio
            className="py-4 px-6 border has-[:checked]:border-blue-400 border-cape-cod-800 rounded-lg"
            value="APPLICANT"
            label="Applicant"
          />
          <Radio
            className="py-4 px-6 border has-[:checked]:border-blue-400 border-cape-cod-800 rounded-lg"
            value="COMPANY"
            label="Company"
          />
        </Group>
      </Radio.Group>

      <Checkbox
        label={
          <>
            I accept <Anchor>terms & conditions</Anchor>
          </>
        }
      />

      <Button loading={loading} onClick={handleSubmit} variant="filled">
        Sign up
      </Button>

      <div className="mx-auto">
        Have an account? <Link to="/login" className="text-blue-400 hover:underline">Login</Link>
      </div>
    </div></>
  );
};

export default SignUp;
