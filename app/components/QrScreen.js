import Image from "next/image";
import React from "react";
import QRCode from "react-qr-code";
import Bhim from "./bhim.png";
import Paytm from "./paytm.png";
function QrScreen({ data }) {
  return (
    <div className="flex  rounded-lg bg-[#fff] border-[#c0c0c0] border-[1px] shadow-md justify-center flex-col md:w-max">
      <label className="bg-[#f5f5f5]  my-3 text-sm text-center font-extrabold py-1 md:text-2xl">
        NOVEL RESEARCH FOUND
      </label>
      <QRCode
        value={`upi://pay?pa=9411821385@jio&pn=Novel%20research%20found&am=${data}&tn=Payment%20For%20Confrence&cu=INR`}
        className=" self-center p-3"
      />
      <label className=" self-center font-extrabold text-[#5047da]">
        Rs. {data}
      </label>
      <label className="self-center font-semibold text-lg">
        9411821385@jio
      </label>
      <label className=" self-center text-xl px-5 py-2 justify-center text-center font-bold">
        Scan and pay with any BHIM UPI app
      </label>
      <Image alt="Bhim" src={Bhim} className="mb-2 self-center md:w-max px-1" />
      <Image
        alt="Bhim"
        src={Paytm}
        className="mb-2 aspect-auto px-8 self-center md:w-max"
      />
    </div>
  );
}

export default QrScreen;
