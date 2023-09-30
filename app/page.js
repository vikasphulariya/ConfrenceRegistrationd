import BeforeSubmission from "./components/BeforeSubmission";
import Header from "./components/Header";
import Overview from "./components/Overview";
import Form from "./components/form";
import BankAccountDetails from "./components/BankAccountDetails";
export default function Home(params) {
  return (
    <>
    <div className="mx-2 flex flex-col container  rounded-md justify-center w-full">
      {/* <Header /> */}
      <Overview />
      {/* <BeforeSubmission /> */}
      <Form />
      <BankAccountDetails
        accountHolder="Novel Research Found"
        accountNumber="00158-58000-08501"
        ifscCode="YESB0000015"
      />
      </div>
    </>
  );
}

