import { ITicketInfo, ITrip } from "../../types/interface";

const TicketInfomation = ({ ticketInfo }: { ticketInfo: ITicketInfo }) => {
  return (
    <div className="w-full bg-white rounded-md h-fit px-4 py-11">
      <div className="flex justify-between">
        <div className="flex space-x-4">
          <div>
            <img src={ticketInfo.images} alt="" />
          </div>
          <div className="space-y-10">
            <div>{ticketInfo.car}</div>
            <div>
              <div className="flex space-x-4">
                <img src="/images/ic_bookticked.svg" alt="" />
                <div className="space-y-1">
                  <div className="text-xl font-semibold">
                    {ticketInfo.start.time}{" "}
                    <span className="text-sm font-light">
                      {ticketInfo.start.location}
                    </span>
                  </div>
                  <div className="text-sm font-light">{ticketInfo.Period}</div>
                  <div className="text-xl font-semibold">
                    {ticketInfo.destination.time}{" "}
                    <span className="text-sm font-light">
                      {ticketInfo.destination.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-end">
          <div className="text-xl text-[#2474E5] font-semibold">
            Từ {ticketInfo.price}
          </div>
          <div className="border-[1px] text-[#484848] text-xs border-[#27AE60] rounded-md px-2 py-1 my-2">
            Giảm {ticketInfo.discount}
          </div>
          <div className="mt-6 text-[#484848] font-light">
            Còn {ticketInfo.blank} chỗ trống
          </div>
          <button className="px-4 py-1 my-2 bg-[#FFC700] rounded-md">
            Chọn tuyến
          </button>
          <div>KHÔNG CẦN THANH TOÁN TRƯỚC</div>
        </div>
      </div>
    </div>
  );
};

export default TicketInfomation;
