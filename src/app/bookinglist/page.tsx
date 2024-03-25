import React from "react";
import TopMenuBlack from "@/components/topMenuBlack";
import Image from "next/image";

const CarListPage = () => {
  const mockBookings = [
    {
      id: 1,
      carModel: "Toyota Camry",
      rentalDuration: "3 days",
      price: "$150",
      imgSrc: "/img/toyota-camry.jpg",
    },
    {
      id: 2,
      carModel: "Honda Civic",
      rentalDuration: "2 days",
      price: "$120",
      imgSrc: "/img/recommendCivic.jpg",
    },
  ];

//   const handleEditBooking = (bookingId) => {
//     console.log("Editing booking with ID:", bookingId);
//   };

//   const handleCancelBooking = (bookingId) => {
//     console.log("Canceling booking with ID:", bookingId);
//   };

  return (
    <main className="relative">
      <TopMenuBlack />
      <div className="w-screen mx-auto my-[20vh]">
        <h1 className="text-black text-4xl font-semibold px-10 mt-5 mb-5 text-center">
          Your Car Booking List
        </h1>
        <div className="grid grid-cols-3 gap-8 px-20 mb-10">
          {mockBookings.map((booking) => (
            <div key={booking.id} className="border p-4 rounded-md">
              <Image
                src={booking.imgSrc}
                alt={booking.carModel}
                // layout="fill"
                width={300}
                height={200}
                objectFit="cover"
                objectPosition="center"
                className="w-full h-40 object-cover mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{booking.carModel}</h2>
              <p className="text-gray-700 mb-2">
                Rental Duration: {booking.rentalDuration}
              </p>
              <p className="text-gray-700 mb-2">Price: {booking.price}</p>
              <div className="flex ">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 gap-2 mr-2"
                //   onClick={() => handleEditBooking(booking.id)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                //   onClick={() => handleCancelBooking(booking.id)}
                >
                  Cancel
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default CarListPage;
