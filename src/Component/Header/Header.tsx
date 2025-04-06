import { Burger, Button, Drawer, Switch } from "@mantine/core";
import NavLinks from "./NavLinks";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import { getProfile } from "../../Services/ProfileServices";
import { setProfile } from "../../Slices/ProfileSlice";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { setUser } from "../../Slices/UserSlices";
import { setupResponseInterceptors } from "../../Interceptor/AxiosInterceptor";
import { useDisclosure } from "@mantine/hooks";
import { IconMoonStars, IconSun, IconX } from "@tabler/icons-react";
import Logo from "../../assets/images/logo.png";
import { useTheme } from "../../ThemeContext";

interface CustomJwtPayload extends JwtPayload {
  sub?: string;
  profileId?: string;
}

const Header = () => {
  const user = useSelector((state: any) => state.user);
  const token = useSelector((state: any) => state.jwt);
  const [opened, { open, close }] = useDisclosure(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isDarkMode, toggleTheme } = useTheme();

  const links = useMemo(() => [
    { name: "Find jobs", url: "find-jobs" },
    { name: "Hackathon & Events", url: "find-hackathon" },
    { name: "Post jobs", url: "post-job/0" },
    { name: "About us", url: "about-us" },
  ], []);

  useEffect(() => {
    setupResponseInterceptors(navigate);
  }, [navigate]);

  useEffect(() => {
    if (!token || token.trim() === "") {
      dispatch(setUser(null));
      return;
    }

    try {
      const decoded: CustomJwtPayload = jwtDecode<CustomJwtPayload>(token);
      dispatch(setUser({ ...decoded, email: decoded.sub }));

      if (decoded.exp && decoded.exp * 1000 < Date.now()) {
        console.warn("Token expired. Logging out.");
        dispatch(setUser(null));
        return;
      }

      if (decoded.profileId) {
        getProfile(decoded.profileId)
          .then((res) => dispatch(setProfile(res)))
          .catch((error: any) => console.error("Error fetching profile:", error));
      }
    } catch (error) {
      console.error("Invalid token:", error);
      dispatch(setUser(null));
    }
  }, [token, dispatch]);

  if (location.pathname === "/signup" || location.pathname === "/login") {
    return null;
  }

  return (
    <div className={`w-full px-6 sm-mx:px-3 h-20 flex justify-between items-center font-['poppins'] 
        ${isDarkMode ? "bg-cape-cod-950 text-white" : "bg-white text-cape-cod-900"}
    `}>
      <div className="flex gap-3 items-center text-blue-400">
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="Stemlen Logo" className="h-[2.70rem] w-11" />
          <div className="text-3xl font-semibold xs-mx:hidden">
            <span className={isDarkMode ? "text-cape-cod-100" : "text-cape-cod-900"}>Stem</span>len
          </div>
        </Link>
      </div>

      {NavLinks()}

      <div className="flex gap-3 items-center">
        {!user && (
          <Switch
            checked={isDarkMode}
            onChange={toggleTheme}
            size="md"
            color="dark.4"
            onLabel={<IconSun size={16} stroke={2.5} color="var(--mantine-color-yellow-4)" />}
            offLabel={<IconMoonStars size={16} stroke={2.5} color="var(--mantine-color-blue-6)" />}
          />
        )}

        {user ? (
          <ProfileMenu />
        ) : (
          <>
            <Link to="/login" className="text-blue-400">
              <Button color="blue.4" variant="outline">Login</Button>
            </Link>
            <Link to="/signup" className="text-blue-400">
              <Button color="blue.4" variant="filled">SignUp</Button>
            </Link>
          </>
        )}

        <Burger className="bs:hidden" opened={opened} onClick={open} aria-label="Toggle navigation" color={isDarkMode ? "white" : "black"} />

        <Drawer
          size="xs"
          overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
          opened={opened}
          onClose={close}
          position="right"
          closeButtonProps={{ icon: <IconX size={30} /> }}
        >
          <div className="flex flex-col gap-5 p-5">
            {links.map((link, index) => (
              <Link
                key={index}
                to={`/${link.url}`}
                onClick={close} 
                className={`transition-colors duration-300 flex text-lg ${location.pathname === `/${link.url}` ? "text-blue-400" : "hover:text-blue-500"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </Drawer>

      </div>
    </div>
  );
};

export default Header;
