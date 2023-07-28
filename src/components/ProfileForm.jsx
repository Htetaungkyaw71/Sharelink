/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { addProfile } from "../redux/LinkSlice";

const ProfileForm = ({ userid }) => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = new FormData(e.target);
    let data = {
      name: obj.get("name") ?? "",
      email: obj.get("email") ?? "",
    };

    dispatch(addProfile([userid, data]));
    obj.set("name", "");
    obj.set("email", "");
  };

  return (
    <div>
      ProfileForm
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" />
        <label>Email</label>
        <input type="email" name="email" />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default ProfileForm;
