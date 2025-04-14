import axios from "axios";
import { removeUser } from "../Slices/UserSlices";

const Base_URL = "https://api.stemlen.com/auth/";

const loginUser = async (login: any) => {
    return axios
      .post(`${Base_URL}login`, login) 
      .then((res) => res.data)
      .catch((error) => {
        throw error;
      });
    }

const navigateToLogin = (navigate:any) => {
  localStorage.removeItem("token");
  removeUser();
  navigate("/login");
}

const oauthLogin = async (provider: string) => {
  window.location.href = `https://api.stemlen.com/oauth2/authorization/${provider}`;
};

export { loginUser, navigateToLogin, oauthLogin };
