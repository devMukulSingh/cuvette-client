import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./routes/Home/Home";

function App() {
  
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Home/>
    </>
  );
}

export default App;
