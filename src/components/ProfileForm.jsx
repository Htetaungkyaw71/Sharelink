/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { addProfile } from "../redux/LinkSlice";
import { useState } from "react";
import Error from "./helper/Error";

const ProfileForm = ({ userid, profile }) => {
  const [error, setError] = useState(false);
  const [hidden, setHidden] = useState("hidden");
  const [data, setData] = useState(profile);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.name === "" || data.email === "") {
      setError(true);
      setHidden("block");
      setTimeout(() => {
        setHidden("hidden");
      }, [3000]);
    } else {
      setError(false);
      setHidden("hidden");
      dispatch(addProfile([userid, data]));
    }
  };

  return (
    <div className="bg-white p-10 rounded-lg">
      {error && (
        <div className={hidden}>
          <Error message="Required Field Error : Input field is required. Please enter a value." />
        </div>
      )}
      <h1 className="text-3xl text-gray-700 font-bold text-left mt-3">
        Profile Details
      </h1>
      <p className="text-md text-gray-400 text-left mt-3">
        Add your details to create a personal touch to your profile
      </p>
      <div className="mt-3">
        <form onSubmit={handleSubmit}>
          <div className="mt-5">
            <label>Name</label>
            <input
              className="ml-10 p-1 border-2 focus:outline-[#8d6ff8] rounded-lg shadow-sm"
              type="text"
              name="name"
              value={data.name}
              onChange={(e) =>
                setData((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          </div>
          <div className="mt-5 mb-5">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="ml-11 p-1 border-2 focus:outline-[#8d6ff8] rounded-lg shadow-sm"
              value={data.email}
              onChange={(e) =>
                setData((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </div>
          <hr />
          <button
            type="submit"
            className="mt-5 p-2 px-3 bg-[#8d6ff8] rounded-lg text-white"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileForm;
