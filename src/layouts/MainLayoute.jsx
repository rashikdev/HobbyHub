import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const MainLayoute = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-457px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayoute;
