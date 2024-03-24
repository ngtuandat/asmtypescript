import { Footers } from "../../data/mockdata";

const RowChild = () => {
  return (
    <div className="grid grid-cols-4 ">
      <div className="space-y-3 w-[213px]">
        <div className="text-2xl font-bold whitespace-nowrap">Hỗ trợ</div>
        {Footers.rowChild.colfirst.map((item) => (
          <div className=" text-sm">
            <a className="underline font-bold" title={item} href="">
              {item}
            </a>
          </div>
        ))}
      </div>
      <div className="space-y-3">
        <div className="text-2xl font-bold whitespace-nowrap">Hỗ trợ</div>
        {Footers.rowChild.colChild.map((item) => (
          <div className=" text-sm">
            <a className="underline font-bold" title={item} href="">
              {item}
            </a>
          </div>
        ))}
        <div className="text-2xl font-bold whitespace-nowrap ">Chứng nhận</div>
      </div>
      <div>
        <div className="text-2xl font-bold whitespace-nowrap">
          Đối tác thanh toán
        </div>
      </div>
      <div>
        <div className="text-2xl font-bold whitespace-nowrap">
          Tải ứng dụng Vexere
          <img className="mt-7" src="/images/qr_app.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default RowChild;
