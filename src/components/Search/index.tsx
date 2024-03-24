import { Vehicles } from "../../data/mockdata";
import { IVehicles } from "../../types/interface";

const Search = () => {
  return (
    <div>
      <div className="bg-white rounded-lg">
        {" "}
        <div className="flex bg-white rounded-lg py-[17px] border-b-[1px] border-[#E0E0E0]  justify-center space-x-8">
          {Vehicles.map((item: IVehicles) => (
            <div className="flex space-x-2 ">
              <img src={item.icon} alt="" />
              <div className="whitespace-nowrap text-[#474747] font-normal">
                {item.vehicle}
              </div>
            </div>
          ))}
        </div>
        <div className="py-4 flex justify-center space-x-5">
          <div className="flex border-[#E0E0E0] border-[1px] rounded-md justify-center">
            <div className="flex space-x-2  py-1.5 border-r-[1px] border-[#E0E0E0] items-center w-[200px] px-4">
              <div className="w-6 h-6">
                <img className="w-full" src="/images/start.svg" alt="" />
              </div>
              <div>
                <div className="text-xs text-[#E0E0E0]">Nơi xuất phát</div>
                <div className="text-[#141414] font-light">
                  <input
                    className="w-full border-none outline-none"
                    type="text"
                    placeholder="nơi xuất phát"
                  />
                </div>
              </div>
            </div>
            <div className="flex space-x-2 py-1.5 border-r-[1px] border-[#E0E0E0] items-center w-[200px] px-4">
              <div>
                <img src="/images/destination.svg" alt="" />
              </div>
              <div>
                <div className="text-xs text-[#E0E0E0]">Nơi đến</div>
                <div className="text-[#141414] font-light">
                  {" "}
                  <input
                    className="w-full border-none outline-none"
                    type="text"
                    placeholder="nơi đến"
                  />
                </div>
              </div>
            </div>{" "}
            <div className="flex space-x-2 py-1.5 border-r-[1px] border-[#E0E0E0] items-center w-[200px] px-4">
              <div>
                <img src="/images/date.svg" alt="" />
              </div>
              <div>
                <div className="text-xs text-[#ccc]">Ngày đi</div>
                <div className="text-[#141414] font-light">
                  {" "}
                  <input
                    className="w-full border-none outline-none"
                    type="date"
                    placeholder="nơi xuất phát"
                  />
                </div>
              </div>
            </div>{" "}
            <div className=" w-[200px] flex items-center justify-center text-[#5B98EA]">
              Thêm ngày về
            </div>
          </div>
          <div className="px-6 py-1 bg-[#FFD332] flex items-center  rounded-lg">
            Tìm kiếm
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
