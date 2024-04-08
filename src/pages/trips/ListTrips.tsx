import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ITrip } from "../../types/interface";
import { MdDelete, MdEdit } from "react-icons/md";
import { deleteTrip } from "../../api/trip.api";

const ListTrips = () => {
  const [trips, setTrips] = useState<ITrip[]>([]);
  const getTrips = async () => {
    const { data } = await axios.get(
      "http://localhost:3000/trips?_expand=busHouse"
    );
    setTrips(data);
  };

  useEffect(() => {
    getTrips();
  }, []);
  return (
    <div>
      <div className="mb-3">Danh sách chuyến đi</div>
      <Link to="add" className="text-blue-400 underline">
        Thêm mới chuyến đi
      </Link>
      {trips.map((trip) => (
        <Trip key={trip.id} data={trip} />
      ))}
    </div>
  );
};

const Trip = (props: { data: ITrip }) => {
  const startTime = props.data.startTime;
  const date = new Date(startTime);

  // Lấy thông tin về giờ và phút
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const day = date.getDate();
  const month = date.getMonth() + 1; // Tháng bắt đầu từ 0 nên cần cộng thêm 1
  const year = date.getFullYear();
  const formattedDate = `${year}-${month < 10 ? "0" : ""}${month}-${
    day < 10 ? "0" : ""
  }${day}`;

  const formattedTime = `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;

  console.log(props, "logcaiddiiiii");

  // const handleDelete = async (id: string | undefined) => {
  //   try {
  //     // const uri = `trips/${id}`;
  //     // console.log(uri, "logidxemnaof");
  //     const response = await deleteTrip(`trips/${id}`);
  //     console.log(response, "responsexxx");
  //     return response.data;
  //   } catch (error) {
  //     // Xử lý lỗi nếu có
  //     console.error("Error deleting trip:", error);
  //     throw error;
  //   }
  // };
  const handleDelete = async (id: string | undefined) => {
    try {
      if (!id) {
        throw new Error("Missing ID");
      }
      console.log(id, "logid");

      const response = await deleteTrip(id);
      console.log(response, "responsexxx");
      return response.data;
    } catch (error) {
      console.error("Error deleting trip:", error);
      throw error;
    }
  };
  return (
    // <article className="rounded-xl border-2 border-gray-100 bg-white">
    //   <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
    //     <a href="#" className="block shrink-0">
    //       <img
    //         alt=""
    //         src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
    //         className="size-14 rounded-lg object-cover"
    //       />
    //     </a>

    //     <div>
    //       <h3 className="font-medium sm:text-lg">
    //         <Link to={"/trip/" + props.data.id} className="hover:underline">
    //           {props.data.busHouse?.name}
    //         </Link>
    //       </h3>

    //       <p className="line-clamp-2 text-sm text-gray-700">
    //         {props.data.price}
    //       </p>

    //       <div className="mt-2 sm:flex sm:items-center sm:gap-2">
    //         <div className="flex items-center gap-1 text-gray-500">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-4 w-4"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //             stroke-width="2"
    //           >
    //             <path
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
    //             />
    //           </svg>

    //           <p className="text-xs">{props.data.seats}</p>
    //         </div>

    //         <span className="hidden sm:block" aria-hidden="true">
    //           &middot;
    //         </span>

    //         <p className="hidden sm:block sm:text-xs sm:text-gray-500">
    //           Posted by
    //           <a href="#" className="font-medium underline hover:text-gray-700">
    //             {" "}
    //             {props.data.price}{" "}
    //           </a>
    //         </p>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="flex justify-end">
    //     <strong className="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-green-600 px-3 py-1.5 text-white">
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         className="h-4 w-4"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         stroke="currentColor"
    //         stroke-width="2"
    //       >
    //         <path
    //           stroke-linecap="round"
    //           stroke-linejoin="round"
    //           d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
    //         />
    //       </svg>

    //       <span className="text-[10px] font-medium sm:text-xs">Solved!</span>
    //     </strong>
    //   </div>
    // </article>
    <div className="w-full bg-white rounded-md h-fit px-4 py-11">
      <div className="flex justify-end">
        <div className="flex">
          <div onClick={() => handleDelete(props.data.id)}>
            <MdDelete />
          </div>
          <Link to="update">
            <MdEdit />
          </Link>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex space-x-4">
          <div>
            <img
              alt=""
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              className="size-14 rounded-lg object-cover"
            />
          </div>
          <div className="space-y-10">
            <div>
              {" "}
              <div> {props.data.busHouse?.name}</div>
              <div>Time: {formattedDate}</div>
            </div>
            <div>
              <div className="flex space-x-4">
                <img src="/images/ic_bookticked.svg" alt="" />
                <div className="space-y-1">
                  <div className="text-xl font-semibold">
                    {formattedTime}{" "}
                    <span className="text-sm font-light">
                      {props.data.fromStation}
                    </span>
                  </div>
                  <div className="text-sm font-light">1h30p</div>
                  <div className="text-xl font-semibold">
                    {/* {ticketInfo.destination.time}{" "} */}
                    <span className="text-sm font-light">
                      {props.data.toStation}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-end">
          <div className="text-xl text-[#2474E5] font-semibold">
            Từ {props.data.price}
          </div>
          <div className="border-[1px] text-[#484848] text-xs border-[#27AE60] rounded-md px-2 py-1 my-2">
            Giảm 10%
          </div>
          {/* <div className="mt-6 text-[#484848] font-light">
            Còn {ticketInfo.blank} chỗ trống
          </div> */}
          <button className="px-4 py-1 my-2 bg-[#FFC700] rounded-md">
            Chọn tuyến
          </button>
          <div>KHÔNG CẦN THANH TOÁN TRƯỚC</div>
        </div>
      </div>
    </div>
  );
};
export default ListTrips;
