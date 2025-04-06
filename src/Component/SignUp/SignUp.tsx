import {
  Anchor,
  Button,
  Checkbox,
  Group,
  LoadingOverlay,
  PasswordInput,
  Radio,
  rem,
  TextInput,
  Divider,
} from "@mantine/core";
import { IconAt, IconCheck, IconLock } from "@tabler/icons-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser, sendVerificationEmail } from "../../Services/UserService";
import { SignUpValidation } from "../../Services/FormValidation";
import { notifications } from "@mantine/notifications";
import { errorNotification } from "../../Services/NotificationService";
import { GoogleButton } from "./GoogleButton";
import { oauthLogin } from "../../Services/AuthService";
import { useTheme } from "../../ThemeContext";
import { GithubButton } from "./GithubButton";

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
  const { isDarkMode } = useTheme();
  const [termsAccepted, setTermsAccepted] = useState(false);

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

    if (!termsAccepted) {
      errorNotification("You must accept the terms and conditions to register.", "Error");
      isValid = false;
    }

    if (isValid) {
      setLoading(true);
      try {
        const response = await registerUser(formData);
        // Send verification email
        await sendVerificationEmail(formData.email);

        notifications.show({
          title: "Registration successful",
          message: "A verification email has been sent. Please verify your email before logging in.",
          icon: <IconCheck style={{ width: "90%", height: "90%" }} />,
          color: "green",
          withBorder: true,
          className: "!border-green-500",
        });

        setTimeout(() => {
          setLoading(false);
          navigate("/verify-email"); // Redirect to verification page
        }, 3000);
      } catch (error: any) {
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
    <>
      <LoadingOverlay visible={loading} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
      <div className="w-1/2 px-24 flex flex-col justify-center gap-1 mx-auto sm-mx:w-full sm-mx:px-4 mt-8">
        <div className="text-2xl font-semibold sm-mx:text-xl">Create Account</div>

        <TextInput
          className={isDarkMode ? ' text-cape-cod-100 [&_input]:bg-cape-cod-800 [&_input]:!text-cape-cod-100 [&_input]:border-transparent' : 'text-cape-cod-900 [&_input]:!text-cape-cod-900'}
          name="name"
          error={formErrors.name}
          value={formData.name}
          onChange={handleChange}
          withAsterisk
          label="Full Name"
          placeholder="Your name"
        />

        <TextInput
           className={isDarkMode ? ' text-cape-cod-100 [&_input]:bg-cape-cod-800 [&_input]:!text-cape-cod-100 [&_input]:border-transparent' : 'text-cape-cod-900 [&_input]:!text-cape-cod-900'}
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
           className={isDarkMode ? ' text-cape-cod-100 [&_input]:bg-cape-cod-800 [&_input]:!text-cape-cod-100 [&_input]:border-transparent' : 'text-cape-cod-900 [&_input]:!text-cape-cod-900'}
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
           className={isDarkMode ? ' text-cape-cod-100 [&_input]:bg-cape-cod-800 [&_input]:!text-cape-cod-100 [&_input]:border-transparent' : 'text-cape-cod-900 [&_input]:!text-cape-cod-900'}
          name="confirmPassword"
          error={formErrors.confirmPassword}
          value={formData.confirmPassword}
          onChange={handleChange}
          withAsterisk
          leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
          label="Confirm Password"
          placeholder="Confirm password"
        />

        <Radio.Group value={formData.accountType} onChange={handleChange} label="You are?" withAsterisk>
          <Group mt="xs" className="sm-mx:flex-col sm-mx:gap-2">
            <Radio value="APPLICANT" label="Applicant" />
            <Radio value="COMPANY" label="Company" />
          </Group>
        </Radio.Group>

        <Checkbox
          checked={termsAccepted}
          onChange={(event) => setTermsAccepted(event.currentTarget.checked)}
          label={
            <>
              I accept <Anchor href="/terms-of-service">terms & conditions</Anchor>
            </>
          }
        />

        <Button loading={loading} onClick={handleSubmit} variant="filled">
          Sign up
        </Button>

        <Divider label="Or continue with" labelPosition="center" my="lg" className="!border-cape-cod-200" />

        <Group grow mb="xl">
          <GoogleButton radius="xl" size="sm" onClick={() => oauthLogin("google")} className={isDarkMode ? "!bg-cape-cod-800 !text-white" : ""}>
            Google
          </GoogleButton>
          <GithubButton radius="xl" size="sm" onClick={() => oauthLogin("github")} className={isDarkMode ? "!bg-cape-cod-800 !text-white" : ""}>
            Github
          </GithubButton>
        </Group>

        <div className="mx-auto">
          Have an account? <Link to="/login" className="text-blue-400 hover:underline">Login</Link>
        </div>
      </div>
    </>
  );
};

export default SignUp;
