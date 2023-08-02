// import { useSelector } from "react-redux";
// import { createId } from "../redux/LinkSlice";
// import { v4 as uuidv4 } from "uuid";
import Form from "./Form";
import Mockup from "./Mockup";

import { useNavigate } from "react-router-dom";
import { loadState } from "../redux/localStorage";
import { useGetlinksQuery } from "../redux/linkServices";

const Home = () => {
  const navigate = useNavigate();
  const user = loadState();

  const { data, isLoading, refetch } = useGetlinksQuery();

  if (isLoading) {
    return <div>loading...</div>;
  }
  const links = data?.data?.links ?? [];
  console.log(data);
  const userobj = data?.data ?? {};
  return (
    <>
      <div className="grid grid-cols-1 container mx-auto mt-5 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-5 xl:grid-cols-5">
        <div className="col-span-2">
          <Mockup user={userobj} />
          <button
            onClick={() => {
              localStorage.removeItem("data");
              navigate("/signin");
            }}
          >
            SignOut
          </button>
        </div>
        <div className="col-span-3">
          <Form links={links} userid={user.id} refetch={refetch} />
        </div>
      </div>
    </>
  );
};

export default Home;
