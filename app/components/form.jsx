"use client"; // This is a client component 👈🏽
//svs
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useState, useEffect, useMemo } from "react";
import countryList from "react-select-country-list";
import Select from "react-select";
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
  });

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
      temp = 3000;
    } else {
      if (formData.memberType === "Student") {
        console.log("mem", formData.memberType);
        temp = 7500;
      }
      if (formData.memberType === "Member/Reviewer") {
        console.log("mem", formData.memberType);
        temp = 7500;
      }
      if (formData.memberType === "Research Scholar") {
        console.log("mem", formData.memberType);
        temp = 7500;
      }
      if (formData.memberType === "Academician") {
        console.log("mem", formData.memberType);
        temp = 8000;
      }
      if (formData.memberType === "Industry") {
        console.log("mem", formData.memberType);
        temp = 8000;
      }
      if (formData.totalPaperPages > 8) {
        extra = (formData.totalPaperPages - 8) * 800;
      }
    }
    setAmountPaid(temp + extra);
    setFormData({
      ...formData,
      amountPaid: temp + extra,
    });
  }, [formData.areYouA, formData.memberType, formData.totalPaperPages]);

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
    // Handle form submission here, e.g., send data to server or perform validation
    console.log(formData);
  };
  return (
    <>
      <div className="flex justify-center">
        {/* <h2>Registration Form</h2> */}
        <form onSubmit={handleSubmit}>
          <div>
            Name<text className="text-red-700 font-medium font-bold">*</text>
            <br />
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
          <div className="flex flex-row gap-3">
            <div>
              <label>
                Email<text className="text-red-700 font-medium font-bold">*</text>
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
                Phone<text className="text-red-700 font-medium font-bold">*</text>
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
              Organisation<text className="text-red-700 font-medium font-bold">*</text>
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
              Qualification<text className="text-red-700 font-medium font-bold">*</text>
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
          <div>
            <label>
              Address<text className="text-red-700 font-medium font-bold">*</text>
              <br />
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
                }}
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                required
              />
              <br />
              <input
                style={{
                  borderRadius: 10,
                  paddingHorizontal: 10,
                  marginBottom: 5,
                  marginRight: 5,
                }}
                type="text"
                name="formData"
                placeholder="State / Province / Region"
                value={formData.formData}
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
            </label>
          </div>
          <div>
            <label>
              Country<text className="text-red-700 font-medium font-bold">*</text>
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
              Are you a<text className="text-red-700 font-medium font-bold">*</text>
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
              Amount Paid<text className="text-red-700 font-medium font-bold">*</text>
              <br />
              <input
                style={{
                  borderRadius: 10,
                  paddingHorizontal: 10,
                  marginBottom: 5,
                }}
                type="number"
                name="amountPaid"
                value={amountPaid}
                // onChange={}
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
    </>
  );
}
