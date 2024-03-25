import CarCard from "@/components/carCard";
import RecommendCard from "@/components/recommendCard";
import TopMenuBlack from "@/components/topMenuBlack";

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

const carData = [
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
    {
        name: "Toyota Camry",
        imgSrc: "/img/toyota-camry.jpg",
        zeroToHundred: 8.0, // Approximate
        topSpeed: 135,
        engineLitre: 2.5,
      },
      {
        name: "Honda Accord",
        imgSrc: "/img/honda-accord.jpg",
        zeroToHundred: 7.5, // Approximate
        topSpeed: 130,
        engineLitre: 1.5,
      },
      {
        name: "Nissan Altima",
        imgSrc: "/img/nissan-altima.jpg",
        zeroToHundred: 7.8, // Approximate
        topSpeed: 128,
        engineLitre: 2.5,
      },
      {
        name: "Hyundai Sonata",
        imgSrc: "/img/hyundai-sonata.jpg",
        zeroToHundred: 8.2, // Approximate
        topSpeed: 130,
        engineLitre: 2.5,
      },
      {
        name: "Volkswagen Passat",
        imgSrc: "/img/volkswagen-passat.jpg",
        zeroToHundred: 8.5,  // Approximate
        topSpeed: 126,
        engineLitre: 2.0,
      },
]

const CarListPage = () => {
  return (
    <main className="relative">
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
            carData.map((car) => {
                return(
                    <CarCard key={car.name} name={car.name} imgSrc={car.imgSrc} zeroToHundred={car.zeroToHundred} topSpeed={car.topSpeed} engineLitre={car.engineLitre}></CarCard>
                )
            })
        }
        </div>
      </div>
    </main>
  );
};

export default CarListPage;
