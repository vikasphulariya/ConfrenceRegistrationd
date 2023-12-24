import React from 'react';
import closed from "./closed.jpg"
import Image from 'next/image';
const RegistrationClosed = ({lastDate,todaysDate}) => {
  console.log(lastDate,todaysDate)
    return (
      <div className=" flex-col min-h-screen bg-white flex justify-center items-center">
      <h1 className=' text-5xl font-semibold'>Registration</h1>
      <Image src={closed} className=" max-w-xs p-10" alt="image"/>
        <h1 className=' text-xl font-semibold'>Last date of Registration was: {lastDate}</h1>
        <h1 className=' text-xl text-red-600 font-semibold'>Present Date is: {todaysDate}</h1>
    </div>
    );
  };
  
  export default RegistrationClosed;
  