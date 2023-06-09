import { Link, useNavigate } from "react-router-dom";

import authImg from "../../assets/others/authentication2.png";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const SignUp = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);

      updateUserProfile(data.name, data.photUrl)
        .then(() => {
          const userInfo = { name: data.name, email: data.email };
          fetch(`http://localhost:5000/users`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(userInfo),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  title: "Sign up successful!",
                  showClass: {
                    popup: "animate__animated animate__fadeInDown",
                  },
                  hideClass: {
                    popup: "animate__animated animate__fadeOutUp",
                  },
                });
                navigate("/");
              }
            });
        })
        .catch((error) => console.log(error));
    });
  };
  return (
    <>
      <Helmet>
        <title>Bistro | Sign Up</title>
      </Helmet>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col  md:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <img src={authImg} alt="authentication" />
          </div>
          <div className="card shadow-xl md:w-1/2 w-full max-w-sm bg-base-100">
            <h1 className="text-3xl mt-3 text-center font-bold">
              Sign Up now!
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  {...register("name", { required: true })}
                  placeholder="name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <small
                    className="text-[#D1A054] mt-2
              "
                  >
                    Name is required
                  </small>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <small
                    className="text-[#D1A054] mt-2
              "
                  >
                    Email is required
                  </small>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  {...register("photUrl", { required: true })}
                  placeholder="phot url"
                  className="input input-bordered"
                />
                {errors.photUrl && (
                  <small
                    className="text-[#D1A054] mt-2
              "
                  >
                    Name is required
                  </small>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    Password must be less than 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have one Uppercase one lower case, one number
                    and one special character.
                  </p>
                )}
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
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
