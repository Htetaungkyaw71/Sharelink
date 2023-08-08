/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import Error from "./helper/Error";
import axios from "axios";
const UpdateImg = ({ profile, refetch }) => {
  const [error, setError] = useState(false);
  const [Servererror, setServerError] = useState("");
  const [hidden, setHidden] = useState("hidden");
  const [serverhidden, setserverHidden] = useState("hidden");
  const [imgData, setimgData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (imgData === "") {
      setError(true);
      setHidden("block");
      setTimeout(() => {
        setHidden("hidden");
      }, [3000]);
    } else {
      setError(false);
      setHidden("hidden");
      if (imgData === null) {
        setServerError("No Image");
      } else {
        try {
          const { id } = profile;
          const formData = new FormData();
          formData.append("image", imgData);
          const response = await axios.put(
            `http://localhost:3001/user/image/${id}`,
            formData,
          );
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
        Change Your image
      </h1>
      <div className="mt-3">
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          accept="image/*"
        >
          <div className="mt-5">
            <input
              className="p-1 border-2 focus:outline-[#8d6ff8] rounded-lg w-64 shadow-sm"
              type="file"
              name="img_url"
              onChange={(e) => setimgData(e.target.files[0])}
            />
          </div>

          <button
            type="submit"
            className="mt-5 p-2 px-3 bg-[#8d6ff8] rounded-lg text-white"
          >
            Change Image
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateImg;
