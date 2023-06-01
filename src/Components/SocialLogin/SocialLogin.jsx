import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogle = () => {
    googleLogin().then((result) => {
      const loggedUser = result.user;
      navigate(from, { replace: true });
    });
  };
  return (
    <div>
      <div className="divider"></div>
      <div className="w-full text-center my-3">
        <button onClick={handleGoogle} className="btn btn-circle btn-outline">
          <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
