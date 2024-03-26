import Image from "next/image";

interface Props {
  name: string;
  imgSrc: string;
  brand: string;
  model: string;
  year: number;
  color: string;
  type: string;
  price: number;
  registrationNumber: string,
  zeroToHundred: number;
  topSpeed: number;
  engineLitre: number;
}

const CarCard = ({
  name,
  imgSrc,
  zeroToHundred,
  topSpeed,
  engineLitre,
}: Props) => {
  return (
    <div className="w-[100%] h-[35vh] bg-white rounded-lg shadow-md hover:shadow-[0_0_60px_10px_rgba(0,0,0,0.1)]">
      <div className="relative w-full h-[70%] rounded-lg">
        <Image
          src={imgSrc}
          layout="fill"
          objectFit="cover"
          alt="LandingPageImage"
          objectPosition="center"
          className="rounded-t-lg"
        />
      </div>
      <div className="flex flex-col justify-center items-center h-[30%]">
        <h2 className="text-xl font-semibold text-black text-center mb-1">{name}</h2>
        <div className="text-black text-sm flex flex-row justify-between w-full">
          <div className="text-center w-[30%]">
            <h3 className="font-bold text-md">{zeroToHundred} s</h3>
            <p className="text-s font-light">0-100</p>
          </div>
          <div className="w-0.5 bg-white h-full"></div>
          <div className="text-center w-[30%]">
            <h3 className="font-bold text-md">
              {topSpeed} <span className="text-xs">mph</span>
            </h3>
            <p className="text-s font-light">Top speed</p>
          </div>

          <div className="w-0.5 bg-white h-full"></div>

          <div className="text-center w-[30%]">
            <h3 className="font-bold text-md">{engineLitre}L</h3>
            <p className="text-s font-light">Engine</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
