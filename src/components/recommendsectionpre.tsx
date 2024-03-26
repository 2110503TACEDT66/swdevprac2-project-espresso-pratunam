
import RecommendCard from "./recommendCard";

const mockCars = [
    {
        name: "Honda Civic",
        imgSrc: "/img/recommendCivic.jpg",
        zeroToHundred: 8.5,
        topSpeed: 137,
        engineLitre: 1.5
    },

    {
        name: "Tesla Model 3",
      imgSrc: "/img/recommendModel3.jpg",
      zeroToHundred: 3.1,
      topSpeed: 162,
      engineLitre: 0
    },
    {
    name: "Ford Mustang GT",
      imgSrc: "/img/recommendMustang.jpg",
      zeroToHundred: 4.9,
      topSpeed: 180,
      engineLitre: 5.0
    }
  ];

const RecommendSectionpre = () => {
  return (
    <div className="h-screen w-screen bg-white pt-[10%]">
      <div className="w-full h-[15%] flex justify-center">
        <h1 className="text-yellow-500 text-6xl font-semibold">User&apos;s choice 2023</h1>
      </div>
      <div className="w-full h-[75%] grid grid-flow-col grid-col-3 gap-4 px-10">
        {
            mockCars.map((car) => {
                return(
                    <RecommendCard key={car.name} name={car.name} imgSrc={car.imgSrc} zeroToHundred={car.zeroToHundred} topSpeed={car.topSpeed} engineLitre={car.engineLitre}></RecommendCard>
                )
            })
        }
      </div>
    </div>
  );
};

export default RecommendSectionpre;
