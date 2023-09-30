"use client"; // This is a client component 👈🏽
//svs
import { PrismCodeBlock } from "react-prism-code-block";
// import QRCodeStyling from "qr-code-styling";
// import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { useState, useEffect, useMemo } from "react";
import countryList from "react-select-country-list";
import Select from "react-select";
import { stringify } from "postcss";
import FormData from "form-data";
import QRCode from "react-qr-code";
import Paypal from "./Paypal";
import Overview from "./Overview";
import QRCodeStyling, {
  DrawType,
  TypeNumber,
  Mode,
  ErrorCorrectionLevel,
  DotType,
  CornerSquareType,
  CornerDotType,
  Extension,
  Options
} from "qr-code-styling";
export default function Form() {
  const qrCode = new QRCodeStyling({
    width: 300,
    height: 300,
    type: "svg",
    data: "https://www.facebook.com/",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    dotsOptions: {
        color: "#4267b2",
        type: "rounded"
    },
    backgroundOptions: {
        color: "#e9ebee",
    },
    imageOptions: {
        crossOrigin: "anonymous",
        margin: 20
    }
});
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    qualification: "",
    addressLine1: "",
    city: "",
    state: "",
    postalCode: "",
    country: "India",
    areYouA: "",
    amountPaid: "",
    paperId: "",
    paperTitle: "",
    paperAuthors: "",
    totalPaperPages: 0,
    memberType: "",
  });
  const [image, setImage] = useState("");
  const [value, setValue] = useState({ value: "IN", label: "India" });
  const options = useMemo(() => countryList().getData(), []);
  const [amountPaid, setAmountPaid] = useState();
  const changeHandler = (value) => {
    setValue(value);
    console.log(value);
    setFormData({
      ...formData,
      country: value.label,
    });
  };

  useEffect(() => {
    let k = formData.country === "India" ? `₹ ` : `$ `;
    let temp = 0;
    let extra = 0;
    if (formData.areYouA === "Delegate") {
      {
        temp = formData.country === "India" ? 3000 : 70;
      }
    } else {
      if (formData.memberType === "Student") {
        console.log("mem", formData.memberType);

        temp = formData.country === "India" ? 7500 : 100;
      }
      if (formData.memberType === "Member/Reviewer") {
        console.log("mem", formData.memberType);
        temp = formData.country === "India" ? 7500 : 100;
      }
      if (formData.memberType === "Research Scholar") {
        console.log("mem", formData.memberType);
        temp = formData.country === "India" ? 7500 : 100;
      }
      if (formData.memberType === "Academician") {
        console.log("mem", formData.memberType);
        temp = formData.country === "India" ? 8000 : 120;
      }
      if (formData.memberType === "Industry") {
        console.log("mem", formData.memberType);
        temp = formData.country === "India" ? 8000 : 120;
      }
      if (formData.totalPaperPages > 8) {
        extra =
          formData.country === "India"
            ? (formData.totalPaperPages - 8) * 800
            : (formData.totalPaperPages - 8) * 9;
      }
    }
    if(temp!==0 || extra!==0 ){

      setAmountPaid((temp + extra));
      setFormData({
        ...formData,
        amountPaid: k +( temp + extra),
      });
    }
  }, [
    formData.areYouA,
    formData.memberType,
    formData.totalPaperPages,
    formData.country,
  ]);

  const [imageData, setImageData] = useState(null);

  const handleImageChange = (event) => {
    const selectedImageFile = event.target.files[0];

    if (selectedImageFile) {
      const reader = new FileReader();

      reader.onload = () => {
        const base64String = reader.result.split(",")[1]; // Extract Base64 data
        setImageData(base64String);
        // console.log(base64String);
      };
      reader.readAsDataURL(selectedImageFile);
      // Read the image file as Data URL
    } else {
      setImageData(null); // Reset if no image is selected
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // let imageUploaded = false;
    let data1 = new FormData();
    data1.append("image", imageData);

    let config1 = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://api.imgbb.com/1/upload?key=101405e8c4bd3a056e79883b57b8b8f8",

      data: data1,
    };

    axios
      .request(config1)
      .then((response) => {
        let k = response.data.data.url;
        console.log(JSON.stringify(k));
        if (response.data.success === true) {
          let data = JSON.stringify({
            First: formData.firstName,
            Last: formData.lastName,
            email: formData.email,
            Phone: formData.phone,
            organization: formData.organization,
            qualification: formData.qualification,
            Address: formData.addressLine1,
            City: formData.city,
            State: formData.state,
            Pin: formData.postalCode,
            country: formData.country,
            Catagory: formData.areYouA,
            subCatgory:
              formData.areYouA === "Author" ? formData.memberType : "NA",
            PaperId: formData.areYouA === "Author" ? formData.paperId : "NA",
            PaperTitle:
              formData.areYouA === "Author" ? formData.paperTitle : "NA",
            PaperAuthor:
              formData.areYouA === "Author" ? formData.paperAuthors : "NA",
            pageNo:
              formData.areYouA === "Author" ? formData.totalPaperPages : "NA",
            Total: formData.amountPaid,
            Imagel: k,
          });

          let config = {
            method: "post",
            maxBodyLength: Infinity,
            url: "https://testingapps.pythonanywhere.com/api/insert/",
            headers: {
              "Content-Type": "application/json",
            },
            data: data,
          };

          axios
            .request(config)
            .then((response) => {
              console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });

    // Handle form submission here, e.g., send data to server or perform validation
    console.log(formData);
  };
  return (
    <>
    {/* <Overview/> */}
    <div className="">

      <div className=" flex flex-1 justify-center w-full  mx-auto pl-20 md:pl-0 py-8 md:flex md:flex-1 md:w-max sm:flex sm:w-full rounded-lg">
        {/* <h2>Registration Form</h2> */}
        <form onSubmit={handleSubmit} className="  justify-center">
          <div className="name-row w-full justify-center ">
            <label className="font-bold text-2xl pb-3">
              Name <span className="text-red-700">*</span>
            </label>

            <div className="flex justfy-center flex-col md:flex-row gap-5 md:gap-10 w-full pb-4  ">
              <input
                className="w-80 h-10"
                style={{
                  borderRadius: 10,
                  paddingHorizontal: 10,
                }}
                type="text"
                name="firstName"
                placeholder="First"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                className=" w-80 h-10 md:ml-3"
                style={{
                  borderRadius: 10,
                  paddingHorizontal: 10,
                  marginBottom: 5,
                }}
                type="text"
                placeholder="Last"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className=" w-full flex gap-2 flex-col md:flex-row pb-4">
            <div className="w-full">
              <label className="font-bold text-2xl mb-3  ">
                Email
                <text className="text-red-700 font-medium mb-">*</text>
                <br />
                <input
                  className="w-80 h-10 font-medium pt-3"
                  style={{
                    borderRadius: 10,
                    paddingHorizontal: 10,
                    marginBottom: 5,
                  }}
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <div className="w-full">
              <label className="font-bold text-2xl">
                Phone
                <text className="text-red-700 font-medium">*</text>
                <br />
                <input
                  className="w-80 h-10 font-medium"
                  style={{
                    borderRadius: 10,
                    paddingHorizontal: 10,
                    marginBottom: 5,
                  }}
                  type="number"
                  placeholder="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
          </div>

          <div className="w-full flex gap-2 flex-col md:flex-row pb-4">
            <div className="w-full  md:pb-4">
              <label className="font-bold text-2xl mb-2">
                Organisation
                <text className="text-red-700 font-medium font-bold">*</text>
                <br />
                <input
                  className="w-80 h-10 font-medium"
                  style={{
                    borderRadius: 10,
                    paddingHorizontal: 10,
                    // marginBottom: 5,
                  }}
                  type="text"
                  name="organization"
                  placeholder="Organization"
                  value={formData.organization}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

          <div className="w-full pb-4">
              <label className="font-bold text-2xl">
                Qualification
                <text className="text-red-700 font-medium">*</text>
                <br />
                <input
                  className="font-medium w-80 h-10"
                  style={{
                    borderRadius: 10,
                    paddingHorizontal: 10,
                    // marginBottom: 5,
                  }}
                  type="text"
                  placeholder="Qualification"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
          </div>

          <div className="pr-10 pb-4 w-full ">
            <label className="text-2xl font-bold ">
              Address
              <text className="text-red-700 font-medium font-bold">*</text>
              <br />
              <div className="w-full flex gap-2 flex-col md:flex-row pb-4">
              {/* <div className="w-full pb-4"></div> */}
                <input
                  className="font-medium w-80 h-10  "
                  style={{
                    borderRadius: 10,
                    paddingHorizontal: 10,
                    marginBottom: 5,
                    marginRight: 5,
                  }}
                  type="text"
                  name="addressLine1"
                  placeholder="Address "
                  value={formData.addressLine1}
                  onChange={handleChange}
                  required
                />
                <input
                  className="font-medium w-80 h-10 md:ml-10"
                  style={{
                    borderRadius: 10,
                    paddingHorizontal: 10,
                    marginBottom: 5,
                    // marginRight:10
                  }}
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* <br /> */}
              <div className="w-full flex gap-2 flex-col md:flex-row pb-4">
                <input
                  className="font-medium w-80 h-10"
                  style={{
                    borderRadius: 10,
                    paddingHorizontal: 10,
                    // marginBottom: 5,
                    marginRight: 5,
                  }}
                  type="text"
                  name="state"
                  placeholder="State / Province / Region"
                  value={formData.state}
                  onChange={handleChange}
                  required
                />
                <input
                  className="font-medium w-80 h-10 md:ml-10"
                  style={{
                    borderRadius: 10,
                    paddingHorizontal: 10,
                    // marginBottom: 5,
                  }}
                  type="number"
                  name="postalCode"
                  placeholder="Postal Code"
                  value={formData.postalCode}
                  onChange={handleChange}
                  required
                />
              </div>
            </label>
          </div>
          <div className="pb-6">
            <label className="font-bold text-2xl">
              Country
              <text className="text-red-700 font-medium font-bold">*</text>
              <br />
              <Select
                placeholder="Select Country"
                name="country"
                options={options}
                defaultValue={value}
                onChange={changeHandler}
                required
                className="w-80 h-8 text-sm font-medium rounded-lg "
              />
            </label>
          </div>
          <div className="pb-4">
            <label className="font-bold text-2xl">
              Are you a
              <text className="text-red-700 font-medium font-bold">*</text>
              <br />
              <input
                style={{
                  borderRadius: 10,
                  paddingHorizontal: 10,
                  marginBottom: 5,
                  marginRight: 5,
                }}
                type="radio"
                name="areYouA"
                value="Author"
                checked={formData.areYouA === "Author"}
                onChange={handleChange}
                required
              />
              <span className="text-lg font-medium">Author</span>
              <input
                style={{
                  borderRadius: 10,
                  paddingHorizontal: 10,
                  marginBottom: 5,
                  marginLeft: 10,
                  marginRight: 5,
                }}
                type="radio"
                name="areYouA"
                value="Delegate"
                checked={formData.areYouA === "Delegate"}
                onChange={handleChange}
                required
              />
              <span className="text-lg font-medium">Delegate</span>
            </label>
          </div>
          {formData.areYouA === "Author" ? (
            <div>
              <div>
                <label>Author Category:</label>
                <div>
                  {/* <div> */}
                  <label className="p-3 text-lg">
                    <input
                      style={{
                        borderRadius: 10,
                        paddingHorizontal: 10,
                        marginBottom: 5,
                        // marginLeft: 10,
                        marginRight: 5,
                      }}
                      type="radio"
                      name="memberType"
                      value="Student"
                      checked={formData.memberType === "Student"}
                      onChange={handleChange}
                      required={formData.areYouA === "Author" ? true : false}
                    />
                    Student
                  </label>

                  <labe className="p-3 text-lg">
                    <input
                      style={{
                        borderRadius: 10,
                        paddingHorizontal: 10,
                        marginBottom: 5,
                        marginLeft: 10,
                        marginRight: 5,
                      }}
                      type="radio"
                      name="memberType"
                      value="Research Scholar"
                      checked={formData.memberType === "Research Scholar"}
                      onChange={handleChange}
                      required={formData.areYouA === "Author" ? true : false}
                    />
                    Research Scholar
                  </labe>
                </div>
                {/* </div> */}
                <div>
                  <label className="p-3 text-lg">
                    <input
                      style={{
                        borderRadius: 10,
                        paddingHorizontal: 10,
                        marginBottom: 5,
                        // marginLeft: 10,
                        marginRight: 5,
                      }}
                      type="radio"
                      name="memberType"
                      value="Industry"
                      checked={formData.memberType === "Industry"}
                      onChange={handleChange}
                      required={formData.areYouA === "Author" ? true : false}
                    />
                    Industry
                  </label>

                  <label className="p-3 text-lg">
                    <input
                      style={{
                        borderRadius: 10,
                        paddingHorizontal: 10,
                        marginBottom: 5,
                        marginLeft: 10,
                        marginRight: 5,
                      }}
                      type="radio"
                      name="memberType"
                      value="Academician"
                      checked={formData.memberType === "Academician"}
                      onChange={handleChange}
                      required={formData.areYouA === "Author" ? true : false}
                    />
                    Academician
                  </label>
                </div>
                <div>
                  <label className="p-3 text-lg">
                    <input
                      style={{
                        borderRadius: 10,
                        paddingHorizontal: 10,
                        marginBottom: 5,
                        // marginLeft: 10,
                        marginRight: 5,
                      }}
                      type="radio"
                      name="memberType"
                      value="Member/Reviewer"
                      checked={formData.memberType === "Member/Reviewer"}
                      onChange={handleChange}
                      required={formData.areYouA === "Author" ? true : false}
                      //
                    />
                    Member/Reviewer
                  </label>
                </div>
              </div>
              <div>
                <label>
                  Paper ID:
                  <br />
                  <input
                    style={{
                      borderRadius: 10,
                      paddingHorizontal: 10,
                      marginBottom: 5,
                      // marginLeft: 10,
                      marginRight: 5,
                    }}
                    type="text"
                    name="paperId"
                    value={formData.paperId}
                    onChange={handleChange}
                    required={formData.areYouA === "Author" ? true : false}
                    //
                  />
                </label>
              </div>
              <div>
                <label>
                  Paper Title:
                  <br />
                  <input
                    style={{
                      borderRadius: 10,
                      paddingHorizontal: 10,
                      marginBottom: 5,
                      // marginLeft: 10,
                      marginRight: 5,
                    }}
                    type="text"
                    name="paperTitle"
                    value={formData.paperTitle}
                    onChange={handleChange}
                    required={formData.areYouA === "Author" ? true : false}
                    //
                  />
                </label>
              </div>
              <div>
                <label>
                  Paper Author(s):
                  <br />
                  <input
                    style={{
                      borderRadius: 10,
                      paddingHorizontal: 10,
                      marginBottom: 5,
                      // marginLeft: 10,
                      marginRight: 5,
                    }}
                    type="text"
                    name="paperAuthors"
                    value={formData.paperAuthors}
                    onChange={handleChange}
                    required={formData.areYouA === "Author" ? true : false}
                    //
                  />
                </label>
              </div>
              <div>
                <label>
                  Total Paper Pages:
                  <br />
                  <input
                    style={{
                      borderRadius: 10,
                      paddingHorizontal: 10,
                      marginBottom: 5,
                      // marginLeft: 10,
                      marginRight: 5,
                    }}
                    type="number"
                    name="totalPaperPages"
                    value={formData.totalPaperPages}
                    onChange={handleChange}
                    required={formData.areYouA === "Author" ? true : false}
                    //
                  />
                </label>
              </div>
            </div>
          ) : null}

          <div className="">
            <label className="font-bold text-2xl">
              Payment Proof
              <text className="text-red-700 font-medium">*</text>
              <br />
              <input
                className=" text-lg pt-5 px-5  font-normal bg-white border-dashed border rounded-lg border-gray-600 w-1/2 h-20"
                // type="number"
                type="file"
                name="ScreenShot"
                // value={"amountPaid"}
                accept="image/*"
                onChange={handleImageChange}
                required
                // disabled
              />
            </label>
          </div>

          <div className="mt-3">
            <label className="font-bold text-2xl ">
              Amount Paid
              <text className="text-red-700 font-medium font-bold">*</text>
              <br />
              <input
                style={{
                  borderRadius: 10,
                  paddingHorizontal: 10,
                  marginBottom: 5,
                }}
                className="w-80"
                // type="number"
                name="amountPaid"
                value={amountPaid}
                required
                disabled
              />
            </label>
          </div>
          <div className="flex  justify-center">
            <button
              className="bg-blue-200 p-3 my-3 shadow-lg border border-blue-400 self-center rounded-2xl hover:bg-blue-300 hover:p-3.5"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      {amountPaid >= 3000 && formData.country === "India" ? (
        <div>
          {/* </div> */}
          <div className="flex justify-center flex-row">
            <QRCode
              size={256}
              style={{
                height: "auto",
                alignSelf: "center",
                alignContent: "center",
              }}
              value={`upi://pay?pa=9411821385@jio&pn=Novel%20research%20found&am=${formData.amountPaid}&tn=Payment%20For%20Confrence&cu=INR`}
              viewBox={`0 0 256 256`}
            />
          </div>
          <div className="flex justify-center mt-3">
            <button
              className="p-2 rounded-md bg-green-400 self-center"
              onClick={() => {
                window.open(
                  `upi://pay?pa=9411821385@jio&pn=Novel%20research%20found&am=${formData.amountPaid}&tn=Payment%20For%20Confrence&cu=INR`,
                  "_blank"
                );
              }}
            >
              Pay Now
            </button>
          </div>
        </div>
      ) : null}

      {amountPaid >= 70 && formData.country !== "India" ? (
        <div>
          {/* </div> */}
          <Paypal />
        </div>
      ) : null}
    
      
      </div>
    </>
  );
}
