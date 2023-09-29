import BeforeSubmission from "./components/BeforeSubmission";
import Header from "./components/Header";
import Overview from "./components/Overview";
import Form from "./components/form";
import BankAccountDetails from "./components/BankAccountDetails";
export default function Home(params) {
  return (
    <>
    <div className="bg-gray-200 p-10 rounded-md">
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

