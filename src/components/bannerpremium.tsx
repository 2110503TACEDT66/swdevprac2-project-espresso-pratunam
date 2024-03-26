import Image from "next/image"
import Link from "next/link"

const BannerPremium = () => {
    return(
        <div className="h-screen w-screen relative">
        <Image
          src="/img/landingpre.jpg"
          layout="fill"
          objectFit="cover"
          alt="LandingPageImage"
        />
        <div className="absolute inset-0 bg-black opacity-70 backdrop-brightness-200"></div>
        <div className="absolute w-full h-full flex flex-col items-center justify-center text-yellow-500">
          <h1 className="font-semibold text-8xl mb-3">Espresso Pratunam</h1>
          <p className="font-light text-6xl mb-10">Car Rental</p>
          <Link href="/carlistpremium">
          <button className="bg-yellow-500 text-black font-bold py-3 px-6 text-xl rounded-full hover:shadow-[0_0_60px_10px_rgba(255,255,255,0.2)]">
            Book now
          </button>
          </Link>
        </div>
      </div>
    )
}

export default BannerPremium