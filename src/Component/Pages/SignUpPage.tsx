import { useLocation, useNavigate } from "react-router-dom";
import Login from "../SignUp/Login";
import SignUp from "../SignUp/SignUp";
import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { useTheme } from "../../ThemeContext";

const SignUpPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-[100vh] ${isDarkMode ? 'bg-cape-cod-950 text-gray-200' : 'bg-cape-cod-10 text-black'} font-['poppins'] p-2 overflow-hidden`}>
      <Button
        leftSection={<IconArrowLeft size={20} />}
        onClick={() => navigate("/")}
        my="md"
        color="blue.4"
        variant="light"
      >
        Home
      </Button>

      <div className="w-[100vw] h-[75vh] flex justify-center items-center md-mx:-ml-2">
        {location.pathname === '/signup' && (
          <div className="w-1/2 h-full flex flex-col items-center justify-center md-mx:hidden">
            <img
              className="-mt-28 -mb-16"
              src={require(`../../assets/images/Signup.png`)}
              alt="Sign up"
              style={{ height: '40rem', width: '40rem' }}
            />
            <div className="text-2xl text-cape-cod-200 font-semibold -mt-32">
              Get in with us
            </div>
          </div>
        )}
        {location.pathname === '/signup' ? (
          <SignUp />
        ) : (
          <Login />
        )}
      </div>
    </div>
  );
};

export default SignUpPage;

