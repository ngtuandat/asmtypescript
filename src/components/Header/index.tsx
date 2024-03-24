import Button from "../Button/Button";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <div className="bg-[#2474E5] py-2 px-3 flex justify-between items-center">
      <img src="/images/logo.svg" alt="" />
      <div className="lg:flex space-x-14 items-center">
        <Navigation />
        <div className="space-x-4">
          <Button title="Hotline 24/7" />
          <Button title="Đăng nhập" />
        </div>
      </div>
    </div>
  );
};

export default Header;
