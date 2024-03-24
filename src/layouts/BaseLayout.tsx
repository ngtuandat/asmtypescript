import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const BaseLayout = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <main>
        <Outlet />
      </main>
      <div className="bg-[#F2F2F2] py-20">
        <Footer />
      </div>
    </div>
  );
};

export default BaseLayout;
