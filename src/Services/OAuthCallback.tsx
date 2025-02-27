import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setJwt } from "../Slices/JwtSlice";
import { setUser } from "../Slices/UserSlices";
import { jwtDecode } from "jwt-decode";


const OAuthCallback = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      dispatch(setJwt(token));
      const decoded: any = jwtDecode(token);
      dispatch(setUser({ ...decoded, email: decoded.sub }));
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [dispatch, navigate]);

  return null;
};

export default OAuthCallback;
