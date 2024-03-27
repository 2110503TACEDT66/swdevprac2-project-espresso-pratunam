'use client'
import React, { useState } from "react";
import { DateRange } from '@mui/x-date-pickers-pro/models';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import dayjs, { Dayjs } from 'dayjs';
import DateRangePickerComponent from "./dateRange";
import editBooking from "@/libs/editBooking";


// const EditFormPopup = ({ isOpen, onClose, bookingData }) => {
const EditFormPopup: React.FC<{ isOpen: boolean, onClose: () => void, bookingId: string }> = ({ isOpen, onClose, bookingId }) => {
  const [selectedRange, setSelectedRange] = React.useState<DateRange<Dayjs>>([
    dayjs(),
    dayjs().add(1, "day"),
  ]);

    const handleEdit = async () => {
      const editBookingFetch = await editBooking(bookingId,selectedRange[0]!.toDate(),selectedRange[1]!.toDate());
    }

  return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 ${isOpen ? "" : "hidden"}`}>
      <div className="bg-white p-8 rounded shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Edit Booking</h2>
        {/* <form onSubmit={handleSubmit}> */}
        <DateRangePickerComponent onDateRangeChange={(newValue: React.SetStateAction<DateRange<dayjs.Dayjs>>) => {setSelectedRange(newValue)}}></DateRangePickerComponent>
        <form className="mt-4">
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-red-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-red-600"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
              onClick={handleEdit}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditFormPopup;