'use client'
import React,{ useState } from "react";
import TopMenuBlack from "@/components/topMenuBlack";
import Image from "next/image";
import EditFormPopup from "@/components/editpopup";
import DeletePopup from "@/components/deletepopup";

const adminview = () => {

  const [showEditPopup, setShowEditPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const mockBookings = [
    {
      id: 1,
      carModel: "Toyota Camry",
      rentalDuration: "3 days",
      price: "5000",
      imgSrc: "/img/toyota-camry.jpg",
    },
    {
      id: 2,
      carModel: "Honda Civic",
      rentalDuration: "2 days",
      price: "5000",
      imgSrc: "/img/recommendCivic.jpg",
    },
  ];

const handleEditBooking = (bookingId:any) => {
  setSelectedBooking(null);
  setShowEditPopup(true);
};

const handleDeleteBooking = (bookingId:any) => {
  setSelectedBooking(null);
  setShowDeletePopup(true);
};

const handleClosePopup = () => {
  setShowEditPopup(false);
  setShowDeletePopup(false);
  setSelectedBooking(null);
};



  return (
    <main className="relative">
      <TopMenuBlack />
      <div className="w-screen mx-auto py-[20vh] bg-black">
        <h1 className="text-white text-4xl font-semibold px-10 mt-5 mb-5 text-center">
          All Car Booking List
        </h1>
        <div className="grid grid-cols-3 gap-8 px-20 mb-10">
          {mockBookings.map((booking) => (
            <div key={booking.id} className="border p-4 rounded-md bg-white">
              <Image
                src={booking.imgSrc}
                alt={booking.carModel}
                width={300}
                height={200}
                objectFit="cover"
                objectPosition="center"
                className="w-full h-40 object-cover mb-4"
              />
              <h2 className="text-xl font-semibold mb-2 text-gray-700">{booking.carModel}</h2>
              <p className="text-gray-600 mb-2">
                Rental Duration: {booking.rentalDuration}
              </p>
              <p className="text-gray-600 mb-2">Price: THB {booking.price}</p>
              <div className="flex ">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 gap-2 mr-2"
                  onClick={() => handleEditBooking(booking.id)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  onClick={() => handleDeleteBooking(booking.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <EditFormPopup isOpen={showEditPopup} onClose={handleClosePopup} bookingData={selectedBooking} />
      {/* <DeletePopup onDelete={handleClosePopup} onClose={handleClosePopup} booking={selectedBooking} /> */}
      <DeletePopup
        isOpen={showDeletePopup}
        onClose={handleClosePopup}
        onDelete={handleClosePopup}
        booking={selectedBooking}
      />
    </main>
  );
};

export default adminview;
