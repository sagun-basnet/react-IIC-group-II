import path from "node:path";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const user = {
    email: "jhon@gmail.com",
    password: "1234567890",
  };

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name.length === 0) {
      alert("Name fild required");
      return;
    }

    if (formData.password.length < 8) {
      alert("Password must be minimum 8 char");
      return;
    }

    console.log(formData);
    console.log("Form submitted");
    navigate("/");
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="h-screen grid place-items-center">
      <form
        onSubmit={handleSubmit}
        className="w-[40%] p-12 flex flex-col gap-12 border-2 rounded-lg"
      >
        <h1 className="text-3xl uppercase font-bold text-center">
          Registration
        </h1>
        <input
          onChange={handleChange}
          className="border-2 rounded-md p-2 w-full"
          type="text"
          name="name"
          id=""
          placeholder="Enter your name"
        />
        <input
          onChange={handleChange}
          className="border-2 rounded-md p-2 w-full"
          type="text"
          name="address"
          id=""
          placeholder="Enter your address"
        />
        <input
          onChange={handleChange}
          className="border-2 rounded-md p-2 w-full"
          type="number"
          name="phone"
          id=""
          placeholder="Enter your phone number"
        />

        <input
          onChange={handleChange}
          className="border-2 rounded-md p-2 w-full"
          type="email"
          name="email"
          id=""
          placeholder="Enter your email"
        />
        <input
          onChange={handleChange}
          className="border-2 rounded-md p-2 w-full"
          type="password"
          name="password"
          id=""
          placeholder="Enter your password"
        />
        <button
          type="submit"
          className="font-bold bg-red-400 p-2 px-4 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
