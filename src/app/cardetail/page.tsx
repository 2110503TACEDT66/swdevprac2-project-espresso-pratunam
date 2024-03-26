'use client'
import DateRangePickerComponent from "@/components/dateRange";
import TopMenuBlack from "@/components/topMenuBlack";
import Image from "next/image";
import React from "react";
import { DateRange } from '@mui/x-date-pickers-pro/models';
import dayjs, { Dayjs } from 'dayjs';

const CarDetailPage = () => {
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
                src="/img/recommendMustang.jpg"
                layout="fill"
                objectFit="cover"
                alt="LandingPageImage"
                objectPosition="center"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
        <div className="w-[40%] h-full overflow-scroll px-10 pt-10 relative flex flex-col items-center">
          <div className="w-full" >
            <h1 className="text-4xl mb-5 font-semibold">Ford Mustang GT</h1>
            <div className="mb-5 flex flex-row">
             <h1 className="font-medium">Brand: </h1>
             <h1 className="ml-1">Ford</h1>
            </div>
            <div className="mb-5 flex flex-row">
            <h1 className="font-medium">Model:</h1>
            <h1 className="ml-1"> Mustang GT</h1>
            </div>
            <div className="mb-5 flex flex-row">
            <h1 className="font-medium">Year: </h1>
            <h1 className="ml-1">2019</h1>
            </div>
            <div className="mb-5 flex flex-row">
            <h1 className="font-medium">Type: </h1>
            <h1 className="ml-1">Other</h1>
            </div>
            <div className="mb-5 flex flex-row">
              <h1 className="font-medium">color:  </h1>
              <h1 className="ml-1">Blue</h1>
            </div>
            <div className="mb-5 flex flex-row">
              <h1 className="font-medium">Registration Number:  </h1>
              <h1 className="ml-1">FGT3553</h1>
            </div>
            <div>
              <table className="text-lg font-medium mt-10 mb-10  flex items-center justify-center w-full ">
                <tbody>
                  <td className="border-black bg-gray-100 border-2 hover:bg-black hover:text-white  p-5 shadow-lg text-center ">Zerotohundred <hr></hr><tr className="text-2xl flex items-center justify-center font-semibold">125</tr></td>
                  <td className="border-black bg-gray-100 border-2 hover:bg-black hover:text-white  p-5 shadow-lg text-center ">Topspeed<hr></hr><tr className="text-2xl flex items-center justify-center font-semibold">125</tr></td>
                  <td className="border-black bg-gray-100 border-2 hover:bg-black hover:text-white  p-5 shadow- text-center ">Engine Litre<hr></hr><tr className="text-2xl flex items-center justify-center font-semibold">125</tr></td>
                </tbody>
              </table>
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
            <button className="w-[100%] py-6 bg-yellow-950 text-white text-4xl mb-5 rounded-2xl hover:shadow-[0_0_20px_2px_rgba(0,0,0,0.2)]" onClick={bookingHandler}>
              BOOK
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CarDetailPage;
