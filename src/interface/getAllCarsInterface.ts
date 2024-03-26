export interface Provider {
    _id: string;
    name: string;
    address: string;
    email: string;
    phone: string;
    __v: number;
}

export interface Booking {
    _id: string;
    UserID: string;
    CarID: string;
    ProviderID: string;
    StartDate: string; // ISO Date String format
    EndDate: string; // ISO Date String format
    createdAt: string; // ISO Date String format
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