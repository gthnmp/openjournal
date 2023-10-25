"use client"
import { SupabaseClient, createClient } from "@supabase/supabase-js";
import Link from "next/link";
import { useEffect, useState } from "react";
import AuthModal from "./AuthModal";

const supabase: SupabaseClient = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

export default function Navbar() {
  const [showModal, setModalState] = useState(false);
  const [modalMode, setModalMode] = useState<"LOGIN" | "REGISTER">("LOGIN")

  const openLoginModal = () => {
    setModalMode("LOGIN");
    setModalState(true);
  };

  const openRegisterModal = () => {
    setModalMode("REGISTER");
    setModalState(true);
  };

  return (
    <>
      <nav className="fixed top-0 w-screen h-20 bg-yellow-400 font-serif px-24 flex justify-between items-center border-b-black border-b-[1px] z-20">
        <span className="text-3xl font-medium">OpenJournal</span>
        <ul className="flex items-center gap-6 font-sans font-light text-sm">
          <li>
            <Link href="/">Our Journals</Link>
          </li>
          <li>
            <Link href="/">Write</Link>
          </li>
          <li>
            <button onClick={openLoginModal}>Sign In</button>
          </li>
          <li className="text-white bg-black rounded-3xl py-2 px-4 font-normal select-none">
            <button onClick={openRegisterModal}>Get Started</button>
          </li>
        </ul>
      </nav>
      {showModal && (
        <AuthModal setModalState={setModalState} modalMode={modalMode} />
      )}
    </>
  );
}
