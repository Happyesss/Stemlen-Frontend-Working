import axiosInstance from "../Interceptor/AxiosInterceptor";

const registerUser = async (user: any) => {
  return axiosInstance
    .post(`/users/register`, user) 
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

const loginUser = async (login: any) => {
  return axiosInstance
    .post(`/users/login`, login) 
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

const sendOtp = async (email: string) => {
  return axiosInstance
    .post(`/users/sendOtp/${ email }`) 
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

const verifyOtp = async (email: string, otp: string) => {
  return axiosInstance
    .get(`/users/verifyOtp/${email}/${otp}`)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};  

const changePassword = async (email: string, password: string) => {
  return axiosInstance
    .post(`/users/changepassword`, { email, password }) 
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

const sendVerificationEmail = async (email: string) => {
  return axiosInstance
    .post(`/users/send-verification-email`, { email }) 
    .catch((error) => {
      throw error;
    });
};

const resendVerificationEmail = async (email: string) => {
  return axiosInstance
    .post(`/users/resend-verification-email`, { email }) 
    .then((res) => res.data)
    .catch((error) => {
      throw new Error(error.response?.data?.message || "Failed to resend verification email.");
    });
};

const verifyEmail = async (token: string) => {
  return axiosInstance
    .get(`/users/verify-email?token=${token}`)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

export { registerUser, loginUser , sendOtp, verifyOtp, changePassword , sendVerificationEmail, verifyEmail , resendVerificationEmail }; 
