import CarCard from "@/components/carCard";
import RecommendCard from "@/components/recommendCard";
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
    ]

  return (
    <main className="relative">
      <TopMenuBlack></TopMenuBlack>
      <div className=" w-screen mx-auto my-[20vh]">
        <h1 className="text-black text-4xl font-semibold px-10 mt-5 mb-5 text-center">Car Booking List</h1>
      <div className="grid grid-cols-2 gap-4">
        {mockBookings.map((booking) => (
          <div key={booking.id} className="border p-4">
            <Image src={booking.imgSrc} alt={booking.carModel} className="w-full h-40 object-cover mb-4" width={200} height={200}/>
            <h2 className="text-xl font-semibold mb-2">{booking.carModel}</h2>
            <p className="text-gray-700 mb-2">Rental Duration: {booking.rentalDuration}</p>
            <p className="text-gray-700 mb-2">Price: {booking.price}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Book Now
            </button>
          </div>
        ))}
      </div>
      </div>
    </main>
  );
};

export default CarListPage;
