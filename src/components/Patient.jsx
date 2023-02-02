import React from "react";

const Patient = ({ patientData, setPatient, deletePatient }) => {
  const handleEdit = (e) => {
    e.preventDefault();
    setPatient(patientData);
  };

  const handleDelete = () => {
    console.log("click");
    deletePatient(patientData.id);
  };

  return (
    <div className="m-5 bg-white shadow-md px-5 py-2 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Pet's Name: {""}
        <span className="font-normal normal-case">{patientData.petName}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Owner: {""}
        <span className="font-normal normal-case">{patientData.ownerName}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">
          {patientData.ownerEmail}
        </span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Date: {""}
        <span className="font-normal normal-case">
          {patientData.dateAppoinment}
        </span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Symptoms: {""}
        <span className="font-normal normal-case">
          {patientData.petSymptom}
        </span>
      </p>
      <div className="flex justify-between mt-3 pb-3">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={handleEdit}
        >
          Edit
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Patient;
