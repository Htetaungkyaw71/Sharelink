import Mockup from "./Mockup";
import ProfileForm from "./ProfileForm";
import Loading from "./Loading";
import { useGetlinksQuery } from "../redux/linkServices";
import Navbar from "./Navbar";

const Detail = () => {
  const { data, isLoading, refetch } = useGetlinksQuery();

  if (isLoading) {
    return <Loading />;
  }
  const userobj = data?.data ?? {};

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 container mx-auto mt-5 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-5 xl:grid-cols-5">
        <div className="col-span-2">
          <Mockup user={userobj} />
        </div>
        <div className="col-span-3">
          <ProfileForm profile={userobj} refetch={refetch} />
        </div>
      </div>
    </>
  );
};

export default Detail;
