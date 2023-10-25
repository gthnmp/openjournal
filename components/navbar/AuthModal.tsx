import Link from "next/link";
import React from "react";
import {AiOutlineClose} from 'react-icons/ai' 
import {FcGoogle} from 'react-icons/fc'
import {GoMail} from 'react-icons/go' 

interface AutoModalProps {
  setModalState : React.Dispatch<React.SetStateAction<boolean>> 
}

export default function AuthModal ({setModalState} : AutoModalProps) {
  
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
          <div className="flex flex-col items-center justify-between w-full h-full">
            <h1 className="text-4xl"> Join OpenJournal.id </h1>
            <div className="flex flex-col gap-8 font-sans items-center">
              <ul className="flex flex-col items-center gap-4">
                <li className="relative w-96 h-12 border-[1px] border-black rounded-3xl grid place-items-center"> 
                  <FcGoogle className="absolute left-4 scale-150"/>
                  <Link href="/"> Sign Up With Google </Link> 
                </li>
                <li className="relative w-96 h-12 border-[1px] border-black rounded-3xl grid place-items-center"> 
                  <GoMail className="absolute left-4 scale-150"/>
                  <Link href="/"> Sign Up With Email </Link> 
                </li>
              </ul>
              <span> Already have an account? <button className="text-green-700 font-semibold"> Sign In </button></span>
            </div>
            <p className="text-xs font-sans text-neutral-600 text-center"> Click "Sign Up" to agree to OpenJournal's Terms of Service and acknowledge that OpenJournal's Privacy Policy implies to you.</p>
          </div>
        </div>
      </div>
    </>
  )
}
