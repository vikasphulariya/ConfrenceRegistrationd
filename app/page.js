"use client";
import Overview from "./components/Overview";
import Form from "./components/form";
import BankAccountDetails from "./components/BankAccountDetails";
import QrScreen from "./components/QrScreen";
import RegistrationClosed from "./components/RegistartionClosed";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import GridLoader from "react-spinners/GridLoader";
export default function Home(params) {
  const [formData, setFormData] = useState({});
  const [dataLoaded, setDataLoaded] = useState(true);

  const [active, setActive] = useState(true);
  useEffect(() => {}, []);

  const getData = async () => {
    const firebaseData = doc(db, "website", "data");

    const docSnapshot = await getDoc(firebaseData);

    if (docSnapshot.exists()) {
      // Access the data from the document
      const data = docSnapshot.data();
      console.log("Document data:", data);
      setFormData(data);
      setDataLoaded(true);
    } else {
      console.log("No such document!");
    }
  };
  return (
    <>
      {dataLoaded ? (
        <div className=" flex flex-col container  rounded-md justify-center w-full">
          {!active ? (
            <RegistrationClosed />
          ) : (
            <>
              <Overview />
              <Form />
              {/* <QrScreen data={"vikas"}/> */}
              <BankAccountDetails
                accountHolder="Novel Research Found"
                accountNumber="00158-58000-08501"
                ifscCode="YESB0000015"
              />
            </>
          )}
        </div>
      ) : (
        <div class=" min-h-screen flex flex-col gap-y-3 justify-center items-center">
          <GridLoader loading={!dataLoaded} size={"60"} color="#36d7b7" />
          <h1 className="text-black font-bold text-2xl">
            Loading Registration Page
          </h1>
        </div>
      )}
    </>
  );
}
