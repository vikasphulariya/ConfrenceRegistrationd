export default function Overview(params) {
  return (
    <>
      <div className=" flex container lg:px-8 my-10">
        <div className="px-5 mx-3 lg:bg-gray-100 ring-0 lg:ring-1 ring-gray-300 lg:p-20 rounded-3xl shadow">
          <h1 className="text-lg lg:text-3xl font-semibold flex items-center justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="lg:w-10 lg:h-10 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
              />
            </svg>
            Registration Fees
          </h1>
          <table className="my-12 table-fixed">
            <tbody>
              <tr>
                <td
                  className="py-2 px-8 border border-gray-400 text-center text-xl font-semibold"
                  colspan="2"
                >
                  Category
                </td>
                <td
                  className="py-2 px-8 border border-gray-400 text-center text-xl font-semibold"
                  colspan="4"
                >
                  Registration Fees
                </td>
              </tr>
              <tr>
                <td
                  className="py-2 px-8 border-x border-gray-400 text-center"
                  colspan="2"
                ></td>
                <td
                  className="py-2 px-8 border border-gray-400 text-center"
                  colspan="2"
                >
                  Before 10th October 2023
                </td>
                <td
                  className="py-2 px-8 border border-gray-400 text-center"
                  colspan="2"
                >
                  After 10th october 2023
                </td>
              </tr>
              <tr>
                <td className="border-x border-gray-400" shad colSpan={2}></td>
                <td className="py-2 px-8 border border-gray-400 text-center">
                  Indian
                </td>
                <td className="py-2 px-8 border border-gray-400 text-center">
                  Non-Indian
                </td>
                <td className="py-2 px-8 border border-gray-400 text-center">
                  Indian
                </td>
                <td className="py-2 px-8 border border-gray-400 text-center">
                  Non-Indian
                </td>
              </tr>
              <tr>
                <td
                  className="py-2 px-8 border border-gray-400 text-center"
                  rowspan="5"
                >
                  Author
                </td>
                <td className="py-2 px-8 border border-gray-400 text-center">
                  Student
                </td>
                <td className="py-2 px-8 border border-gray-400 text-center">
                  INR 7500
                </td>
                <td className="py-2 px-8 border border-gray-400 text-center">
                  USD 100
                </td>
                <td className="py-2 px-8 border border-gray-400 text-center">
                  INR 8000
                </td>
                <td className="py-2 px-8 border border-gray-400 text-center">
                  USD 120
                </td>
              </tr>
              <tr>
                <td className="py-2 px-8 border border-gray-400 text-center">
                  Research Scholar
                </td>
                <td className="py-2 px-8 border border-gray-400 text-center">
                  INR 7500
                </td>
                <td className="py-2 px-8 border border-gray-400 text-center">
                  USD 100
                </td>
                <td className="py-2 px-8 border border-gray-400 text-center">
                  INR 8000
                </td>
                <td className="py-2 px-8 border border-gray-400 text-center">
                  USD 120
                </td>
              </tr>
              <tr>
                <td className="py-2 px-8 border border-gray-400 text-center">
                  Industry
                </td>
                <td className="py-2 px-8 border border-gray-400 text-center">
                  INR 8000
                </td>
                <td className="py-2 px-8 border border-gray-400 text-center">
                  USD 120
                </td>
                <td className="py-2 px-8 border border-gray-400 text-center">
                  INR 9000
                </td>
                <td className="py-2 px-8 border border-gray-400 text-center">
                  USD 140
                </td>
              </tr>
              <tr>
                <td className="py-2 px-8 border border-gray-400 text-center">
                  Academician
                </td>
                <td className="py-2 px-8 border border-gray-400 text-center">
                  INR 8000
                </td>
                <td className="py-2 px-8 border border-gray-400 text-center">
                  USD 120
                </td>
                <td className="py-2 px-8 border border-gray-400 text-center">
                  INR 9000
                </td>
                <td className="py-2 px-8 border border-gray-400 text-center">
                  USD 140
                </td>
              </tr>
              <tr>
                <td className="py-2 px-8 border border-gray-400 text-center">
                  PC Member/Reviewer
                </td>
                <td className="py-2 px-8 border border-gray-400 text-center">
                  INR 7500
                </td>
                <td className="py-2 px-8 border border-gray-400 text-center">
                  USD 100
                </td>
                <td className="py-2 px-8 border border-gray-400 text-center">
                  INR 8000
                </td>
                <td className="py-2 px-8 border border-gray-400 text-center">
                  USD 120
                </td>
              </tr>
              <tr>
                <td className="py-2 px-8 border border-gray-400 text-center">
                  Delegate/ Co-Author (Optional)
                </td>
                <td className="py-2 px-8 border border-gray-400 text-center"></td>
                <td className="py-2 px-8 border border-gray-400 text-center">
                  INR 3000
                </td>
                <td className="py-2 px-8 border border-gray-400 text-center">
                  USD 70
                </td>
                <td className="py-2 px-8 border border-gray-400 text-center">
                  INR 3000
                </td>
                <td className="py-2 px-8 border border-gray-400 text-center">
                  USD 70
                </td>
              </tr>
              <tr>
                <td className="py-2 px-8 border border-gray-400 text-center">
                  Fees per Pages (After 8 Pages)
                </td>
                <td className="py-2 px-8 border border-gray-400 text-center"></td>
                <td className="py-2 px-8 border border-gray-400 text-center">
                  INR 800
                </td>
                <td className="py-2 px-8 border border-gray-400 text-center">
                  USD 9
                </td>
                <td className="py-2 px-8 border border-gray-400 text-center">
                  INR 800
                </td>
                <td className="py-2 px-8 border border-gray-400 text-center">
                  USD 9
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
