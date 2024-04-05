import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

function App() {
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState(
    [
      {name: "Caleb", role:"intern", img:"/images/pexels-andrea-piacquadio-762080.jpg"},
      {name: "Sal", role:"Manager", img:"/images/pexels-andrea-piacquadio-837358.jpg"},
      {name: "John", role:"Director of Eng.", img:"/images/pexels-andrea-piacquadio-845457.jpg"},
      {name: "Melanie", role:"Software Engineer", img:"/images/pexels-andrea-piacquadio-762080.jpg"},
      {name: "Corey", role:"The Devops guy", img:"/images/pexels-andrea-piacquadio-837358.jpg"},
      {name: "Jake", role:"Senior Intern", img:"/images/pexels-andrea-piacquadio-845457.jpg"}
    ]
  )
  const showEmployee = true;
  return (
    <div className="App">
      {showEmployee ? (
      <>
      <input type='text' onChange={(e) => {
        console.log(e.target.value);
        setRole(e.target.value);
      }} />
      <div className='flex flex-wrap justify-center'>
          {employees.map((employee) => {
            return (
            <Employee 
              key={uuidv4()}
              name={employee.name} 
              role={employee.role} 
              img={employee.img} 
            />
            )
          })}
      </div>
      </>
      ) : (
        <p>You cannot see the employees</p>
      )
      };
    </div>
  );
}

export default App
