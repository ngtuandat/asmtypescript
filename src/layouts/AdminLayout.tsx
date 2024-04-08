import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../pages/trips/SideBar";

const Adminlayout = () => {
  return (
    <div>
      <Header />
      <SideBar>
        <Outlet />
      </SideBar>
    </div>
  );
};

export default Adminlayout;
