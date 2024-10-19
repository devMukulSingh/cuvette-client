import { useSWRConfig } from "swr/_internal";
import JobPostForm from "./components/JobPostForm";
import Sidebar from "./components/Sidebar";

const Home = () => {
  const { cache } = useSWRConfig()
  console.log(cache.get('userData'));
  
  return (
    <div
      className="
    flex 
    h-[calc(100vh-5rem)]
    w-full 
    items-center
    "
    >
      <Sidebar />
      <JobPostForm />
    </div>
  );
};

export default Home;
