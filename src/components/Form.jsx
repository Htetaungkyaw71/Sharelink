const Form = () => {
  const handleCreate = () => {
    console.log("hello");
  };
  return (
    <div>
      <button onClick={handleCreate} className="bg-red-500  p-3">
        Create Link
      </button>
      <form></form>
    </div>
  );
};

export default Form;
