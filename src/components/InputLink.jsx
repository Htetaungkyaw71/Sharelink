/* eslint-disable react/prop-types */
const InputLink = ({ count }) => {
  console.log(count);
  return (
    <div className="mt-10">
      <div className="flex justify-between">
        <h1 className="text-gray-500 font-bold ">Link {count + 1}</h1>
        <button className="text-gray-400 ">Remove</button>
      </div>
      <div className="mt-3">
        <label>Platform</label>
        <select className="w-full block p-2 mt-2 border-2 mb-3 rounded-lg">
          <option value="">Github</option>
          <option value="">Facebook</option>
          <option value="">Linkedin</option>
        </select>
        <label>Link</label>
        <input
          className="w-full block p-2 mt-3 border-2 mb-3 rounded-lg"
          type="text"
          placeholder="Add Link"
        />
      </div>
    </div>
  );
};

export default InputLink;
