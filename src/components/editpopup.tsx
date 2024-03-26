'use client'
import React, { useState } from "react";

// const EditFormPopup = ({ isOpen, onClose, bookingData }) => {
const EditFormPopup: React.FC<{ isOpen: boolean, onClose: () => void, bookingData: any }> = ({ isOpen, onClose, bookingData }) => {

    const [editedBooking, setEditedBooking] = useState(bookingData);

    // const handleChange = (e:any) => {
    //   const { name, value } = e.target;
    //   setEditedBooking((prevBooking) => ({
    //     ...prevBooking,
    //     [name]: value,
    //   }));
    // };
  
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   onSave(editedBooking);
    //   onClose();
    // };
  
  return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 ${isOpen ? "" : "hidden"}`}>
      <div className="bg-white p-8 rounded shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Edit Booking</h2>
        {/* <form onSubmit={handleSubmit}> */}
        <form>
          <div className="mb-4">
            <label htmlFor="carModel" className="block font-semibold mb-2">
              Car Model:
            </label>
            <input
              type="text"
              id="carModel"
              name="carModel"
            //   value={editedBooking.carModel}
            value={editedBooking?.carModel || ""}
            //   onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="rentalDuration" className="block font-semibold mb-2">
              Rental Duration:
            </label>
            <input
              type="text"
              id="rentalDuration"
              name="rentalDuration"
              value={editedBooking?.rentalDuration || ""}

            //   onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block font-semibold mb-2">
              Price:
            </label>
            <input
              type="text"
              id="price"
              name="price"
              value={editedBooking?.price || ""}
            //   onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
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
        {/* <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2" onClick={onClose}>Cancel</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Save</button> */}
      </div>
    </div>
  );
};

export default EditFormPopup;
