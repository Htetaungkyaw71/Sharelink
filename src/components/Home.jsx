import Form from "./Form";
import Mockup from "./Mockup";
import { loadState } from "../redux/localStorage";
import { useGetlinksQuery } from "../redux/linkServices";
import Loading from "./Loading";
import Navbar from "./Navbar";

const Home = () => {
  const user = loadState();

  const { data, isLoading, refetch } = useGetlinksQuery();
  if (isLoading) {
    return <Loading />;
  }

  const links = data?.data?.links ?? [];
  const userobj = data?.data ?? {};
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 container mx-auto mt-5 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-5 xl:grid-cols-5">
        <div className="col-span-2">
          <Mockup user={userobj} />
        </div>
        <div className="col-span-3">
          <Form links={links} userid={user.id} refetch={refetch} />
        </div>
      </div>
    </>
  );
};

export default Home;
