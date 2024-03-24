import Search from "../components/Search";
import TicketInfomation from "../components/TicketInfomation";
import { TicketInfos } from "../data/mockdata";
import { ITicketInfo } from "../types/interface";
import ArrangeTickets from "./ArrangeTickets";

const BookTickets = () => {
  return (
    <div className="bg-[#F2F2F2]">
      <div className="max-w-[1016px] mx-auto pt-8">
        <Search />
        <div className="mt-7 flex space-x-4">
          <ArrangeTickets />
          <div className=" space-y-8 w-full">
            {TicketInfos.map((item: ITicketInfo) => (
              <TicketInfomation ticketInfo={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTickets;
