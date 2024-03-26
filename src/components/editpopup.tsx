'use client'
import React, { useState } from "react";
import { DateRange } from '@mui/x-date-pickers-pro/models';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import dayjs, { Dayjs } from 'dayjs';
import DateRangePickerComponent from "./dateRange";


// const EditFormPopup = ({ isOpen, onClose, bookingData }) => {
const EditFormPopup: React.FC<{ isOpen: boolean, onClose: () => void, bookingData: any }> = ({ isOpen, onClose, bookingData }) => {

  
    const [editedBooking, setEditedBooking] = useState(bookingData);

    const handleDateRangeChange = (newDateRange: DateRange<Dayjs>) => {
      setSelectedRange(newDateRange);
    };

    // const handleChange = (e:any) => {
    //   const { name, value } = e.target;
    //   setEditedBooking((prevBooking) => ({
    //     ...prevBooking,
    //     [name]: value,
    //   }));
    // };
  
    
  //   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //     saveBookingData();
  //     onClose();
  // };

  //waiting for api
  const saveBookingData = () => {
    // fetch(`http://localhost:8000/bookings/${bookingData.id}`, {
    //     method: 'PUT',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         startDate: selectedRange[0]?.toISOString(),
    //         endDate: selectedRange[1]?.toISOString()
    //     })
    // })
    // .then(response => {
    //     if (response.ok) {
    //         console.log('Booking data updated successfully');
    //     } else {
    //         console.error('Failed to update booking data');
    //     }
    // })
    // .catch(error => console.error('Error updating booking data:', error));

    //   console.log('Updated Booking Data:', {
    //       ...editedBooking,
    //       startDate: selectedRange[0]?.toISOString(),
    //       endDate: selectedRange[1]?.toISOString()
    //   });
  };

    const [selectedRange, setSelectedRange] = React.useState<DateRange<Dayjs>>([
      dayjs(),
      dayjs().add(1, "day"),
    ]);
    // const [selectedRange, setSelectedRange] = useState<DateRange<Dayjs>>([dayjs(), dayjs().add(1, "day")]);
  
  return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 ${isOpen ? "" : "hidden"}`}>
      <div className="bg-white p-8 rounded shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Edit Booking</h2>
        {/* <form onSubmit={handleSubmit}> */}
        <DateRangePickerComponent onDateRangeChange={handleDateRangeChange}></DateRangePickerComponent>
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