import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";

function App() {
  const [role, setRole] = useState("dev");
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Caleb",
      role: "intern",
      img: "/images/pexels-andrea-piacquadio-762080.jpg",
    },
    {
      id: 2,
      name: "Sal",
      role: "Manager",
      img: "/images/pexels-andrea-piacquadio-837358.jpg",
    },
    {
      id: 3,
      name: "John",
      role: "Director of Eng.",
      img: "/images/pexels-andrea-piacquadio-845457.jpg",
    },
    {
      id: 4,
      name: "Melanie",
      role: "Software Engineer",
      img: "/images/pexels-andrea-piacquadio-762080.jpg",
    },
    {
      id: 5,
      name: "Corey",
      role: "The Devops guy",
      img: "/images/pexels-andrea-piacquadio-837358.jpg",
    },
    {
      id: 6,
      name: "Jake",
      role: "Senior Intern",
      img: "/images/pexels-andrea-piacquadio-845457.jpg",
    },
  ]);

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id == employee.id) {
        return { ...employee, name: newName, role: newRole };
      }
      return employee;
    });
    console.log(updatedEmployees);
    setEmployees(updatedEmployees);
  }
  function newEmployee(name, role, img) {
    let newEmployee = {
      id: uuidv4(),
      name,
      role,
      img,
    };
    setEmployees([...employees, newEmployee]);
  }

  const showEmployee = true;
  return (
    <div className="App">
      {showEmployee ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              const editEmployee = (
                <EditEmployee
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  updateEmployee={updateEmployee}
                />
              );
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  editEmployee={editEmployee}
                />
              );
            })}
          </div>
          <AddEmployee newEmployee={newEmployee} />
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
      ;
    </div>
  );
}

export default App;
