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
          <div>
            <h1 className="text-4xl mb-5">Ford Mustang GT</h1>
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              ullamcorper ligula ut mattis elementum. In porttitor, leo vel
              varius semper, urna nulla rutrum arcu, sit amet fringilla felis
              est eget erat.
            </p>
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              ullamcorper ligula ut mattis elementum. In porttitor, leo vel
              varius semper, urna nulla rutrum arcu, sit amet fringilla felis
              est eget erat.
            </p>
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              ullamcorper ligula ut mattis elementum. In porttitor, leo vel
              varius semper, urna nulla rutrum arcu, sit amet fringilla felis
              est eget erat.
            </p>
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              ullamcorper ligula ut mattis elementum. In porttitor, leo vel
              varius semper, urna nulla rutrum arcu, sit amet fringilla felis
              est eget erat.
            </p>
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              ullamcorper ligula ut mattis elementum. In porttitor, leo vel
              varius semper, urna nulla rutrum arcu, sit amet fringilla felis
              est eget erat.
            </p>
          </div>

          <div className="w-full">
            <h1 className="text-4xl">Book this car</h1>
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
