import { IPopularRoutes } from "../../types/interface";

const Card = ({ PopularRoute }: { PopularRoute: IPopularRoutes }) => {
  console.log(PopularRoute, "logcai");

  return (
    <div>
      <img src={PopularRoute.image} alt="" />
      <div
        className="py-6 px-3 text-white"
        style={{ backgroundColor: PopularRoute.bgColor }}
      >
        <div className="font-semibold">{PopularRoute.distance}</div>
        <div className="text-xs ">
          Từ {PopularRoute.priceInfo.cost}đ
          {PopularRoute.priceInfo.discount !== 0 && " - "}
          <span
            className={`line-through ${
              PopularRoute.priceInfo.discount === 0 && "hidden"
            }`}
          >
            {PopularRoute.priceInfo.discount}đ
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
