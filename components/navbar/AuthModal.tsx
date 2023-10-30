import Link from "next/link";
import React, { useState } from "react";
import {AiOutlineClose} from 'react-icons/ai' 
import {FcGoogle} from 'react-icons/fc'
import {GoMail} from 'react-icons/go' 

import { supabase } from "../utils";

interface AutoModalProps {
  setModalState : React.Dispatch<React.SetStateAction<boolean>> 
  modalMode : "LOGIN" | "REGISTER"
}

const googleSignIn = async() => {
  const {session, error} = supabase.auth.signInWithOAuth({provider:"google"})
}

export default function AuthModal ({setModalState, modalMode} : AutoModalProps) {
  const [mode, setMode] = useState<"LOGIN" | "REGISTER">(modalMode)
  
  const closeModal = () => {
    setModalState(false);
  };
  
  return(
    <>
      <div className="auth-modal fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-50 bg-white bg-opacity-90">
        <div className="bg-white opacity-100 w-1/2 h-full drop-shadow-2xl relative grid place-items-center p-24">
          <button onClick={closeModal} className="absolute right-6 top-6 scale-125">
            <AiOutlineClose/>
          </button>
          {mode === "LOGIN" ? (
            <div className="flex flex-col items-center justify-between w-full h-full">
              <h1 className="text-4xl"> Welcome Back! </h1>
              <div className="flex flex-col gap-8 font-sans items-center">
                <ul className="flex flex-col items-center gap-4">
                  <li className="relative w-96 h-12"> 
                    <Link href="/" className="w-full h-full border-[1px] border-black rounded-3xl grid place-items-center"> 
                      <FcGoogle className="absolute left-4 scale-150"/>
                      Sign In With Google
                    </Link> 
                  </li>
                  <li className="relative w-96 h-12"> 
                    <Link href="/" className="w-full h-full border-[1px] border-black rounded-3xl grid place-items-center"> 
                      <GoMail className="absolute left-4 scale-150"/>
                      Sign In With Email 
                    </Link> 
                  </li>
                </ul>
                <span className="flex gap-1 items-center text-sm"> Don't have an account?  
                  <button onClick={() => setMode("REGISTER")} className="text-green-700 font-semibold">
                    Sign Up 
                  </button>
                </span>
              </div>
              <p className="text-xs font-sans text-neutral-600 text-center"> Click "Sign Up" to agree to OpenJournal's Terms of Service and acknowledge that OpenJournal's Privacy Policy implies to you.</p>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-between w-full h-full">
              <h1 className="text-4xl"> Join OpenJournal.id </h1>
              <div className="flex flex-col gap-8 font-sans items-center">
                <ul className="flex flex-col items-center gap-4">
                  <li className="relative w-96 h-12"> 
                    <Link href="/" className="w-full h-full border-[1px] border-black rounded-3xl grid place-items-center"> 
                      <FcGoogle className="absolute left-4 scale-150"/>
                      Sign Up With Google
                    </Link> 
                  </li>
                  <li className="relative w-96 h-12"> 
                    <Link href="/" className="w-full h-full border-[1px] border-black rounded-3xl grid place-items-center"> 
                      <GoMail className="absolute left-4 scale-150"/>
                      Sign Up With Email 
                    </Link> 
                  </li>
                </ul>
                <span className="flex gap-1 items-center text-sm"> Already have an account?  
                  <button onClick={() => setMode("LOGIN")} className="text-green-700 font-semibold"> 
                    Sign In
                  </button>
                </span>
              </div>
              <p className="text-xs font-sans text-neutral-600 text-center"> Click "Sign Up" to agree to OpenJournal's Terms of Service and acknowledge that OpenJournal's Privacy Policy implies to you.</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
