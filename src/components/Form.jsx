import { useState } from "react";
import InputLink from "./InputLink";
import { v4 as uuidv4 } from "uuid";

const Form = () => {
  let [inputArr, setinputArr] = useState([]);
  let [count, setCount] = useState(0);
  const handleCreate = () => {
    const id = uuidv4();
    setCount(count + 1);
    setinputArr((prev) => [
      ...prev,
      { id: id, el: <InputLink count={count} /> },
    ]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // let formdata = new FormData(e.target)
    // let obj = {
    //     formdata.
    // }
  };
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
      <form>
        {inputArr.map((input) => (
          <div key={input.id}>{input.el}</div>
        ))}

        <button onClick={handleSubmit}>Save</button>
      </form>
    </div>
  );
};

export default Form;
