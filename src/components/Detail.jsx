// import Mockup from "./Mockup";
import ProfileForm from "./ProfileForm";
import { loadState } from "../redux/localStorage";

import { useGetUserQuery } from "../redux/UserServices";

const Detail = () => {
  const token = loadState();

  const { data, isLoading } = useGetUserQuery({ id: token.id });
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="grid grid-cols-1 container mx-auto mt-5 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-5 xl:grid-cols-5">
        <div className="col-span-2">{/* <Mockup userid={keys[0]} /> */}</div>
        <div className="col-span-3">
          <ProfileForm profile={data.data} />
        </div>
      </div>
    </>
  );
};

export default Detail;
