import { useState } from "react";
import { useSignInMutation } from "../redux/UserServices";
import { saveState } from "../redux/localStorage";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const SignIn = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [signin] = useSignInMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      await signin(data)
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
      {error.length > 0 && <div>{error}</div>}
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <button type="submit">SignIn</button>
      </form>
    </div>
  );
};

export default SignIn;
