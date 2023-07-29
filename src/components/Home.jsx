import { useSelector, useDispatch } from "react-redux";
import { createId } from "../redux/LinkSlice";
import { v4 as uuidv4 } from "uuid";
import Form from "./Form";
import Mockup from "./Mockup";

const Home = () => {
  let data = useSelector((state) => state.LinkSlice);
  const dispatch = useDispatch();
  let keys = Object.keys(data);

  if (keys.length === 0) {
    dispatch(createId(uuidv4()));
  }
  const links = data[keys[0]].links;

  return (
    <>
      <div className="grid grid-cols-1 container mx-auto mt-5 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-5 xl:grid-cols-5">
        <div className="col-span-2">
          <Mockup userid={keys[0]} />
        </div>
        <div className="col-span-3">
          <Form links={links} userid={keys[0]} />
        </div>
      </div>
    </>
  );
};

export default Home;
