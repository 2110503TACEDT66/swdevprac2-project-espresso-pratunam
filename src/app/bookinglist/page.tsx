"use client";
import React, { useEffect, useState } from "react";
import TopMenuBlack from "@/components/topMenuBlack";
import Image from "next/image";
import EditFormPopup from "@/components/editpopup";
import DeletePopup from "@/components/deletepopup";
import getBookings from "@/libs/getBookings";
import { Booking, Car } from "@/interface/interface";
import getAllCars from "@/libs/getAllCars";
import deleteBooking from "@/libs/deleteBooking";
import {useRouter} from "next/navigation";

const BookingListPage = () => {
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [bookings, setBookings] = useState(null);
  const [cars, setCars] = useState<Car[]>();
  const router = useRouter();
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const bookingFetch = await getBookings();
        // console.log(bookingFetch);
        const bookings = bookingFetch["data"];
        console.log(bookings);
        setBookings(bookings);
        setIsLoading(false);
      } catch (error) {
        console.log(`Error from getBookings: ${error}`);
      }
    };
    const fetchCars = async () => {
      try {
        setIsLoading(true);
        const carsFetch = await getAllCars();
        // console.log(carsFetch);
        const cars = carsFetch["data"];
        console.log(cars);
        setCars(cars);
        setIsLoading(false);
      } catch (error) {
        console.log(`Error from getBookings: ${error}`);
      }
    };

    fetchData();
    fetchCars();
  }, []);

  if (!bookings) {
    return <p className="text-white">Cannot Fetch Bookings</p>;
  }

  if (!cars) {
    return <p className="text-white">Cannot Fetch Cars</p>;
  }

  if (isLoading) {
    return <p className="text-white">Loading Data</p>;
  }

  const handleEditBooking = (bookingId: any) => {
    setSelectedBooking(bookingId);
    setShowEditPopup(true);
  };

  const handleDeleteBooking = (bookingId: string) => {
    setSelectedBooking(bookingId);
    setShowDeletePopup(true);
  };

  const handleClosePopup = () => {
    setShowEditPopup(false);
    setShowDeletePopup(false);
    setSelectedBooking("");
    window.location.reload();
  };

  return (
    <main className="relative ">
      <TopMenuBlack />
      <div className="w-screen mx-auto py-[20vh] h-screen">
        <h1 className="text-white text-4xl font-semibold px-10 mt-5 mb-5 text-center">
          Your Car Booking List
        </h1>
        <div className="grid grid-cols-3 gap-8 px-20 mb-10">
          {(bookings as unknown as Booking[]).map((booking: Booking) => (
            <div
              key={booking.id}
              className="border p-4 rounded-md bg-slate-100 shadow-md"
            >
              {cars.find((car: Car) => car._id === booking.CarID) ? (
                <>
                  <Image
                    src={
                      cars.find((car: Car) => car._id === booking.CarID)!.imgsrc
                    }
                    alt={booking.CarID}
                    width={300}
                    height={200}
                    objectFit="cover"
                    objectPosition="center"
                    className="w-full h-[15rem] object-cover mb-4"
                  />
                  <h2 className="text-xl font-semibold mb-2 text-gray-700">
                    {cars.find((car: Car) => car._id === booking.CarID)!.Model}
                  </h2>
                  <p className="text-gray-600 mb-2">
                    {booking.StartDate.toString()!}
                  </p>
                  <p className="text-gray-600 mb-2">
                    Price: THB{" "}
                    {
                      cars.find((car: Car) => car._id === booking.CarID)!
                        .priceperday
                    }
                  </p>
                </>
              ) : (
                <p>Car data not found</p>
              )}

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
      <EditFormPopup
        isOpen={showEditPopup}
        onClose={handleClosePopup}
        bookingId={selectedBooking}
      />
      <DeletePopup
        isOpen={showDeletePopup}
        onClose={handleClosePopup}
        bookingId={selectedBooking}
      />
    </main>
  );
};

export default BookingListPage;
