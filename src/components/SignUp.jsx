import { useState } from "react";
import { useSignUpMutation } from "../redux/userServices";
import { saveState } from "../redux/localStorage";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import img from "../assets/link.png";
import Error from "./helper/Error";

const SignUp = () => {
  const [err, setError] = useState("");
  const [hidden, setHidden] = useState("hidden");
  const navigate = useNavigate();
  const [signup] = useSignUpMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      await signup(data)
        .unwrap()
        .then((fulfilled) => {
          const data = {
            ...fulfilled.user,
            token: fulfilled.token,
          };
          localStorage.removeItem("data");
          saveState(data);
          setError("");
          navigate("/");
        });
    } catch (error) {
      console.log(error);
      setError(error.data.message);
      setHidden("block");
      setTimeout(() => {
        setHidden("hidden");
      }, [3000]);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center pt-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={hidden}>
            {err.length > 0 && <Error message={err} />}
          </div>

          {errors.name && <Error message={errors.name.message} />}
          {errors.email && <Error message={errors.email.message} />}
          {errors.password && <Error message={errors.password.message} />}

          <h1 className="text-center text-2xl mb-3">
            <img src={img} alt="logo" className="w-8 h-8 inline mr-1 -mt-1 " />
            <span className="font-bold text-gray-600">Sharelinks</span>
          </h1>
          <label className="text-gray-700">Name</label>
          <input
            className="w-full block p-2 mt-1 border-2 mb-3 rounded-lg"
            type="text"
            placeholder="name"
            name="name"
            {...register("name", {
              required: {
                value: true,
                message: "Username is required",
              },
            })}
          />

          <label className="text-gray-700">Email</label>
          <input
            className="w-full block p-2 mt-1 border-2 mb-3 rounded-lg"
            type="text"
            placeholder="email"
            name="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Please enter a valid email",
              },
            })}
          />
          <label className="text-gray-700">Password</label>
          <input
            className="w-full block p-2 mt-1 border-2 mb-3 rounded-lg"
            type="password"
            placeholder="password"
            name="password"
            {...register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
            })}
          />
          <button
            type="submit"
            className="border-2 border-[#8d6ff8] py-1 px-2 rounded-lg text-[#8d6ff8] font-semibold hover:bg-[#8d6ff8] hover:text-white hover:duration-500 w-full"
          >
            Sign Up
          </button>
          <div className="mt-5 text-gray-600">
            Already have an account{" "}
            <Link to="/signin" className="text-blue-500 font-bold ml-1">
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
