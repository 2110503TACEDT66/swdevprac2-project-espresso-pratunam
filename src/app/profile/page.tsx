import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import Link from "next/link"


const profilePage = async () => {
    const session = await getServerSession(authOptions)
    return(
        <main className="relative">
            <div className="h-screen w-screen fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded-lg shadow-md w-[30%] h-[70%]">
              {session ? (
                <>
                <p className="text-stone-800 m-1">
                    <p>{session?.user?.name}</p>
                  </p>
                  <p className="text-stone-800 m-1">
                    <a href="#" className="hover:underline hover:text-slate-400">View your booking</a>
                  </p>
                  <p className="text-stone-800 m-1">
                    <a href="#" className="hover:underline hover:text-slate-400">Profile Setting</a>
                  </p>
                  <Link href="/api/auth/signout"> Logout</Link>
                </>
              ) : (
                <Link href="/api/auth/signin">login</Link>
              )}
              </div>
          </div>
    </main>
    )
}

export default profilePage