import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
  const location = useLocation();
  const noNavFooter = location.pathname.includes("login");
  return (
    <>
      {noNavFooter || <Navbar></Navbar>}
      <Outlet></Outlet>
      {noNavFooter || <Footer></Footer>}
    </>
  );
};

export default Main;
