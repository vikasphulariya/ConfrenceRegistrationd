import React from "react";

function Paypal() {
  const textToCopy = "Editor.ijiet@gmail.com";

  const handleCopyClick = () => {
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        alert('Text copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  };

  return (
    <div>
      <div className="flex flex-col bg-[#f4f4f4] p-3 rounded-md shadow-xl border-black border-[1] m-5">
        <label className="text-lg text-justify md:text-sm">
          Payments are accepted through our PayPal account from Authors other
          than India.
        </label>
        <label className="text-lg text-justify md:text-sm">
          Our Paypal Address is:
        </label>
        <div className="bg-[#d4d4d4] pl-3 rounded-md p-2 m-2 flex flex-row justify-between md:flex flex-col">
          <label className="text-lg md:text-sm text-justify">Editor.ijiet@gmail.com</label>
          <div className="bg-[#737373] px-2 rounded-md py-1 shadow-lg md:text-sm  self-center">
            <button onClick={handleCopyClick} className="text-[#f5f5f5]">
              Copy
            </button>
          </div>
        </div>
        <button
          onClick={() => {
            window.open("https://www.paypal.com", "_blank");
          }}
          className="self-center p-2 rounded-lg shadow-md bg-sky-300 text-sky-700 hover:font-bold"
        >
          PayPal
        </button>
      </div>
      <div className="flex justify-center mt-3">
        {/* Additional content for smaller screens can be added here */}
      </div>
    </div>
  );
}

export default Paypal;
