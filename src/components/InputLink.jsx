import { useState, useEffect } from "react";
import {
  useDeletelinkMutation,
  useUpdatelinkMutation,
} from "../redux/linkServices";
import { validateObj } from "./helper/validate";
import Error from "./helper/Error";

/* eslint-disable react/prop-types */
const InputLink = ({ input, index, setinputArr, inputArr, refetch }) => {
  const [first, setFirst] = useState(true);
  const [loading, setLoading] = useState(false);
  const [deleteLink] = useDeletelinkMutation();
  const [data, setData] = useState({
    id: input.id,
    platform: input.platform !== "" ? input.platform : "github",
    url: input.url,
  });
  let [hidden, setHidden] = useState("hidden");
  let [error, setError] = useState(false);
  let [validate, setvalidate] = useState("");

  const [updateLink] = useUpdatelinkMutation();

  const handleChange = (e) => {
    setFirst(false);
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (!first) {
        let p = validateObj(data);
        setvalidate(p);
        if (p.length !== 0) {
          setError(true);
          setHidden("block");
        } else {
          setError(false);
          setHidden("hidden");
          try {
            await updateLink({
              id: data.id,
              platform: data.platform,
              url: data.url,
            }).unwrap();
            refetch();
          } catch (error) {
            setError(true);
            console.log(error);
          }
        }
      }
    }, 1500);
    return () => clearTimeout(timeoutId);
  }, [data]);

  const handleRemove = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await deleteLink({ id: input.id })
        .unwrap()
        .then((fulfilled) => {
          const url = fulfilled.data;
          let newArr = inputArr.filter((i) => i.id !== url.id);
          setinputArr(newArr);
          setLoading(false);
          refetch();
        });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return loading ? (
    <div className="text-center mt-10 text-red-400">Deleting...</div>
  ) : (
    <div className="mt-10">
      {error && (
        <h1 className={hidden}>
          {validate.length !== 0 && (
            <div>
              <Error
                message={`Invalid URL Error: ${validate} url is invalid. Please provide valide ${validate} url `}
              />
            </div>
          )}
        </h1>
      )}
      <div className="flex justify-between">
        <h1 className="text-gray-500 font-bold ">Link {index + 1}</h1>
        <button className="text-gray-400" onClick={handleRemove}>
          Remove
        </button>
      </div>
      <div className="mt-3">
        <label>Platform</label>
        <select
          className="w-full block p-2 mt-2 border-2 mb-3 rounded-lg"
          value={data.platform}
          name="platform"
          onChange={handleChange}
        >
          <option value="github">Github</option>
          <option value="facebook">Facebook</option>
          <option value="linkedin">Linkedin</option>
          <option value="pinterest">Pinterest</option>
          <option value="medium">Medium</option>
          <option value="instagram">Instagram</option>
          <option value="dribbble">Dribbble</option>
          <option value="youtube">Youtube</option>
          <option value="twitter">Twitter</option>
        </select>
        <label>Link</label>
        <input
          className="w-full block p-2 mt-3 border-2 mb-3 rounded-lg"
          type="text"
          name="url"
          placeholder="Add Url"
          value={data.url}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default InputLink;
