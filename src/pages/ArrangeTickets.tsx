const Arrange = [
  "Mặc định",
  "Giờ đi sớm nhất",
  "Giờ đi muộn nhất",
  "Đánh giá cao nhất",
  "Giá tăng dần",
  "Giá giảm dần",
];
const ArrangeTickets = () => {
  return (
    <div className="w-[266px] bg-white rounded-md p-4 h-fit">
      <div className="mb-3 text-lg font-bold leading-6">Sắp xếp</div>
      <div className="space-y-3">
        {Arrange.map((item) => (
          <div className="flex items-center space-x-2">
            <input type="radio" size={36} />
            <div>{item}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArrangeTickets;
