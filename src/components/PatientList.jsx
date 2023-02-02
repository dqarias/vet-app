import React from "react";
import Patient from "./Patient";

const PatientList = ({ patients, setPatient, deletePatient }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-bold text-center text-3xl">Patient List</h2>
      <p className="text-lg mt-5 text-center">
        Manage your {""}
        <span className="text-indigo-600 font-bold">
          Patients and Appointments
        </span>
      </p>
      {patients.map((patient) => (
        <Patient
          key={patient.id}
          patientData={patient}
          setPatient={setPatient}
          deletePatient={deletePatient}
        />
      ))}
    </div>
  );
};

export default PatientList;
