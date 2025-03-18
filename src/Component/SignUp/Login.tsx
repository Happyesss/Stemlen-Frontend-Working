import {Button,PasswordInput,rem,TextInput,Group,Divider,LoadingOverlay} from "@mantine/core";
import { IconAt, IconLock, IconCheck, IconX } from "@tabler/icons-react";
import { useForm } from "@mantine/form";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { notifications } from "@mantine/notifications";
import { GoogleButton } from "./GoogleButton";
import { useDisclosure } from "@mantine/hooks";
import ResetPassword from "./ResetPassword";
import { useDispatch } from "react-redux";
import { setUser } from "../../Slices/UserSlices";
import { setJwt } from "../../Slices/JwtSlice";
import { loginUser, oauthLogin } from "../../Services/AuthService";
import { jwtDecode } from "jwt-decode";
import { useTheme } from "../../ThemeContext";
import { GithubButton } from "./GithubButton";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const { isDarkMode } = useTheme();

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value: string) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value: string) =>
        value.length >= 6 ? null : "Password must be at least 6 characters",
    },    
  });

  const handleSubmit = async (values: typeof form.values) => {
    setLoading(true);
    try {
      const response = await loginUser(values);
      console.log("Login successful:", response);

      notifications.show({
        title: "Login successful:",
        message: "Redirecting to dashboard...",
        icon: <IconCheck style={{ width: "90%", height: "90%" }} />,
        color: "green",
        withBorder: true,
        className: "!border-green-500",
      });

      dispatch(setJwt(response.jwt));
      const decoded=jwtDecode(response.jwt);
      console.log(decoded);
      dispatch(setUser({...decoded,email:decoded.sub}));

      setTimeout(() => {
        navigate("/");
      }, 2000); 
    } catch (error:any) {
      console.error("Login error:", error.response.data.errorMessage);

      notifications.show({
        title: "Login failed:",
        message: error.response.data.errorMessage,
        icon: <IconX style={{ width: "90%", height: "90%" }} />,
        color: "red",
        withBorder: true,
        className: "!border-red-500",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    
        <><LoadingOverlay visible={loading} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
        <div className="flex items-center justify-center min-h-screen w-[30%] md-mx:w-[90%] ">
        <div
          className={`w-full max-w-md p-8 rounded-lg shadow-lg transition-all ${
            isDarkMode ? "bg-gray-900 text-gray-200" : "bg-white text-gray-900"
          }`}
        >
        <div className="text-center text-2xl font-semibold mb-6">Login</div>

        <Group grow mb="xl">
          <GoogleButton radius="xl" size="sm" onClick={() => oauthLogin("google")} className={isDarkMode ? "!bg-gray-700 !text-white" : ""}>
            Google
          </GoogleButton>
          <GithubButton radius="xl" size="sm" onClick={() => oauthLogin("github")} className={isDarkMode ? "!bg-gray-700 !text-white" : ""}>
            Github
          </GithubButton>
        </Group>

        <Divider label="Or login with email" labelPosition="center" mb="lg" />

        <form onSubmit={form.onSubmit(handleSubmit)}>
          <div className="flex flex-col gap-4">
            <TextInput
              name="email"
              withAsterisk
              error={form.errors.email}
              leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}
              label="Email"
              placeholder="Your email"
              {...form.getInputProps("email")} />
            <PasswordInput
              name="password"
              withAsterisk
              error={form.errors.password}
              leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} />}
              label="Password"
              placeholder="Password"
              {...form.getInputProps("password")} />
          </div>

          <Group justify="space-between" mt="md">
            <div onClick={open} className="text-blue-400 hover:underline cursor-pointer">Forgot password?</div>
            <ResetPassword opened={opened} close={close} />
            <Button type="submit" size="md" loading={loading}>
              Login
            </Button>
          </Group>
        </form>

        <div className="text-center mt-6">
          <span>Don't have an account? </span>
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </div></>
  );
};

export default Login;
