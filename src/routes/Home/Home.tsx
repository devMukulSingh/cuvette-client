import JobPostForm from "./components/JobPostForm";
import Sidebar from "./components/Sidebar";

const Home = () => {
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
