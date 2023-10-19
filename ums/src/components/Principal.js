import React, { useState } from "react";
import axios from "axios";
const Principal=()=>{
    const [employeeForm,setEmployeeForm]=useState(false);
    const [adminForm,setAdminForm]=useState(false);
    const [HRForm,setHRForm]=useState(false);
    const [staffForm,setStaffForm]=useState(false);
    const [HODForm,setHODForm]=useState(false);
    const [profForm,setProfForm]=useState(false);
    const [empform,setEmpform]=useState({
        fname:"",
        lname:"",
        phno:"",
        email:"",
    });

    const handleAddEmployee=()=>{
        setEmployeeForm(true);
    }

    const handleAddAdmin=()=>{
        setAdminForm(true);
    }

    const handleAddHR=()=>{
        setHRForm(true);
    }

    const handleAddStaff=()=>{
        setStaffForm(true);
    }

    const handleAddHOD=()=>{
        setHODForm(true);
    }

    const handleAddProf=()=>{
        setProfForm(true);
    }

    const handleSubmit=async(e)=>{
        try{
            const  response = await axios.post("http://localhost:3000/principal", empform);

            if (response.status === 200) {
              console.log("Employee added Successfully");
            } else {
              console.error("Failed to add Employee");
            }
          } catch (error) {
            console.error("Error:", error);
        }
    }

    return(
        <div>
        <button onClick={handleAddEmployee}>Add Employee</button>
        <button onClick={handleAddAdmin}>Add Admin</button>
        <button onClick={handleAddHR}>Add HR</button>
        <button onClick={handleAddStaff}>Add Staff</button>
        <button onClick={handleAddHOD}>Add HOD</button>
        <button onClick={handleAddProf}>Add Professor</button>
        </div>
    );
    {
        employeeForm && (
            <div>
                <form onSubmit={handleSubmit}>
                    <label>First Name:</label>
                    <input type="text"></input>
                    <label>Last Name:</label>
                    <input type="text"></input>
                    <label>Email:</label>
                    <input type="email"></input>
                    <label>Phone Number:</label>
                    <input type="number"></input>
                </form>
            </div>
        )
    };
    {
        adminForm && (
            <div>
                <form>
                    <label>First Name:</label>
                    <input type="text"></input>
                    <label>Last Name:</label>
                    <input type="text"></input>
                    <label>First Name:</label>
                    <input type="text"></input>
                    <label>Phone Number:</label>
                    <input type="number"></input>
                </form>
            </div>
        )
    };

    {
        HRForm && (
            <div>
                <form>
                    <label>First Name:</label>
                    <input type="text"></input>
                    <label>Last Name:</label>
                    <input type="text"></input>
                    <label>First Name:</label>
                    <input type="text"></input>
                    <label>Phone Number:</label>
                    <input type="number"></input>
                </form>
            </div>
        )
    };

    {
        staffForm && (
            <div>
                <form>
                    <label>First Name:</label>
                    <input type="text"></input>
                    <label>Last Name:</label>
                    <input type="text"></input>
                    <label>First Name:</label>
                    <input type="text"></input>
                    <label>Phone Number:</label>
                    <input type="number"></input>
                </form>
            </div>
        )
    };

    {
        HODForm && (
            <div>
                <form>
                    <label>First Name:</label>
                    <input type="text"></input>
                    <label>Last Name:</label>
                    <input type="text"></input>
                    <label>First Name:</label>
                    <input type="text"></input>
                    <label>Phone Number:</label>
                    <input type="number"></input>
                </form>
            </div>
        )
    }

    {
        profForm && (
            <div>
                <form>
                    <label>First Name:</label>
                    <input type="text"></input>
                    <label>Last Name:</label>
                    <input type="text"></input>
                    <label>First Name:</label>
                    <input type="text"></input>
                    <label>Phone Number:</label>
                    <input type="number"></input>
                </form>
            </div>
        )
    }
}

export default Principal;