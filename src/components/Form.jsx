/* eslint-disable react/prop-types */
import { useState } from "react";
import InputLink from "./InputLink";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addLink } from "../redux/LinkSlice";

const Form = ({ links, userid }) => {
  let [hidden, setHidden] = useState("hidden");
  const dispatch = useDispatch();
  let [inputArr, setinputArr] = useState(links);
  let [error, setError] = useState(false);
  const handleCreate = () => {
    const id = uuidv4();
    setinputArr((prev) => [...prev, { id: id, platform: "", link: "" }]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const hasEmptyFields = inputArr.some(
      (obj) => obj.platform === "" || obj.link === "",
    );
    if (hasEmptyFields) {
      setError(hasEmptyFields);
      setHidden("block");
      setTimeout(() => {
        setHidden("hidden");
      }, [3000]);
    } else {
      setError(hasEmptyFields);
      setHidden("block");
      setTimeout(() => {
        setHidden("hidden");
      }, [3000]);
      dispatch(addLink([userid, inputArr]));
    }
  };

  console.log("userid", userid);
  console.log("inputArr", inputArr);

  console.log(error);
  return (
    <div className="bg-white p-10 rounded-lg">
      <h1 className="text-3xl text-gray-700 font-bold text-left mt-3">
        Customize your links
      </h1>
      <p className="text-md text-gray-400 text-left mt-3">
        Add/Edit/Remove links below and then share all your profiles with the
        world!
      </p>
      <button
        onClick={handleCreate}
        className="w-full p-2 border-[#8d6ff8] border-2 text-[#8d6ff8] font-bold mt-5 rounded-lg hover:bg-[#8d6ff8] hover:text-white hover:duration-500 "
      >
        +Add new link
      </button>
      {error ? (
        <h1 className={hidden}>Invalid Input</h1>
      ) : (
        <h1 className={hidden}>Saved Links</h1>
      )}
      <form>
        {inputArr.length !== 0 && (
          <>
            <div>
              {inputArr.map((input, index) => (
                <div key={input.id}>
                  <InputLink
                    input={input}
                    index={index}
                    setinputArr={setinputArr}
                    inputArr={inputArr}
                    userid={userid}
                  />
                </div>
              ))}
            </div>
            <button
              onClick={handleSubmit}
              className="p-2 bg-[#8d6ff8] text-white rounded-lg mt-4"
            >
              Save
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default Form;
