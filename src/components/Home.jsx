import { useSelector, useDispatch } from "react-redux";
import { createId } from "../redux/LinkSlice";
import { v4 as uuidv4 } from "uuid";
import Form from "./Form";
import Mockup from "./Mockup";

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
      <div className="grid grid-cols-5 container mx-auto mt-5">
        <div className="col-span-2">
          <Mockup />
        </div>
        <div className="col-span-3">
          <Form />
        </div>
      </div>
    </>
  );
};

export default Home;
