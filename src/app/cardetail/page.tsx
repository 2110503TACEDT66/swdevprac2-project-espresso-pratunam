import TopMenuBlack from "@/components/topMenuBlack";
import Image from "next/image";

const CarDetailPage = () => {
  return (
    <main className="relative overflow-hidden">
      <TopMenuBlack />
      <div className="w-screen h-[93vh] bg-white flex flox-rows">
        <div className=" w-[60%] h-full flex justify-center items-center relative">
          <Image
            layout="fill"
            src="/img/cityRoad.jpg"
            alt="city Road"
            objectFit="cover"
            className="absolute"
          ></Image>
          <div className="absolute inset-0 bg-black opacity-80"></div>
          <div className="w-[80%] h-[30vw] bg-white rounded-2xl abolute z-10 flex justify-center items-center shadow-[0_0_100px_50px_rgba(255,255,255,0.2)]">
            <div className="w-[100%] h-[100%] relative rounded-2xl">
              <Image
                src="/img/recommendMustang.jpg"
                layout="fill"
                objectFit="cover"
                alt="LandingPageImage"
                objectPosition="center"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
        <div className="w-[40%] h-full overflow-scroll px-10 pt-10 relative flex flex-col items-center">
          <div>
            <h1 className="text-4xl mb-5">Car Details</h1>
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              ullamcorper ligula ut mattis elementum. In porttitor, leo vel
              varius semper, urna nulla rutrum arcu, sit amet fringilla felis
              est eget erat.
            </p>
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              ullamcorper ligula ut mattis elementum. In porttitor, leo vel
              varius semper, urna nulla rutrum arcu, sit amet fringilla felis
              est eget erat.
            </p>
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              ullamcorper ligula ut mattis elementum. In porttitor, leo vel
              varius semper, urna nulla rutrum arcu, sit amet fringilla felis
              est eget erat.
            </p>
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              ullamcorper ligula ut mattis elementum. In porttitor, leo vel
              varius semper, urna nulla rutrum arcu, sit amet fringilla felis
              est eget erat.
            </p>
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              ullamcorper ligula ut mattis elementum. In porttitor, leo vel
              varius semper, urna nulla rutrum arcu, sit amet fringilla felis
              est eget erat.
            </p>
          </div>

          <div className="w-full">
            <h1 className="text-4xl">Booking this car</h1>
          </div>
          <div className="absolute bottom-0 w-[80%] flex flex-col items-center">
            <button className="w-[80%] py-6 bg-yellow-950 text-white text-4xl mb-5 rounded-2xl hover:shadow-[0_0_20px_2px_rgba(0,0,0,0.2)]">
              BOOK
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CarDetailPage;
