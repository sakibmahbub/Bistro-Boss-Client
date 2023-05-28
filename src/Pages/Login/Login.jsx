import loginImg from "../../assets/others/authentication2.png";
const Login = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col  md:flex-row-reverse">
        <div className="card shadow-xl md:w-1/2 w-full max-w-sm bg-base-100">
          <h1 className="text-3xl mt-3 text-center font-bold">Login now!</h1>
          <form className="card-body">
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Login"
                className="btn bg-[#D1A054B2] border-0"
              />
            </div>
          </form>
        </div>
        <div className="text-center md:w-1/2 lg:text-left">
          <img src={loginImg} alt="authentication" />
        </div>
      </div>
    </div>
  );
};

export default Login;
