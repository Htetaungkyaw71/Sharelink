/* eslint-disable react/prop-types */
import { useState } from "react";
import InputLink from "./InputLink";
import Info from "./helper/Info";
import Error from "./helper/Error";
import { validate } from "./helper/validate";
import { useCreatelinkMutation } from "../redux/linkServices";

const Form = ({ links, userid }) => {
  let [hidden, setHidden] = useState("hidden");
  let [inputArr, setinputArr] = useState(links);
  console.log(inputArr);
  let [error, setError] = useState(false);
  let [loading, setLoading] = useState(false);
  let [validateArr, setvalidateArr] = useState([]);
  const [createLink] = useCreatelinkMutation();
  const handleCreate = async () => {
    setLoading(true);
    try {
      await createLink({ platform: "github", url: "" })
        .unwrap()
        .then((fulfilled) => {
          const url = fulfilled.data;
          setinputArr((prev) => [...prev, url]);
          setLoading(false);
        });
    } catch (error) {
      setLoading(false);
      setError(error.data.message);
    }
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
      let varr = validate(inputArr);
      setvalidateArr(varr);
      if (varr.length !== 0) {
        setError(true);
        setHidden("block");
        setTimeout(() => {
          setHidden("hidden");
        }, [3000]);
      } else {
        setError(false);
        setHidden("block");
        setTimeout(() => {
          setHidden("hidden");
        }, [3000]);
        console.log(inputArr);
      }
    }
  };

  return (
    <div className="bg-white p-10 rounded-lg">
      {error ? (
        <h1 className={hidden}>
          {validateArr.length !== 0 ? (
            validateArr.map((i) => (
              <div key={i}>
                <Error
                  message={`Invalid URL Error: ${i} url is invalid. Please provide valide ${i} url `}
                />
              </div>
            ))
          ) : (
            <Error message="Required Field Error : Input field is required. Please enter a value." />
          )}
        </h1>
      ) : (
        <div className={hidden}>
          <Info />
        </div>
      )}
      <h1 className="text-3xl text-gray-700 font-bold text-left mt-3">
        Customize your links
      </h1>
      <p className="text-md text-gray-400 text-left mt-3">
        Add/Edit/Remove links below and then share all your profiles with the
        world!
      </p>
      <button
        onClick={handleCreate}
        className={`w-full p-2 border-[#8d6ff8] border-2 text-[#8d6ff8] font-bold mt-5 rounded-lg hover:bg-[#8d6ff8] hover:text-white hover:duration-500  `}
        disabled={loading}
      >
        {loading ? "Loading..." : "+Add new link"}
      </button>

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
            <hr className="mt-10 mb-3" />
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
