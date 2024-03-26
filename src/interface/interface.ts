export interface Provider {
    _id: string;
    name: string;
    address: string;
    email: string;
    phone: string;
    __v: number;
}

export interface Car {
    _id: string;
    Brand: string;
    Model: string;
    Year: number;
    Type: string;
    Color: string;
    Available: boolean;
    __v: number;
    RegistrationNumber: string;
    ProviderID: string;
    Providers: Provider[];
    Bookings: Booking[];
    id?: string; // Optional in case 'id' isn't always present
    topspeed: number;
    priceperday: number;
    enginelitre: number;
    zerotohundred: number;
    imgsrc: string;
}

export interface Booking {
    CarID: string;
    EndDate: string | Date;
    ProviderID: string;
    StartDate: string | Date;
    UserID: {
      _id: string;
      name: string;
      email: string;
    };
    createdAt: string | Date;
    id: string;
  }
