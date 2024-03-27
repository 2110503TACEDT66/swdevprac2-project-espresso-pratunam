"use client";
import DateRangePickerComponent from "@/components/dateRange";
import TopMenuBlack from "@/components/topMenuBlack";
import Image from "next/image";
import React, { useEffect } from "react";
import { DateRange } from "@mui/x-date-pickers-pro/models";
import dayjs, { Dayjs } from "dayjs";
// import { carData } from "../../carlist/page";
import getOneCar from "@/libs/getOneCar";
import { Car } from "@/interface/interface";
import createBooking from "@/libs/createBooking";
import { useRouter } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/auth";
import getBookings from "@/libs/getBookings";
import { useSession } from "next-auth/react";

const CarDetailPage = ({ params }: { params: { carId: string } }) => {
  const [selectedRange, setSelectedRange] = React.useState<DateRange<Dayjs>>([
    dayjs(),
    dayjs().add(1, "day"),
  ]);
  const [isLoading, setLoading] = React.useState(true);
  const [car, setCar] = React.useState<Car | null>(null);
  const { data: session, status } = useSession();


  const router = useRouter();

  const handleDateRangeChange = (newDateRange: DateRange<Dayjs>) => {
    setSelectedRange(newDateRange);
  };

  const handleBooking = async () => {
    try {
      setLoading(true);
      try {
        const session = await getServerSession(authOptions);
        //console.log(session)
        if (session?.user?.user.role!='admin') {
          const userBookings = await getBookings();
          const userBookingCount = userBookings.length;
          //console.log(userBookingCount)
          if (userBookingCount >= 3) {
            // If the user already has 3 bookings, show an alert
            alert("You've reached maximum booking of 3");
            setLoading(false);
            router.push("/bookinglist");
            return; // Return early to avoid further execution
          }
        }
      } catch (error) {
        //console.log(error);
      }
      const createBookingFetching = await createBooking(
        car!._id,
        car!.ProviderID,
        selectedRange[0]!.toDate(),
        selectedRange[1]!.toDate()
      );
      //console.log(createBookingFetching);

      setLoading(false);
      router.push("/bookinglist");
    } catch (error) {
      console.error("Error create booking", error);
      setLoading(false); // Handle error case
      alert(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const carFetch = await getOneCar(params.carId);
        //console.log("carFetch:", carFetch);
        const carObj = carFetch["data"];
        setCar(carObj);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(true);
      }
    };
    fetchData();
  }, []);

  if(!session){
    router.push("/profile")
  }

  if (isLoading) return <p className="text-white">Loading...</p>;
  if (!car) return <p className="text-white">Cannot find a car...</p>;

  return (
    <main className="relative overflow-hidden">
      <div className="w-screen h-screen bg-white flex flox-rows">
        <div className=" w-[60%] h-full flex justify-center items-center relative">
          <Image
            layout="fill"
            src="/img/cityRoad.jpg"
            alt="city Road"
            objectFit="cover"
            className="absolute"
          ></Image>
          <div className="absolute inset-0 bg-black opacity-80"></div>
          <div className="w-[80%] h-[30vw] bg-white rounded-2xl abolute z-10 flex justify-center items-center shadow-[0_0_100px_50px_rgba(255,255,255,0.2)]">
            <div className="w-[100%] h-[100%] relative rounded-2xl">
              <Image
                src={car.imgsrc}
                layout="fill"
                objectFit="cover"
                alt="LandingPageImage"
                objectPosition="center"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
        <div className="w-[45%] h-full overflow-scroll px-10 pt-10 relative flex flex-col items-center ">
          <div className="w-full">
            <h1 className="text-4xl mb-5 font-semibold">{car.Brand}</h1>
            <div className="mb-5 flex flex-row">
              <h1 className="font-medium">Brand: </h1>
              <h1 className="ml-1">{car?.Brand}</h1>
            </div>
            <div className="mb-5 flex flex-row">
              <h1 className="font-medium">Model:</h1>
              <h1 className="ml-1"> {car?.Model}</h1>
            </div>
            <div className="mb-5 flex flex-row">
              <h1 className="font-medium">Year: </h1>
              <h1 className="ml-1">{car?.Year}</h1>
            </div>
            <div className="mb-5 flex flex-row">
              <h1 className="font-medium">Type: </h1>
              <h1 className="ml-1">{car?.Type}</h1>
            </div>
            <div className="mb-5 flex flex-row">
              <h1 className="font-medium">color: </h1>
              <h1 className="ml-1">{car?.Type}</h1>
            </div>
            <div className="mb-5 flex flex-row">
              <h1 className="font-medium">Registration Number: </h1>
              <h1 className="ml-1">{car?.RegistrationNumber}</h1>
            </div>
            <div className="text-lg font-medium mt-10 mb-10  flex items-center justify-center w-full ">
              <div className="flex flex-row w-[100%] h-[100%]">
                <div className=" bg-gray-100  hover:bg-black hover:text-white  p-5 shadow-lg text-center m-1 rounded-lg w-[34%] mb-1 hover:shadow-[0_0_20px_3px_rgba(0,0,255,0.1)]">
                  Zero to hundred{" "}
                  <hr className="border-gray-400 w-full p-0"></hr>
                  <div className="text-2xl flex items-center justify-center font-semibold mt-2 ">
                    {car?.zerotohundred}
                  </div>
                </div>
                <div className="bg-gray-100  hover:bg-black hover:text-white  p-5 shadow-lg text-center m-1 rounded-lg w-[33%] mb-1 hover:shadow-[0_0_20px_3px_rgba(0,0,255,0.1)]">
                  Top speed<hr className="border-gray-400 w-full p-0"></hr>
                  <div className="text-2xl flex items-center justify-center font-semibold mt-2 ">
                    {car?.topspeed}
                  </div>
                </div>
                <div className=" bg-gray-100  hover:bg-black hover:text-white  p-5 shadow-lg text-center m-1  rounded-lg w-[33%] mb-1 hover:shadow-[0_0_20px_3px_rgba(0,0,255,0.1)]">
                  Engine Litre<hr className="border-gray-400 w-full p-0"></hr>
                  <div className="text-2xl flex items-center justify-center font-semibold mt-2 ">
                    {car?.enginelitre}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row mb-3 ">
              <h1 className="text-2xl mr-1 font-semibold">
                THB {car.priceperday}
              </h1>
              <h1 className="text-lg ">/ day</h1>
            </div>
          </div>
          <div className="w-full">
            <h1 className="text-4xl flex items-center justify-center m-5 ">
              Book this car
            </h1>
            <DateRangePickerComponent
              onDateRangeChange={handleDateRangeChange}
            ></DateRangePickerComponent>
          </div>
          <div className="w-[80%] flex flex-col items-center mt-10">
            <button
              className="w-[100%] py-6 bg-black text-white text-4xl mb-5 rounded-2xl hover:shadow-[0_0_20px_2px_rgba(0,0,0,0.2)]"
              onClick={handleBooking}
            >
              BOOK
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CarDetailPage;
