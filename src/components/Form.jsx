import React, { useState } from "react";

const Form = () => {
  const [dataForm, setDataForm] = useState({
    petName: "",
    ownerName: "",
    ownerEmail: "",
    dateAppoinment: "",
    petSymptom: "",
  });

  const handleChange = (e) => {
    setDataForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  console.log(dataForm);

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="text-3xl text-center font-bold">Patient Info</h2>
      <p className="text-lg mt-5">
        Add and manage{" "}
        <span className="text-indigo-600 font-bold">patients</span>
      </p>
      <form action="" className="mt-5 bg-white rounded-sm shadow-md py-3 px-5">
        <div className="mb-5">
          <label
            htmlFor="pet"
            className="block text-gray-700 uppercase font-bold"
          >
            Pet's name
          </label>
          <input
            id="pet"
            type="text"
            name="petName"
            value={dataForm.petName}
            onChange={handleChange}
            placeholder="Enter pet's name"
            className="border-2 py-1 px-2 mt-2 w-full placeholder-gray-400 rounded-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="owner"
            className="block text-gray-700 uppercase font-bold"
          >
            Owner's name
          </label>
          <input
            id="owner"
            type="text"
            name="ownerName"
            value={dataForm.ownerName}
            onChange={handleChange}
            placeholder="Enter owner's name"
            className="border-2 py-1 px-2 mt-2 w-full placeholder-gray-400 rounded-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            name="ownerEmail"
            value={dataForm.ownerEmail}
            onChange={handleChange}
            placeholder="Enter owner's email"
            className="border-2 py-1 px-2 mt-2 w-full placeholder-gray-400 rounded-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="date"
            className="block text-gray-700 uppercase font-bold"
          >
            Date
          </label>
          <input
            id="date"
            type="date"
            name="dateAppoinment"
            value={dataForm.dateAppoinment}
            onChange={handleChange}
            placeholder="Enter owner's email"
            className="border-2 py-1 px-2 mt-2 w-full placeholder-gray-400 rounded-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="symptoms"
            className="block text-gray-700 uppercase font-bold"
          >
            symptoms
          </label>
          <textarea
            id="symptoms"
            name="petSymptom"
            value={dataForm.petSymptom}
            onChange={handleChange}
            placeholder="Enter owner's email"
            className="border-2 py-1 px-2 mt-2 w-full placeholder-gray-400 rounded-md"
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer"
          value="Add Patient"
        />
      </form>
    </div>
  );
};

export default Form;
