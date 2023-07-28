import { useDispatch, useSelector } from "react-redux";
import Mockup from "./Mockup";
import ProfileForm from "./ProfileForm";
import { createId } from "../redux/LinkSlice";
import { v4 as uuidv4 } from "uuid";

const Detail = () => {
  let data = useSelector((state) => state.LinkSlice);
  const dispatch = useDispatch();
  let keys = Object.keys(data);

  if (keys.length === 0) {
    dispatch(createId(uuidv4()));
  }
  return (
    <>
      <div className="grid grid-cols-5 container mx-auto mt-5">
        <div className="col-span-2">
          <Mockup />
        </div>
        <div className="col-span-3">
          <ProfileForm userid={keys[0]} />
        </div>
      </div>
    </>
  );
};

export default Detail;
