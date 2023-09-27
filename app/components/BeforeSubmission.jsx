export default function BeforeSubmission(params) {
  return (
    <>
      <div className="container mx-auto max-w-3xl text-center mt-36">
        <h1 className="text-3xl font-semibold">Before Submitting your paper</h1>
        <p>
          Please note that you must pay the registration charges before
          submitting your paper. Once you have successfully made the payment,
          you will receive a payment ID from the payment gateway. You must
          submit this payment ID in the submission form. To pay the registration
          charges, please click on the Payment Button Below Your paper will be
          reviewed by the conference committee. If your paper is accepted, you
          will be notified by email.
        </p>
      </div>
      <div className="container mx-auto max-w-3xl text-center my-16">
        <h1 className="text-3xl font-semibold">Important Note</h1>
        <p>
          The amount to be paid for the registration charges is calculated based
          on the number of pages in your paper. Please refer to the above table
          for the calculation. If the number of pages in your paper is more than
          8, then there is an additional fee per extra page.So calculate Your
          Registration Fees Accordingly. Please note that your paper will not be
          reviewed unless you have paid the registration charges and submitted
          the payment ID in the submission form. Additionally, please make sure
          that the email address and phone number you enter on the submission
          form are the same email address and phone number that you used to make
          the payment. This will help us to ensure that your payment is
          correctly linked to your submission. Thank you for your cooperation.
        </p>
      </div>
    </>
  );
}
