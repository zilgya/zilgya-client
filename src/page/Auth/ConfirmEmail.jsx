import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";

const ConfirmEmail = () => {
  const { token } = useParams();
  const [msg, setMsg] = useState(null);
  useEffect(() => {
    (async () => {
      setMsg(null);
      try {
        const result = await axios.get(`${process.env.REACT_APP_HOST_API}/auth/confirm/${token}`);
        const { message } = result.data;
        setMsg(message);
      } catch (error) {
        setMsg(error.response ? error.response.data.err : error.message);
      }
    })();
  }, [token]);
  return <Navigate to={"/auth"} state={{ msg }} />;
};

export default ConfirmEmail;
