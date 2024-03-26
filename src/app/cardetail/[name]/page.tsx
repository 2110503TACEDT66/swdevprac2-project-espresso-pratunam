'use client'
import DateRangePickerComponent from "@/components/dateRange";
import TopMenuBlack from "@/components/topMenuBlack";
import Image from "next/image";
import React from "react";
import { DateRange } from '@mui/x-date-pickers-pro/models';
import dayjs, { Dayjs } from 'dayjs';
import{ carData} from "../../carlist/page";

const CarDetailPage = ({params}:{params:{name: string}}) => {
    const [value, setValue] = React.useState<DateRange<Dayjs>>([
        dayjs(),
        dayjs().add(1, 'day'),
      ]);

      const bookingHandler = () => {
        if (value) { // Check if a date range is selected
            const startDate = value[0]?.format('YYYY-MM-DD'); // Format if needed
            const endDate = value[1]?.format('YYYY-MM-DD'); // Format if needed

            console.log("Start Date:", startDate);
            console.log("End Date:", endDate);
        } else {
            console.log("Please select a date range");
        }
    }
    const decodedName = decodeURIComponent(params.name);
    console.log(decodedName);
    const car = carData.find(car => car.name === decodedName);
   

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
                src={car!.imgSrc}
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
          <div className="w-full" >
            <h1 className="text-4xl mb-5 font-semibold">{car?.name}</h1>
            <div className="mb-5 flex flex-row">
             <h1 className="font-medium">Brand: </h1>
             <h1 className="ml-1">{car?.brand}</h1>
            </div>
            <div className="mb-5 flex flex-row">
            <h1 className="font-medium">Model:</h1>
            <h1 className="ml-1"> {car?.model}</h1>
            </div>
            <div className="mb-5 flex flex-row">
            <h1 className="font-medium">Year: </h1>
            <h1 className="ml-1">{car?.year}</h1>
            </div>
            <div className="mb-5 flex flex-row">
            <h1 className="font-medium">Type: </h1>
            <h1 className="ml-1">{car?.type}</h1>
            </div>
            <div className="mb-5 flex flex-row">
              <h1 className="font-medium">color:  </h1>
              <h1 className="ml-1">{car?.type}</h1>
            </div>
            <div className="mb-5 flex flex-row">
              <h1 className="font-medium">Registration Number:  </h1>
              <h1 className="ml-1">{car?.registrationNumber}</h1>
            </div>
              <div className="text-lg font-medium mt-10 mb-10  flex items-center justify-center w-full ">
                <div className="flex flex-row w-[100%] h-[100%]">
                  <div className=" bg-gray-100  hover:bg-black hover:text-white  p-5 shadow-lg text-center m-1 rounded-lg w-[34%] mb-1 hover:shadow-[0_0_20px_3px_rgba(0,0,255,0.1)]">Zero to hundred <hr className="border-gray-400 w-full p-0"></hr><div className="text-2xl flex items-center justify-center font-semibold mt-2 " >4.9</div></div>
                  <div className="bg-gray-100  hover:bg-black hover:text-white  p-5 shadow-lg text-center m-1 rounded-lg w-[33%] mb-1 hover:shadow-[0_0_20px_3px_rgba(0,0,255,0.1)]">Top speed<hr className="border-gray-400 w-full p-0"></hr><div className="text-2xl flex items-center justify-center font-semibold mt-2 ">180</div></div>
                  <div className=" bg-gray-100  hover:bg-black hover:text-white  p-5 shadow-lg text-center m-1  rounded-lg w-[33%] mb-1 hover:shadow-[0_0_20px_3px_rgba(0,0,255,0.1)]">Engine Litre<hr className="border-gray-400 w-full p-0"></hr><div className="text-2xl flex items-center justify-center font-semibold mt-2 ">5.0</div></div>
                </div>
            </div>


            <div className="flex flex-row mb-3 ">
              <h1 className="text-2xl mr-1 font-semibold">THB 22000</h1>
              <h1  className="text-lg " >/ day</h1>
            </div>

          </div>

          <div className="w-full">
            <h1 className="text-4xl flex items-center justify-center m-5 ">Book this car</h1>
            <DateRangePickerComponent selectedRange={value} onDateRangeChange={(newValue: React.SetStateAction<DateRange<dayjs.Dayjs>>) => {setValue(newValue)}}></DateRangePickerComponent>
          </div>
          <div className="w-[80%] flex flex-col items-center mt-10">
            <button className="w-[100%] py-6 bg-black text-white text-4xl mb-5 rounded-2xl hover:shadow-[0_0_20px_2px_rgba(0,0,0,0.2)]" onClick={bookingHandler}>
              BOOK
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CarDetailPage;
