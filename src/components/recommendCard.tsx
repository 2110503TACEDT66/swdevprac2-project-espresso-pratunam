import Image from "next/image";

interface Props {
    name: string;
    imgSrc: string;
    zeroToHundred: number;
    topSpeed: number;
    engineLitre: number;
  }

const RecommendCard = ({name,imgSrc, zeroToHundred,topSpeed, engineLitre}: Props) => {
  return (
    <div className="w-[100%] h-[100%] bg-white relative hover:shadow-[0_0_60px_10px_rgba(255,255,255,0.2)]">
      <Image
        src={imgSrc}
        layout="fill"
        objectFit="cover"
        alt="LandingPageImage"
        objectPosition="bottom"
      />
      <div className="absolute inset-0 z-100 p-5 flex flex-col items-start justify-end bg-black bg-opacity-20">
        <h2 className="text-3xl font-semibold text-white mb-3">{name}</h2>
        <div className="text-white text-sm flex flex-row justify-between w-full bg-white bg-opacity-10 px-3 py-2 rounded-lg">
          <div className="text-center w-[30%]">
            <h3 className="font-bold text-lg">{zeroToHundred} s</h3>
            <p className="text-s font-light">0-100</p>
          </div>
          <div className="w-0.5 bg-white h-full"></div>
          <div className="text-center w-[30%]">
            <h3 className="font-bold text-lg">
              {topSpeed} <span className="text-xs">mph</span>
            </h3>
            <p className="text-s font-light">Top speed</p>
          </div>

          <div className="w-0.5 bg-white h-full"></div>

          <div className="text-center w-[30%]">
            <h3 className="font-bold text-lg">{engineLitre}L</h3>
            <p className="text-s font-light" >Engine</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendCard;
