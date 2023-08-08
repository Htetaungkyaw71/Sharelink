import Mockup from "./Mockup";
import ProfileForm from "./ProfileForm";
import Loading from "./Loading";
import { useGetlinksQuery } from "../redux/linkServices";
import Navbar from "./Navbar";
import UpdateImg from "./UpdateImg";

const Detail = () => {
  const { data, isLoading, refetch } = useGetlinksQuery();

  if (isLoading) {
    return <Loading />;
  }

  const userobj = data?.data ?? {};

  return (
    <>
      <Navbar user={userobj} />
      <div className="grid grid-cols-1 container mx-auto mt-5 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-5 xl:grid-cols-5">
        <div className="col-span-2">
          <Mockup user={userobj} />
        </div>
        <div className="col-span-3">
          <UpdateImg profile={userobj} refetch={refetch} />
          <ProfileForm profile={userobj} refetch={refetch} />
        </div>
      </div>
    </>
  );
};

export default Detail;
