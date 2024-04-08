export interface IVehicles {
  icon: string;
  vehicle: string;
}

export interface IPopularRoutes {
  image: string;
  distance: string;
  priceInfo: {
    cost: number;
    discount: number;
  };
  bgColor: string;
}

export interface ITicketInfo {
  images: string;
  car: string;
  start: {
    time: string;
    location: string;
  };
  Period: string;
  destination: {
    time: string;
    location: string;
  };
  price: string;
  discount: string;
  blank: number;
}

export interface ITrip {
  busHouseId: string;
  fromStation: string;
  id?: string;
  isBooked?: number;
  price: number;
  seats: number;
  toStation: string;
  busHouse?: IBusHouse;
  startTime: string;
}

export interface IBusHouse {
  id: string;
  name: string;
  adress: string;
  phone: string;
}
