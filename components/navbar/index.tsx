import Link from "next/link"

export default function Navbar () {
  return(
    <nav className="sticky top-0 w-screen h-20 bg-yellow-400 font-serif px-24 flex justify-between items-center border-b-black border-b-[1px]">
      <span className="text-3xl font-medium">
        OpenJournal
      </span>
      <ul className="flex items-center gap-6 font-sans font-light text-sm">
        <li>
          <Link href="/"> Our Journals </Link>
        </li>
        <li>
          <Link href="/"> Write </Link>
        </li>
        <li>
          <Link href="/"> Sign In </Link>
        </li>
        <li className="text-white bg-black rounded-3xl py-2 px-4 font-normal select-none">
          <Link href="/"> Get Started </Link>
        </li>
      </ul>
    </nav>
  )
}
