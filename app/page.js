import BeforeSubmission from "./components/BeforeSubmission";
import Header from "./components/Header";
import Overview from "./components/Overview";
import Form from "./components/form";
import BankAccountDetails from "./components/BankAccountDetails";
export default function Home(params) {
  return (
    <>
      {/* <Header /> */}
      <Overview />
      {/* <BeforeSubmission /> */}
      <Form />
      <BankAccountDetails
        accountHolder="Pending"
        accountNumber="00158-58000-08501"
        ifscCode="YESB0000015"
      />
    </>
  );
}

