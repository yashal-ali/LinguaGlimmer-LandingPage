"use client";
import React, { useState } from "react";

import Input from "./Input";

interface FormData {
  name: string;
  lastName: string;
  emailAddress: string;
  message: string;
}

function Form() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    lastName: "",
    emailAddress: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [field]: "" }));
  };

  const validateForm = () => {
    let formIsValid = true;
    const newErrors: Partial<FormData> = {};
    Object.keys(formData).forEach((field) => {
      if (formData[field as keyof FormData].trim() === "") {
        newErrors[field as keyof FormData] = "This field is required";
        formIsValid = false;
      }
    });
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.emailAddress)) {
      newErrors.emailAddress = "Please enter a valid email address";
      formIsValid = false;
    }
    setErrors(newErrors);
    return formIsValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form data:", formData);
    } else {
      console.log("Form validation failed");
    }
  };

  return (
    <form
      className="justify-center items-center flex-col max-w-[1000px] flex mx-auto"
      onSubmit={handleSubmit}
    >
      {" "}
      <div className="flex justify-between max-w-[490px]">
        <Input
          placeholder="First Name"
          value={formData.name}
          error={errors.name}
          onChange={(e) => handleChange("name", e.target.value)}
          className=" placeholder:text-center min-h-[74px]"
        />
        <Input
          placeholder="Last Name"
          value={formData.lastName}
          error={errors.lastName}
          onChange={(e) => handleChange("lastName", e.target.value)}
          className="mx-10 placeholder:text-center min-h-[74px] "
        />
      </div>
      <Input
        placeholder="Email Address"
        value={formData.emailAddress}
        error={errors.emailAddress}
        onChange={(e) => handleChange("emailAddress", e.target.value)}
        className="mt-4 placeholder:text-center min-h-[74px] min-w-[490px]"
      />
      <Input
        placeholder="Enter A Message"
        value={formData.message}
        error={errors.message}
        onChange={(e: any) => handleChange("message", e.target.value)}
        className="mt-4 placeholder:text-center h-[224px] min-w-[490px]"
      />
      <div className="flex justify-center items-center mt-10">
        <button
          title="Contact US"
          type="submit"
          className="bg-[#004643] text-white px-10 py-4 rounded-md font-bold text-center mt-4"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default Form;
