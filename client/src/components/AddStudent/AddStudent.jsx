import React, { useState } from "react";
import style from "./addStudent.module.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddStudent = () => {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    enrollnumber: "",
  });

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const addStudent = async (e) => {
    e.preventDefault();
    try {
      const newStudent = await axios.post("/api/students/", inputData);
      toast(
        "Student " + newStudent.data.newStudent.name + " created successfully",
        { type: toast.TYPE.SUCCESS, autoClose: 3000 }
      );
    } catch (err) {
      toast(err.message, { type: toast.TYPE.ERROR, autoClose: 3000 });
    }
  };

  return (
    <div className={style.container}>
      <h1>Add Student:</h1>
      <form className={style.form} onSubmit={addStudent}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter student's name..."
          onChange={handleChange}
          className={style.studentInput}
          // value={a}
          required
          minLength="3"
          maxLength="33"
          id="name"
        />
        <label htmlFor="email">
          Email: <b>(must be a valid email)</b>
        </label>
        <input
          type="email"
          name="email"
          placeholder="Enter student's email..."
          onChange={handleChange}
          className={style.studentInput}
          // value={a}
          required
          id="email"
        />
        <label htmlFor="enrollNumber">Enrollment Number:</label>
        <input
          type="number"
          name="enrollnumber"
          placeholder="Enter student's enrollment number..."
          onChange={handleChange}
          className={style.studentInput}
          // value={a}
          required
          id="enrollnumber"
        />
        <div className={style.button}>
          <button type="submit" className={style.submit}>
            Submit
          </button>
          <button type="reset" className={style.reset}>
            Reset
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddStudent;
