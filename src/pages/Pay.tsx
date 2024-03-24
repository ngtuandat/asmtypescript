import { MdKeyboardArrowDown } from "react-icons/md";

const Pay = () => {
  return (
    <div className="max-w-[980px] mx-auto flex justify-center">
      <div className="w-[400px] my-10 shadow-md">
        <div className="bg-[#FFC700] py-3  text-[#2474E5] text-center">
          Thời gian thanh toán còn lại 10:00
        </div>
        <div className="text-center">
          Truy cập VnPay qr để thanh toán được <br /> bằng hình thức này{" "}
        </div>
        <div className="flex justify-center">
          <img src="/images/download.png" alt="" />
        </div>
        <div className="flex items-center flex-col">
          <div className="bg-[#F2F2F2] w-full px-4 py-3 border-t-[10px] border-[#E0E0E0]">
            Bạn có mã giảm giá ?
          </div>
          <div className="bg-white px-3 py-1 my-3">
            <input
              placeholder="Nhập mã giảm giá của vexere"
              className="px-2 w-[250px] py-0.5 border-black border-[1px]"
              type="text"
            />
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-[#F2F2F2] w-full px-4 py-3 border-t-[10px] border-[#E0E0E0]">
            Thông tin vé
          </div>
          <div className="bg-white space-y-3 px-4">
            <div className="text-xl font-medium text-[#717172]">
              Tuyến đường
            </div>
            <div className="text-[#717172] text-sm font-medium">
              hà nội - hải phòng
            </div>
            <div className="text-xl font-medium text-[#717172]">Nhà xe</div>
            <div className="text-[#717172] text-sm font-medium">Hải âu </div>
            <div className="text-xl font-medium text-[#717172]">
              Giờ đón (Dự kiến)
            </div>
            <div className="text-[#717172] text-sm font-medium">
              10:00 27/07/2024
            </div>

            <div className="flex justify-between text-xl font-semibold border-b-2 border-[#ccc] pb-3">
              <div>Tổng tiền</div>
              <div>95.000đ</div>
            </div>
            <div className="flex justify-center">
              <MdKeyboardArrowDown size={30} />
            </div>
          </div>
          <div className="text-sm py-2 bg-[#E0E0E0] text-center">
            bằng việc nhấn thành toán tôi đồng ý với{" "}
            <a className="text-[#2474E5]" href="">
              quy chế
            </a>{" "}
            của vexere.com và{" "}
            <a className="text-[#2474E5]" href="">
              chính sách
            </a>{" "}
            của nhà xe
          </div>
          <div className="text-center py-3 bg-[#FFC700] font-normal">
            THANH TOÁN
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pay;
