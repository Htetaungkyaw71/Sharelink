import { useState } from "react";
import { useSignUpMutation } from "../redux/UserServices";
import { saveState } from "../redux/localStorage";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const [err, setError] = useState("");
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

          saveState(data);
          setError("");
          navigate("/");
        });
    } catch (error) {
      setError(error.data.message);
    }
  };

  return (
    <div>
      {err.length > 0 && <div>{err}</div>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          {...register("name", {
            required: {
              value: true,
              message: "Username is required",
            },
          })}
        />
        {errors.name?.message}

        <input
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
        {errors.email?.message}

        <input
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
        {errors.password?.message}
        <button type="submit">SignUp</button>
      </form>
    </div>
  );
};

export default SignUp;
