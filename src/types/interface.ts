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
