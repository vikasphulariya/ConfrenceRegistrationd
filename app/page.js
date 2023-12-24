"use client";
import Overview from "./components/Overview";
import Form from "./components/form";
import BankAccountDetails from "./components/BankAccountDetails";
import QrScreen from "./components/QrScreen";
import RegistrationClosed from "./components/RegistartionClosed";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";
import { useEffect, useState } from "react";
import GridLoader from "react-spinners/GridLoader";
export default function Home(params) {
  const [formData, setFormData] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false);
  const [late, setLate] = useState(false);
  const [active, setActive] = useState(true);
  const [timeData, setTimeData] = useState({});
  const [todaysDate, setTodaysDate] = useState();
  const [lastDate, setLastDate] = useState();
  useEffect(() => {
    getData();
  }, []);

  const getMonthAbbreviation = (month) => {
    const monthAbbreviations = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];
    return monthAbbreviations[month];
  };
  const logFormattedDate = (isoDate) => {
    const dateObject = new Date(isoDate);
    const formattedDate = `${dateObject.getDate()}-${getMonthAbbreviation(
      dateObject.getMonth()
    )}-${dateObject.getFullYear()}`;
    return formattedDate;
    console.log("Formatted Date:", formattedDate);
  };

  const lateStatue = (apiDate, referenceDate) => {
    const apiDateTime = new Date(apiDate);
    const referenceDateTime = new Date(referenceDate);
    console.log(apiDateTime, referenceDateTime);
    if (apiDateTime > referenceDateTime) {
      
      return true;
    } else if (apiDateTime < referenceDateTime) {
      return false;
    } else {
      return false;
    }
  };
  const activeStatue = (apiDate, referenceDate) => {
    const apiDateTime = new Date(apiDate);
    const referenceDateTime = new Date(referenceDate);

    if (apiDateTime > referenceDateTime) {
      return false;
    } else if (apiDateTime < referenceDateTime) {
      return true;
    } else {
      return true;
    }
  };

  const convertToShortDate = (dateTimeString) => {
    const datePart = dateTimeString.split("T")[0];
    return datePart;
  };
  const getData = async () => {
    const firebaseData = doc(db, "website", "data");

    const docSnapshot = await getDoc(firebaseData);
    const response = await fetch(
      "http://worldtimeapi.org/api/timezone/Asia/Kolkata"
    );
    const dataTime = await response.json();
    console.log(dataTime);
    setTimeData(dataTime);

    if (docSnapshot.exists()) {
      // Access the data from the document
      const data = docSnapshot.data();
      console.log("Document data:", data);
      setFormData(data);
      setTodaysDate(logFormattedDate(dataTime.utc_datetime));
      setLastDate(logFormattedDate(data.extendedLastDateOfRegistration));
      const tempActive = activeStatue(
        convertToShortDate(dataTime.datetime),
        data.extendedLastDateOfRegistration
      );

      if (tempActive) {
        setActive(true);
        const tempLate = lateStatue(
          convertToShortDate(dataTime.datetime),
          data.lastDateOfRegistration
        );
        setLate(tempLate);
        console.log(tempLate);
      } else {
        setActive(false);
      }
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
            <RegistrationClosed lastDate={lastDate} todaysDate={todaysDate} />
          ) : (
            <>
              <Overview img={formData.imgURL} />
              <Form data={formData} lastDate={lastDate} late={late} />
              {/* <QrScreen data={"vikas"}/> */}
              <BankAccountDetails
                accountHolder={formData.accountHolder}
                accountNumber={formData.accountNumber}
                ifscCode={formData.ifscCode}
                branch={formData.branch}
                upi={formData.upiId}
                paypal={formData.paypalId}
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
