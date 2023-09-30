import Image from "next/image";
import Table from "./Tabke.png";
export default function Overview(params) {
  return (
    <>
      <div className=" mb-1  justify-center">
        <h1 className="text-2xl font-semibold self-center mt-3 text-center md:text-4xl ">
          Registration
        </h1>
        <div className="flex justify-center mt-10">
          <Image
            className=" rounded-md border-[1px] border-black w  md:w-max"
            src={Table}
            alt="Table"
          />
          {/* <div className="flex justify-center container ">
            {/* <table 
              style={{ borderWidth: 1.5, borderRadius: 10, }}
              className="border border-collapse  border-black rounded-md"
            >
              <tbody>
                <tr>
                  <td
                    className="border border-[#000] text-center"
                    colspan="2"
                    rowspan="2"
                    width="213"
                  >
                    Category
                  </td>
                  <td
                    style={{ textAlign: "center" }}
                    className="border border-[#000]"
                    colspan="4"
                    width="432"
                  >
                    Registration Fees
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#000]" colspan="2" width="246">
                    Before 10th October 2023
                  </td>
                  <td className="border border-[#000]" colspan="2" width="186">
                    After 10th october 2023
                  </td>
                </tr>
                <tr>
                  <td width="64"></td>
                  <td width="149"></td>
                  <td className="border border-[#000]" width="123">
                    Indian
                  </td>
                  <td className="border border-[#000]" width="123">
                    Non-Indian
                  </td>
                  <td className="border border-[#000]" width="122">
                    Indian
                  </td>
                  <td className="border border-[#000]" width="122">
                    Non-Indian
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#000] text-center" rowspan="5" width="114" >
                    Author
                  </td>
                  <td className="border border-[#000]" width="149">
                    Student
                  </td>
                  <td className="border border-[#000]" width="123">
                    INR 7500
                  </td>
                  <td className="border border-[#000]" width="123">
                    USD 100
                  </td>
                  <td className="border border-[#000]" width="122">
                    INR 8000
                  </td>
                  <td className="border border-[#000]" width="64">
                    USD 120
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#000]" width="149">
                    Research Scholar
                  </td>
                  <td className="border border-[#000]" width="123">
                    INR 7500
                  </td>
                  <td className="border border-[#000]" width="123">
                    USD 100
                  </td>
                  <td className="border border-[#000]" width="122">
                    INR 8000
                  </td>
                  <td className="border border-[#000]" width="64">
                    USD 120
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#000]" width="149">
                    Industry
                  </td>
                  <td className="border border-[#000]" width="123">
                    INR 8000
                  </td>
                  <td className="border border-[#000]" width="123">
                    USD 120
                  </td>
                  <td className="border border-[#000]" width="122">
                    INR 9000
                  </td>
                  <td className="border border-[#000]" width="64">
                    USD 140
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#000]" width="149">
                    Academician
                  </td>
                  <td className="border border-[#000]" width="123">
                    INR 8000
                  </td>
                  <td className="border border-[#000]" width="123">
                    USD 120
                  </td>
                  <td className="border border-[#000]" width="122">
                    INR 9000
                  </td>
                  <td className="border border-[#000]" width="64">
                    USD 140
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#000]" width="149">
                     PC Member/Reviewer
                  </td>
                  <td className="border border-[#000]" width="123">
                    INR 7500
                  </td>
                  <td className="border border-[#000]" width="123">
                    USD 100
                  </td>
                  <td className="border border-[#000]" width="122">
                    INR 8000
                  </td>
                  <td className="border border-[#000]" width="64">
                    USD 120
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#000]" width="64">
                    Delegate/ Co-Author (Optional)
                  </td>
                  <td className="border border-[#000]" width="149"></td>
                  <td className="border border-[#000]" width="123">
                    INR 3000
                  </td>
                  <td className="border border-[#000]" width="123">
                    USD 70
                  </td>
                  <td className="border border-[#000]" width="122">
                    INR 3000
                  </td>
                  <td className="border border-[#000]" width="64">
                    USD 70
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#000]" width="64">
                    Fees per Pages (After 8 Pages)
                  </td>
                  <td className="border border-[#000]" width="149"></td>
                  <td className="border border-[#000]" width="123">
                    INR 800
                  </td>
                  <td className="border border-[#000]" width="123">
                    USD 9
                  </td>
                  <td className="border border-[#000]" width="122">
                    INR 800
                  </td>
                  <td className="border border-[#000]" width="64">
                    USD 9
                  </td>
                </tr>
              </tbody>
            </table> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
}
