import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Link from "next/link";
import TopMenu from "@/components/topmenu";
import Image from "next/image";

const profilePage = async () => {
  const session = await getServerSession(authOptions);
  return (
    <main className="relative h-screen w-screen flex flex-col justify-center bg-[#181818] items-center">
      <TopMenu></TopMenu>
      {session ? (
        <div className="h-[80%] w-screen flex flex-col items-center justify-center">
          <h1 className="text-white text-5xl mb-5">
            Hi, {session?.user?.user.name}
          </h1>
          <h1 className="text-white text-xl mb-10">
            This is your expresso pratunam car renting license
          </h1>
          <div className="w-[45%] h-[55%] bg-white flex flex-col rounded-2xl shadow-[0_0_200px_50px_rgba(255,255,255,0.2)] ">
            <div className="w-full h-[20%] bg-black rounded-t-2xl flex justify-center items-center">
              <h1 className="text-4xl text-white">Espresso License</h1>
            </div>
            <div className="w-full h-[80%] p-5 flex flex-row justify-between">
              <div className="w-[35%] h-full bg-black relative border-2	border-black">
                <Image
                  src="/img/portrait.jpg"
                  layout="fill"
                  alt="portraitPic"
                  objectFit="cover"
                />
              </div>

              <div className="w-[60%] h-full bg-white flex flex-col justify-around">
                <h1 className="text-xl mb-1">Name:</h1>
                <h2 className="text-2xl ml-3 mb-3 truncate">{session?.user?.user.name}</h2>
                <h1 className="text-xl mb-1 ">Email:</h1>
                <h2 className="text-2xl ml-3 mb-3 truncate">{session?.user?.user.email}</h2>
                <h1 className="text-xl mb-1">Role:</h1>
                <h2 className="text-2xl ml-3 mb-3">{session?.user?.user.role}</h2>
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
        </div>
      ) : (
        <div className="text-slate-200 h-screen w-screen flex items-center justify-center bg-black">
           <div className=" h-[50%] w-[30%] bg-neutral-950 flex flex-col items-center justify-center px-20 pb-10 shadow-[0_0_200px_20px_rgba(0,0,255,0.15)] rounded-2xl" >
          <h1 className="text-white text-3xl mt-7 ">You haven't login yet</h1>
          <Link href="/api/auth/signin" className=" mt-6 text-white text-lg flex items-center justify-center py-2 px-4 border border-transparent rounded-lg font-medium  shadow-[0_0_11px_1px_rgba(255,255,255,0.15)]  bg-black hover:bg-indigo-700  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-[50%]  ">login here</Link>
          <div className="mt-8 text-sm text-white">Haven't got account yet? sign up <Link href="/signup" className="text-blue-500 underline underline-offset-2 ml-1 hover:text-blue-300 hover:underline"> here </Link></div>  
          </div>
        </div>
       
        
      )}
    </main>
  );
};

export default profilePage;
