import { Link } from "react-router-dom";

import authImg from "../../assets/others/authentication2.png";

const SignUp = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col  md:flex-row-reverse">
        <div className="text-center md:w-1/2 lg:text-left">
          <img src={authImg} alt="authentication" />
        </div>
        <div className="card shadow-xl md:w-1/2 w-full max-w-sm bg-base-100">
          <h1 className="text-3xl mt-3 text-center font-bold">Sign Up now!</h1>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
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

            <div className="form-control mt-6">
              <input
                type="submit"
                value="Sign Up"
                className="btn bg-[#D1A054B2] border-0"
              />
            </div>
          </form>
          <p className="text-[#D1A054] font-semibold text-center mb-5">
            Already Registered? <Link to="/login">Log In!</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
