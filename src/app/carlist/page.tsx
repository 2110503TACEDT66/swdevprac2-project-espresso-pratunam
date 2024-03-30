import CarCard from "@/components/carCard";
import RecommendCard from "@/components/recommendCard";
import TopMenuBlack from "@/components/topMenuBlack";
import getAllCars from "@/libs/getAllCars";
import Link from "next/link";
import { Car } from "@/interface/interface";

const mockCars = [
  {
    name: "Honda Civic",
        brand: "Honda",
        model: "Civic",
        year: 2022,
        color: "Silver",
        type: "Sedan",
        registrationNumber: "ABC123",
        price: 5000,
        imgSrc: "/img/recommendCivic.jpg",
        zeroToHundred: 8.5,
        topSpeed: 137,
        engineLitre: 1.5,
  },

  {
    name: "Tesla Model 3",
        brand: "Tesla",
        model: "Model 3",
        year: 2021,
        color: "Red",
        type: "Other",
        registrationNumber: "DEF456",
        price:8000,
        imgSrc: "/img/recommendModel3.jpg",
        zeroToHundred: 3.1,
        topSpeed: 162,
        engineLitre: 0,
  },
  {
    name: "Ford Mustang GT",
        brand: "Ford",
        model: "Mustang GT",
        year: 2019,
        color: "Blue",
        type: "Other",
        registrationNumber: "GHI789",
        price:22000,
        imgSrc: "/img/recommendMustang.jpg",
        zeroToHundred: 4.9,
        topSpeed: 180,
        engineLitre: 5.0,
  },
];


const CarListPage = async () => {
const carFetched = await getAllCars()

const carList = carFetched['data'];

  return (
    <main className="relative bg-white pb-5">
      <TopMenuBlack></TopMenuBlack>
      <div className=" w-screen mx-auto my-20">
        <div className="w-full h-[60vh] grid grid-flow-col grid-col-3 gap-0">
          {mockCars.map((car) => {
            return (
              <RecommendCard
                key={car.name}
                name={car.name}
                imgSrc={car.imgSrc}
                zeroToHundred={car.zeroToHundred}
                topSpeed={car.topSpeed}
                engineLitre={car.engineLitre}

              ></RecommendCard>


            );
          })}
        </div>
        <h1 className="text-black text-4xl font-semibold px-10 mt-5 mb-5">Available Car</h1>
        <div className="w-full grid grid-cols-4 gap-8 px-20 mb-10">
        {
            carList.map((car:Car) => {
                return(
                     <CarCard key={car.RegistrationNumber} name={car.Model} brand={car.Brand} model={car.Model} year={car.Year} color={car.Color} type={car.Type} registrationNumber= {car.RegistrationNumber} imgSrc={car.imgsrc} zeroToHundred={car.zerotohundred} topSpeed={car.topspeed} engineLitre={car.enginelitre} carId={car._id} price={car.priceperday}></CarCard>
                )
            })
        }
        </div>
      </div>
    </main>
  );
};

export default CarListPage;
