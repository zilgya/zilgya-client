import { useLocation, useNavigate } from "react-router-dom";

const withLocation = (Component) => (props) => {
  const location = useLocation();
  const navigate = useNavigate(); 

  return <Component location={location} navigate={navigate} {...props} />;
};

export default withLocation;
