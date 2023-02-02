import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import PatientList from "./components/PatientList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  const getPatients = (data) => {
    const newData = {
      id: uuidv4(),
      petName: data.petName,
      ownerName: data.ownerName,
      ownerEmail: data.ownerEmail,
      dateAppoinment: data.dateAppoinment,
      petSymptom: data.petSymptom,
    };

    setPatients((prevState) => [...prevState, newData]);
  };

  const updatePatient = (id, data) => {
    const patientsUpdate = patients.map((patientUpdate) =>
      patientUpdate.id === id
        ? {
            ...patientUpdate,
            petName: data.petName,
            ownerName: data.ownerName,
            ownerEmail: data.ownerEmail,
            dateAppoinment: data.dateAppoinment,
            petSymptom: data.petSymptom,
          }
        : patientUpdate
    );

    setPatients(patientsUpdate);
  };

  console.log("patients", patients);

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 flex">
        <Form
          getPatients={getPatients}
          patient={patient}
          setPatient={setPatient}
          updatePatient={updatePatient}
        />
        <PatientList patients={patients} setPatient={setPatient} />
      </div>
    </div>
  );
}

export default App;
