import { Footers } from "../../data/mockdata";

const RowFirst = () => {
  return (
    <div>
      <div className="flex ">
        <div className="col-span-1 space-y-3" style={{ width: "25%" }}>
          <div className="text-2xl font-bold whitespace-nowrap">
            Tuyến đường
          </div>
          {Footers.rowfirst.colfirst.map((item) => (
            <div className="whitespace-nowrap text-sm">
              <a className="underline font-semibold" title={item} href="">
                {item}
              </a>
            </div>
          ))}
        </div>
        <div className="col-span-1 space-y-3" style={{ width: "37.5%" }}>
          <div className="text-2xl font-bold whitespace-nowrap">
            Xe Limousine
          </div>
          {Footers.rowfirst.col.map((item) => (
            <div className="whitespace-nowrap text-sm">
              <a className="underline font-semibold" title={item} href="">
                {item}
              </a>
            </div>
          ))}
        </div>
        <div className="col-span-1 space-y-3" style={{ width: "37.5%" }}>
          <div className="text-2xl font-bold whitespace-nowrap">Tin tức</div>
          {Footers.rowfirst.colchild.map((item) => (
            <div className=" text-sm">
              <a className="underline font-semibold" title={item} href="">
                {item}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RowFirst;
