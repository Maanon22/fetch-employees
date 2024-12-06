import { useState } from 'react'
import EmployeeCard from './components/EmployeeCard'
import './App.css'

const sampleEmployee = {
  name: {
    first: "Marie",
    last: "Kennedy",
  },
  email: "marie.kennedy@example.com",
  picture: {
    medium: "https://randomuser.me/api/portraits/med/women/83.jpg",
  },
};

function App() {
  const [employee, setEmployee] = useState(sampleEmployee);
  const getEmployee = () => {
  // Send the request
  fetch("http://localhost:3310/api/employees")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setEmployee(data.results[0]);
    });
};
  return (
    <>
      <EmployeeCard employee={employee} />
      <button type="button" onClick={getEmployee}>Employé suivant</button>
    </>
  )
}

export default App
