import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./routes/Home/Home";

function App() {
  
  return (
    <>
      <Outlet/>
    </>
  );
}

export default App;
