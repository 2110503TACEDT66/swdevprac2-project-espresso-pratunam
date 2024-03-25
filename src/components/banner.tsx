import Image from "next/image"

const Banner = () => {
    return(
        <div className="h-screen w-screen">
        <Image
          src="/img/landing.jpg"
          layout="fill"
          objectFit="cover"
          alt="LandingPageImage"
        />
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="absolute w-full h-full flex flex-col items-center justify-center text-white">
          <h1 className="font-semibold text-7xl mb-3">Espresso Pratunam</h1>
          <p className="font-light text-5xl mb-10">Car Rental</p>
          <button className="bg-white text-black font-bold py-3 px-6 text-xl rounded-full hover:shadow-[0_0_60px_10px_rgba(255,255,255,0.2)]">
            Book now
          </button>
        </div>
      </div>
    )
}

export default Banner