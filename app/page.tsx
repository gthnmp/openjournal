import Link from "next/link";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar/>
      <main className="w-screen min-h-screen pt-20">
        <header className="w-full h-[30rem] bg-yellow-400 border-b-[1px] border-black">
          <div className="w-1/2 h-full grid place-items-center px-24">
            <div className="flex flex-col gap-6 font-sans text-xl">
              <h1 className="text-6xl font-serif font-medium"> Discover More. </h1>
              <p className=""> Discover articles, blogs, expertise from writers from any topics. </p>
              <Link className="py-2 px-6 rounded-3xl bg-black text-white w-max" href="/"> Start Reading </Link>
            </div>
          </div>
        </header>
      </main>
    </>
  )
}
