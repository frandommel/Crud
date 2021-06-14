import React from "react"
import Axios from 'axios';

const Form = ({ employee, setEmployee, setEmployeeList, employeeList }) =>{

    const handleSubmit = (event) =>  //guardo info cuando agreega
    {
        event.preventDefault();
        setEmployee({ ...employee});
        addEmployee();
        event.target.reset();    //reseto el form

    }
    // despues de la coma ya es el body objetc
    const addEmployee = () =>{
        Axios.post('http://localhost:3001/create',{
            name: employee.name,
            age:employee.age,
            country:employee.country,
            position:employee.position
        }).then(()=>{
           setEmployeeList([...employeeList,   //otra forma de pushear al arreglo
            {
                name: employee.name,
                age:employee.age,
                country:employee.country,
                position:employee.position
           }])
        })     
    };
    const handleChange = (event)=>{   //seteo el form
        setEmployee({
            ...employee,
            [event.target.name]: event.target.value,
        })
    }

    return(
        <>
            <form class="form-group container App" onSubmit={handleSubmit}>

                <label >Nombre</label>
                <input type="text" class="form-control" name="name" onChange={handleChange}/>

                <label >Edad</label>
                <input type="number" class="form-control" name="age" onChange={handleChange}/>

                <label >Pais</label>
                <input type="text" class="form-control" name="country" onChange={handleChange}/>

                <label >Posicion</label>
                <input type="text" class="form-control" name="position" onChange={handleChange}/>

                <button type="submit" className="btn btn-success mt-3">Agregar empleado</button>

            </form>
        </>
    );
}

export default Form;