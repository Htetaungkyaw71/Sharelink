import { useSelector, useDispatch } from "react-redux";
import { createId } from "../redux/LinkSlice";
import { v4 as uuidv4 } from "uuid";
import Form from "./Form";

const Home = () => {
  let data = useSelector((state) => state.LinkSlice);
  const dispatch = useDispatch();

  if (Object.keys(data).length === 0) {
    console.log("count");
    dispatch(createId(uuidv4()));
  }

  console.log(data);
  return (
    <>
      <Form />
    </>
  );
};

export default Home;
