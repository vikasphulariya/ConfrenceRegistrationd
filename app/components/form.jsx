"use client"; // This is a client component 👈🏽
//svs
// import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { useState, useEffect, useMemo } from "react";
import countryList from "react-select-country-list";
import Select from "react-select";
import { stringify } from "postcss";
import FormData from "form-data";

// import React from "react";
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";
export default function Form() {
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
    country: "",
    areYouA: "",
    amountPaid: "",
    paperId: "",
    paperTitle: "",
    paperAuthors: "",
    totalPaperPages: 0,
    memberType: "",
  });
  const [image, setImage] = useState("");
  const [value, setValue] = useState("India");
  const options = useMemo(() => countryList().getData(), []);
  const [amountPaid, setAmountPaid] = useState();
  const changeHandler = (value) => {
    setValue(value.label);
    setFormData({
      ...formData,
      country: value.label,
    });
  };

  useEffect(() => {
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
    setAmountPaid(temp + extra);
    setFormData({
      ...formData,
      amountPaid: temp + extra,
    });
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
      <div className="flex justify-center  container pr-2 mr-2">
        {/* <h2>Registration Form</h2> */}
        <form onSubmit={handleSubmit}>
          <div>
            Name<text className="text-red-700 font-medium font-bold">*</text>
            <div className="flex flex-row gap-3">
              <input
                style={{
                  borderRadius: 10,
                  paddingHorizontal: 10,
                  marginRight: 10,
                }}
                type="text"
                name="firstName"
                placeholder="First"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
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
          <div className="flex flex-row gap-3">
            <div>
              <label>
                Email
                <text className="text-red-700 font-medium font-bold">*</text>
                <br />
                <input
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

            <div>
              <label>
                Phone
                <text className="text-red-700 font-medium font-bold">*</text>
                <br />
                <input
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
          <div>
            <label>
              Organisation
              <text className="text-red-700 font-medium font-bold">*</text>
              <br />
              <input
                style={{
                  borderRadius: 10,
                  paddingHorizontal: 10,
                  marginBottom: 5,
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
          <div>
            <label>
              Qualification
              <text className="text-red-700 font-medium font-bold">*</text>
              <br />
              <input
                style={{
                  borderRadius: 10,
                  paddingHorizontal: 10,
                  marginBottom: 5,
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
          <div className="pr-10">
            <label>
              Address
              <text className="text-red-700 font-medium font-bold">*</text>
              <br />
              <div className="flex flex-row gap-3 mr-10">
                <input
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
              <div className="flex flex-row gap-3">
                <input
                  style={{
                    borderRadius: 10,
                    paddingHorizontal: 10,
                    marginBottom: 5,
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
                  style={{
                    borderRadius: 10,
                    paddingHorizontal: 10,
                    marginBottom: 5,
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
          <div>
            <label>
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
                className="w-max"
              />
            </label>
          </div>
          <div>
            <label>
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
              Author
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
              Delegate
            </label>
          </div>
          {formData.areYouA === "Author" ? (
            <div>
              <div>
                <label>Author Category:</label>
                <div>
                  {/* <div> */}
                  <label>
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

                  <label>
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
                  </label>
                </div>
                {/* </div> */}
                <div>
                  <label>
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

                  <label>
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
                  <label>
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

          <div>
            <label>
              Payment Proof
              <text className="text-red-700 font-medium font-bold">*</text>
              <br />
              <input
                style={{
                  // borderRadius: 10,
                  paddingHorizontal: 10,
                  marginBottom: 5,
                }}
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

          <div>
            <label>
              Amount Paid {formData.country === "India" ? `₹` : `$`}
              <text className="text-red-700 font-medium font-bold">*</text>
              <br />
              <input
                style={{
                  borderRadius: 10,
                  paddingHorizontal: 10,
                  marginBottom: 5,
                }}
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
              className="bg-blue-200 p-3 my-3 self-center rounded-2xl hover:bg-blue-300 hover:p-3.5"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      {formData.amountPaid>=100?
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
      :null}
    </>
  );
}
