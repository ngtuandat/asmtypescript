import { useLoaderData, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { IBusHouse, ITrip } from "../../types/interface";
import { postTrip } from "../../api/trip.api";
import { useEffect, useState } from "react";
import axios from "axios";

type AddTripForm = {
  busHouseId: string;
  startTime: string;
  fromStation: string;
  toStation: string;
  station: string;
  seats: number;
  price: number;
};

const AddTrip = () => {
  const navigate = useNavigate();
  // const busHouses = useLoaderData() as IBusHouse[];
  const [data, setData] = useState<ITrip[]>([]);
  console.log(data, "data");
  const fetchData = async () => {
    const { data } = await axios.get(
      "http://localhost:3000/trips?_expand=busHouse"
    );
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<AddTripForm>();
  const onSubmit: SubmitHandler<AddTripForm> = async (data) => {
    try {
      await postTrip(data);
      navigate("trips");
    } catch {
      alert("Thêm mới chuyến đi thất bại");
    }
  };

  return (
    <form action="#" className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-2xl text-green-500">Thêm mới chuyến đi</h1>
      <div>
        <label className="sr-only" htmlFor="name">
          Nhà xe
        </label>
        <select {...register("busHouseId", { required: "Dữ liệu bắt buộc" })}>
          {data &&
            data.map((item) => (
              <option value={item.busHouse?.id}>{item.busHouse?.name}</option>
            ))}
        </select>
        <p className="text-red-500 text-sm italic">
          {errors.busHouseId?.message}
        </p>
      </div>
      <div>
        <label className="sr-only" htmlFor="name">
          Thời gian khởi hành
        </label>
        <input
          className="w-full rounded-lg border-gray-200 p-3 text-sm"
          placeholder="Thời gian khởi hành"
          type="datetime-local"
          {...register("startTime")}
        />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="sr-only" htmlFor="email">
            Điểm đi
          </label>
          <input
            className="w-full rounded-lg border-gray-200 p-3 text-sm"
            placeholder="Điểm đi"
            type="text"
            {...register("fromStation", { required: "Dữ liệu bắt buộc" })}
          />
          <p className="text-red-500 text-sm italic">
            {errors.fromStation?.message}
          </p>
        </div>
        <div>
          <label className="sr-only" htmlFor="phone">
            Điểm đến
          </label>
          <input
            className="w-full rounded-lg border-gray-200 p-3 text-sm"
            placeholder="Điểm đến"
            type="text"
            {...register("toStation")}
          />
        </div>
      </div>

      <div>
        <label className="sr-only" htmlFor="phone">
          Bến xe
        </label>
        <input
          className="w-full rounded-lg border-gray-200 p-3 text-sm"
          placeholder="Bến xe"
          type="text"
          {...register("station")}
        />
      </div>
      <div>
        <label className="sr-only" htmlFor="phone">
          Số ghế
        </label>
        <input
          className="w-full rounded-lg border-gray-200 p-3 text-sm"
          placeholder="Số ghế"
          type="number"
          {...register("seats")}
        />
      </div>
      <div>
        <label className="sr-only" htmlFor="phone">
          Giá
        </label>
        <input
          className="w-full rounded-lg border-gray-200 p-3 text-sm"
          placeholder="Giá"
          type="number"
          {...register("price")}
        />
      </div>
      <div className="mt-4">
        <button
          type="submit"
          className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
        >
          Thêm mới chuyến xe
        </button>
      </div>
    </form>
  );
};

export default AddTrip;
