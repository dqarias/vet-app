import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import PatientList from "./components/PatientList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [patients, setPatients] = useState([]);

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

  console.log("patients", patients);

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 flex">
        <Form getPatients={getPatients} />
        <PatientList />
      </div>
    </div>
  );
}

export default App;
