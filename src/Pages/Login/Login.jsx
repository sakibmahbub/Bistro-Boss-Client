import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import authImg from "../../assets/others/authentication2.png";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setdisabled] = useState(true);
  const { logIn } = useContext(AuthContext);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleValidateCaptcha = (event) => {
    event.preventDefault();
    const user_captcha_value = captchaRef.current.value;

    if (validateCaptcha(user_captcha_value)) {
      setdisabled(false);
    } else {
      setdisabled(true);
    }
  };

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <Helmet>
        <title>Bistro | Log In</title>
      </Helmet>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col  md:flex-row-reverse">
          <div className="card shadow-xl md:w-1/2 w-full max-w-sm bg-base-100">
            <h1 className="text-3xl mt-3 text-center font-bold">
              Sign In now!
            </h1>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  name="captcha"
                  ref={captchaRef}
                  placeholder="type the captcha above"
                  className="input input-bordered"
                />
                <button
                  onClick={handleValidateCaptcha}
                  className="btn btn-outline btn-xs mt-2"
                >
                  Validate
                </button>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Login"
                  disabled={disabled}
                  className="btn bg-[#D1A054B2] border-0"
                />
              </div>
            </form>
            <p className="text-[#D1A054] font-semibold text-center mb-5">
              New here? <Link to="/signup">Create a new account</Link>
            </p>
          </div>
          <div className="text-center md:w-1/2 lg:text-left">
            <img src={authImg} alt="authentication" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
