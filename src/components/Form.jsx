/* eslint-disable react/prop-types */
import { useState } from "react";
import InputLink from "./InputLink";
import Error from "./helper/Error";
import { useCreatelinkMutation } from "../redux/linkServices";

const Form = ({ links, userid, refetch }) => {
  let [inputArr, setinputArr] = useState(links);
  let [error, setError] = useState(false);
  let [loading, setLoading] = useState(false);
  let [deloading, setDeloading] = useState(false);
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
          refetch();
        });
    } catch (error) {
      setLoading(false);
      setError(error.data.message);
    }
  };

  return (
    <div className="bg-white p-10 rounded-lg">
      {error && (
        <h1>
          <Error message={error} />
        </h1>
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
      {deloading ? (
        <div className="text-center mt-28 text-red-400">Deleting...</div>
      ) : (
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
                      refetch={refetch}
                      setDeloading={setDeloading}
                    />
                  </div>
                ))}
              </div>
            </>
          )}
        </form>
      )}
    </div>
  );
};

export default Form;
