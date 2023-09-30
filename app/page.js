import Overview from "./components/Overview";
import Form from "./components/form";
import BankAccountDetails from "./components/BankAccountDetails";
import QrScreen from "./components/QrScreen";
export default function Home(params) {
  return (
    <>
    <div className="mx-2 flex flex-col container  rounded-md justify-center w-full">
      <Overview />
      <Form />
      {/* <QrScreen data={"vikas"}/> */}
      <BankAccountDetails
        accountHolder="Novel Research Found"
        accountNumber="00158-58000-08501"
        ifscCode="YESB0000015"
      />
      </div>
    </>
  );
}

