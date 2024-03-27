"use client";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/auth";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import TopMenuBlack from "@/components/topMenuBlack";
import Image from "next/image";
import EditFormPopup from "@/components/editpopup";
import DeletePopup from "@/components/deletepopup";
import { Booking, Car } from "@/interface/interface";
import getAllCars from "@/libs/getAllCars";
import getBookings from "@/libs/getBookings";
import { getSession, useSession } from "next-auth/react";

const Adminview = () => {
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState("");
  const [cars, setCars] = useState<Car[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [bookings, setBookings] = useState(null);

  const router = useRouter();
  const { data: session, status } = useSession();

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
    const fetchSession = async () => {
      try {
        // //console.log(session);
        //console.log(`Hey : ${session?.user?.user.role}`)
        if (session?.user?.user.role !== 'admin') {
          router.push("/");
        }
      } catch (error) {
        console.error("Error fetching session:", error);

      }
    };
    const fetchBookings = async () => {
      try {
        setIsLoading(true);
        const bookingFetch = await getBookings();
        // //console.log(bookingFetch);
        const bookings = bookingFetch["data"];
        //console.log(bookings);
        setBookings(bookings);
        setIsLoading(false);
      } catch (error) {
        //console.log(`Error from getBookings: ${error}`);
      }
    };
    const fetchCars = async () => {
      try {
        setIsLoading(true);
        const carsFetch = await getAllCars();
        // //console.log(carsFetch);
        const cars = carsFetch["data"];
        //console.log(cars);
        setCars(cars);
        setIsLoading(false);
      } catch (error) {
        //console.log(`Error from getBookings: ${error}`);
      }
    };

    fetchSession();
    fetchBookings();
    fetchCars();
  }, []);

  const handleEditBooking = (bookingId: any) => {
    setSelectedBooking(bookingId);
    setShowEditPopup(true);
  };

  const handleDeleteBooking = (bookingId: any) => {
    setSelectedBooking(bookingId);
    setShowDeletePopup(true);
  };

  const handleClosePopup = () => {
    setShowEditPopup(false);
    setShowDeletePopup(false);
    setSelectedBooking("");
  };



  if(session?.user?.user.role != 'admin'){
    router.push("/")
  }

  if (!cars) {
    return <p className="text-white">Cannot Fetch Cars</p>;
  }

  if(!bookings){
    return <div className="h-screen w-screen flex justify-center items-center"><p className="text-white">You do not have any Booking yet.</p></div>
  }

  if (isLoading) {
    return <p className="text-white">Loading Data</p>;
  }

  return (
    <main className="relative">
      <TopMenuBlack />
      <div className="w-screen mx-auto py-[20vh] bg-black">
        <h1 className="text-white text-4xl font-semibold px-10 mt-5 mb-5 text-center">
          All Car Booking List
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
      </div>
    </main>
  );
};

export default Adminview;
