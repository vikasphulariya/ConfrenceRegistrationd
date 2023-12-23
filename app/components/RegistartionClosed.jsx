import React from 'react';
import closed from "./closed.jpg"
import Image from 'next/image';
const RegistrationClosed = () => {
    return (
      <div className=" flex-col min-h-screen bg-white flex justify-center items-center">
      <h1 className=' text-5xl font-semibold'>Registration</h1>
      <Image src={closed} className=" max-w-xs p-10" alt="image"/>
    </div>
    );
  };
  
  export default RegistrationClosed;
  