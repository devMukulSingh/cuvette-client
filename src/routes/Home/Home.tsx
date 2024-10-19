import { Link } from "react-router-dom";
import PostedJobs from "./components/PostedJobs";

const Home = () => {

  return (
    <>
      <div className="flex h-full w-full px-10  py-10">
        <Link
          className="bg-blue-600 hover:bg-blue-500 hover:text-white text-2xl w-fit h-fit text-white px-4 py-1 rounded-md"
          to={"/post-job"}
        >
          Create Interview
        </Link>
        <PostedJobs/>
      </div>
    </>
  );
};

export default Home;
