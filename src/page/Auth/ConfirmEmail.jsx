import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const ConfirmEmail = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get(`${process.env.REACT_APP_HOST_API}/auth/confirm/${token}`);
        const { message } = result.data;
        navigate("/auth", { state: message });
      } catch (error) {
        navigate("/auth", { state: { message: error.response ? error.response.data.err : error.message } });
      }
    })();
  }, [token,navigate]);
};

export default ConfirmEmail;
