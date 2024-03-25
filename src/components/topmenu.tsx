import Image from "next/image";

const TopMenu = () => {
  return (
    <div className="w-screen h-20 backdrop-blur-md backdrop-brightness-[70%] fixed top-0 z-[1] flex justify-between">
      <div className="w-[20%] flex items-center text-white font-bold justify-start px-10">Menu</div>
      <div className="h-full w-[20%] flex items-center justify-center">
      <Image
            src="/img/logo.png"
            width={50}
            height={50}
            objectFit="cover"
            alt="logo"
          />
      </div>
      <div className="flex items-center w-[20%] justify-center">
        <button className="px-3 py-2.5 text-white font-bold rounded-lg hover:bg-white hover:bg-opacity-10 ">
          Premium
        </button>
        <a href="#" className="ml-5 hover:bg-white hover:bg-opacity-10 px-2 py-2 rounded-lg">
          <Image
            src="/img/user.png"
            width={30}
            height={30}
            objectFit="cover"
            alt="userImage"
          />
        </a>
      </div>
    </div>
  );
};

export default TopMenu;
