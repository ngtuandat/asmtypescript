import { Footers } from "../../data/mockdata";

const Row = () => {
  return (
    <div className="flex my-10">
      <div className="col-span-1 space-y-3" style={{ width: "25%" }}>
        <div className="text-2xl font-bold whitespace-nowrap">Bến xe</div>
        {Footers.row.colfirst.map((item) => (
          <div className="whitespace-nowrap text-sm">
            <a className="underline font-bold" title={item} href="">
              {item}
            </a>
          </div>
        ))}
      </div>
      <div className="col-span-1 space-y-3 " style={{ width: "75%" }}>
        <div className="text-2xl font-bold whitespace-nowrap">Nhà xe</div>
        <div className="grid grid-cols-4">
          {Footers.row.col.map((item) => (
            <div className="text-sm mb-3">
              <a className="underline font-bold" title={item} href="">
                {item}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Row;
