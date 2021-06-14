import { useEffect, useState } from 'react';
import './App.css';
import Form from "./components/Form";
import Axios from 'axios';
function App() {

  const [employee, setEmployee] = useState({
    name:"",
    age:0,
    country:"",
    position:""
  })
  
  const[employeeList, setEmployeeList] = useState([]);

  const handleClick = () =>{
    Axios.get('http://localhost:3001/employees')
      .then(response =>{
      return response.data;
    }).then(data =>{
        setEmployeeList(data);
    }).catch(err =>{
        console.log('error' + err.message());
    });
  }
  
  return (
      <>  
        <h1 className="display-4 text-center mb-4">CRUD</h1>
        <Form employee={ employee } setEmployee= {setEmployee} setEmployeeList={setEmployeeList} employeeList={employeeList}/>
        <hr/>
        <div className="text-center">
            <button type="button" onClick={handleClick} className="btn btn-success mt-3 my-2">Mostrar empleados</button>
        </div>

        {employeeList.map(employee =>{
          return(
          <div className="card" key={ employee.name }>
              <div className="card-body">
                  <h5 className="card-title">{ employee.name }</h5>
                  <p className="card-text">{ employee.age } anios, pertenece a { employee.country } y trabaja de { employee.position }</p>
                  <button type="button" className="btn btn-warning mt-3">Editar empleados</button>
                  <button type="button"  className="btn btn-danger mt-3 mx-4">Borrar empleados</button>
              </div>
          </div>
          );
        })}
      
      </>
  );
}

export default App;
