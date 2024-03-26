import CarCard from "@/components/carCard";
import RecommendCard from "@/components/recommendCard";
import TopMenuBlack from "@/components/topMenuBlack";
import getAllCars from "@/libs/getAllCars";
import Link from "next/link";
import { Car } from "@/interface/getAllCarsInterface";

const mockCars = [
  {
    name: "Honda Civic",
    imgSrc: "/img/recommendCivic.jpg",
    zeroToHundred: 8.5,
    topSpeed: 137,
    engineLitre: 1.5,
  },

  {
    name: "Tesla Model 3",
    imgSrc: "/img/recommendModel3.jpg",
    zeroToHundred: 3.1,
    topSpeed: 162,
    engineLitre: 0,
  },
  {
    name: "Ford Mustang GT",
    imgSrc: "/img/recommendMustang.jpg",
    zeroToHundred: 4.9,
    topSpeed: 180,
    engineLitre: 5.0,
  },
];

export const carData = [
    {
        name: "Honda Civic",
        brand: "Honda",
        model: "Civic",
        year: 2022,
        color: "Silver",
        type: "Sedan",
        registrationNumber: "ABC123",
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
        imgSrc: "/img/recommendMustang.jpg",
        zeroToHundred: 4.9,
        topSpeed: 180,
        engineLitre: 5.0,
      },
    {
        name: "Toyota Camry",
        brand: "Toyota",
        model: "Camry",
        year: 2022,
        color: "White",
        type: "Sedan",
        registrationNumber: "JKL012",
        imgSrc: "/img/toyota-camry.jpg",
        zeroToHundred: 8.0, // Approximate
        topSpeed: 135,
        engineLitre: 2.5,
      },
      {
        name: "Honda Accord",
        brand: "Honda",
        model: "Accord",
        year: 2021,
        color: "Silver",
        type: "Sedan",
        registrationNumber: "MNO345",
        imgSrc: "/img/honda-accord.jpg",
        zeroToHundred: 7.5, // Approximate
        topSpeed: 130,
        engineLitre: 1.5,
      },
      {
        name: "Nissan Altima",
        brand: "Nissan",
        model: "Altima",
        year: 2020,
        color: "Black",
        type: "Sedan",
        registrationNumber: "PQR678",
        imgSrc: "/img/nissan-altima.jpg",
        zeroToHundred: 7.8, // Approximate
        topSpeed: 128,
        engineLitre: 2.5,
      },
      {
        name: "Hyundai Sonata",
        brand: "Hyundai",
        model: "Sonata",
        year: 2021,
        color: "Red",
        type: "Sedan",
        registrationNumber: "STU901",
        imgSrc: "/img/hyundai-sonata.jpg",
        zeroToHundred: 8.2, // Approximate
        topSpeed: 130,
        engineLitre: 2.5,
      },
      {
        name: "Volkswagen Passat",
        brand: "Volkswagen",
        model: "Passat",
        year: 2019,
        color: "Blue",
        type: "Sedan",
        registrationNumber: "VWX234",
        imgSrc: "/img/volkswagen-passat.jpg",
        zeroToHundred: 8.5,  // Approximate
        topSpeed: 126,
        engineLitre: 2.0,
      },
]


const CarListPage = async () => {
const carFetched = await getAllCars()
console.log(carFetched)

const carList = carFetched['data'];

  return (
    <main className="relative bg-white pb-5">
      <TopMenuBlack></TopMenuBlack>
      <div className=" w-screen ">
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
                     <CarCard key={car.RegistrationNumber} name={car.Model} brand={car.Brand} model={car.Model} year={car.Year} color={car.Color} type={car.Type} registrationNumber= {car.RegistrationNumber} imgSrc={car.imgsrc} zeroToHundred={car.zerotohundred} topSpeed={car.topspeed} engineLitre={car.enginelitre} carId={car._id}></CarCard>
                )
            })
        }
        </div>
      </div>
    </main>
  );
};

export default CarListPage;
