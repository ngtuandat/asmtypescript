import Search from "../components/Search";
import Advantage from "./Advantage";
import Popular from "./Popular";

const HomePage = () => {
  return (
    <div>
      <div className="relative">
        <img
          className="h-[480px] w-full object-cover"
          src="/images/banner.svg"
          alt=""
        />
        <div className="  absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1016px]">
          <div className="mb-3 text-2xl font-medium text-white text-center py-2">
            Vexere - Cam kết hoàn 150% nếu nhà xe không giữ chỗ
          </div>
          <Search />
        </div>
        <Advantage />
      </div>
      <div className="max-w-[980px] mx-auto">
        <Popular />
      </div>
    </div>
  );
};

export default HomePage;
