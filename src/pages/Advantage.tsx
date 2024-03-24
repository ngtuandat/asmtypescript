const Advantage = () => {
  return (
    <div className="absolute bottom-0 py-5 z-0 bg-opacity-50  bg-black w-full flex justify-center space-x-12  text-white">
      <div className="flex z-10 space-x-3 items-center ">
        <div>
          <img src="/images/verifind.svg" alt="" />
        </div>
        <div>Chắc chắn có chỗ</div>
      </div>
      <div className="flex z-10 space-x-3 items-center">
        <div>
          <img src="/images/headsetmic.svg" alt="" />
        </div>
        <div>Hỗ trợ 24/7</div>
      </div>
      <div className="flex z-10 space-x-3 items-center">
        <div>
          <img src="/images/discount.svg" alt="" />
        </div>
        <div>Nhiều ưu đãi</div>
      </div>
      <div className="flex z-10 space-x-3 items-center">
        <div>
          <img src="/images/monetization.svg" alt="" />
        </div>
        <div>Thanh toán đa dạng</div>
      </div>
    </div>
  );
};

export default Advantage;
