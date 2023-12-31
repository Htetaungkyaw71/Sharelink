/* eslint-disable react/prop-types */
import { useState } from "react";
import Error from "./helper/Error";
import { useUpdateUserMutation } from "../redux/userServices";

const ProfileForm = ({ profile, refetch }) => {
  const [error, setError] = useState(false);
  const [Servererror, setServerError] = useState("");
  const [hidden, setHidden] = useState("hidden");
  const [serverhidden, setserverHidden] = useState("hidden");
  const [userData, setuserData] = useState(profile);
  const [updateUser] = useUpdateUserMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userData.name === "" || userData.email === "") {
      setError(true);
      setHidden("block");
      setTimeout(() => {
        setHidden("hidden");
      }, [3000]);
    } else {
      setError(false);
      setHidden("hidden");
      const { id, name, email } = userData;
      try {
        await updateUser({ id, name, email }).unwrap();
        refetch();
        setServerError("");
      } catch (error) {
        setserverHidden("block");
        setTimeout(() => {
          setserverHidden("hidden");
        }, [3000]);
        setServerError(error.data.message);
        console.log(error);
      }
    }
  };

  return (
    <div className="bg-white p-10 rounded-lg">
      {error && (
        <div className={hidden}>
          <Error message="Required Field Error : Input field is required. Please enter a value." />
        </div>
      )}
      <div className={serverhidden}>
        {Servererror.length > 0 && <Error message={Servererror} />}
      </div>

      <h1 className="text-3xl text-gray-700 font-bold text-left mt-3">
        Profile Details
      </h1>
      <p className="text-md text-gray-400 text-left mt-3">
        Add your details to create a personal touch to your profile
      </p>
      <div className="mt-3">
        <form onSubmit={handleSubmit}>
          <div className="mt-5">
            <label className="mr-3">Name</label>
            <input
              className="ml-0 sm:ml-0 md:ml-7 lg:ml-7 xl:ml-7 mt-2 p-1 border-2 focus:outline-[#8d6ff8] rounded-lg shadow-sm"
              type="text"
              name="name"
              value={userData.name}
              onChange={(e) =>
                setuserData((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          </div>
          <div className="mt-5 mb-5">
            <label className="mr-3">Email</label>
            <input
              type="email"
              name="email"
              className="ml-0 sm:ml-0 md:ml-7 lg:ml-7 xl:ml-7 mt-2 p-1 border-2 focus:outline-[#8d6ff8] rounded-lg shadow-sm"
              value={userData.email}
              onChange={(e) =>
                setuserData((prev) => ({ ...prev, email: e.target.value }))
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
