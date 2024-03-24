import Card from "../components/Card";
import { PopularRoutes } from "../data/mockdata";
import { IPopularRoutes } from "../types/interface";

const Popular = () => {
  return (
    <div className="mt-10">
      <div className="text-xl mb-5 font-light text-[#484848]">
        Tuyến đường phổ Biến
      </div>
      <div className="grid grid-cols-4 gap-4">
        {PopularRoutes.map((item: IPopularRoutes) => (
          <Card PopularRoute={item} />
        ))}
      </div>
    </div>
  );
};

export default Popular;
