import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Link from "next/link";
import TopMenu from "@/components/topmenu";
import Image from "next/image";

const profilePage = async () => {
  const session = await getServerSession(authOptions);
  return (
    <main className="relative h-screen w-screen flex flex-col justify-center bg-slate-900">
      <TopMenu></TopMenu>
      {session ? (
        <div className="h-[80%] w-screen flex flex-col items-center justify-center">
          <h1 className="text-white text-5xl mb-10">
            Hi, {session?.user?.name}!
          </h1>
          <div className="w-[45%] h-[65%] bg-white flex flex-col rounded-2xl">
            <div className="w-full h-[20%] bg-black rounded-t-2xl flex justify-center items-center">
              <h1 className="text-4xl text-white">Espresso License</h1>
            </div>
            <div className="w-full h-[80%] p-5 flex flex-row justify-between">
              <div className="w-[35%] h-full object-cover object-center bg-black">
                <Image
                  src="/img/portrait.jpg"
                  alt="portraitPic"
                  height={200}
                  width={200}
                />
              </div>

              <div className="w-[60%] h-full bg-white flex flex-col justify-around">
                <h1 className="text-xl mb-1">Name:</h1>
                <h2 className="text-2xl ml-3 mb-3">{session?.user?.name}</h2>
                <h1 className="text-xl mb-1">Email:</h1>
                <h2 className="text-2xl ml-3 mb-3">{session?.user?.email}</h2>
                <h1 className="text-xl mb-1">Role:</h1>
                <h2 className="text-2xl ml-3 mb-3">Janitor</h2>
                <button className="h-10 text-end">
                  <Link
                    href="/api/auth/signout"
                    className="px-2 py-2 bg-red-600 rounded-lg text-white"
                  >
                    Sign out
                  </Link>
                </button>
              </div>
            </div>
          </div>
          {/* <p className="text-stone-800 m-1">
            <a href="#" className="hover:underline hover:text-slate-400">
              View your booking
            </a>
          </p>
            <a href="#" className="hover:underline hover:text-slate-400 text-stone-800 m-1">
              Profile Setting
            </a>
          <Link href="/api/auth/signout"> Logout</Link> */}
        </div>
      ) : (
        <Link href="/api/auth/signin">login</Link>
      )}
    </main>
  );
};

export default profilePage;
