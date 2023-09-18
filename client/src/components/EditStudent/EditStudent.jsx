import React, { useEffect, useState } from "react";
import style from "./editStudent.module.css";
// import { withRouter } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const EditStudent = () => {
  const [data, setData] = useState({
    id: "",
    name: "",
    email: "",
    enrollnumber: "",
    response: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = window.location.href;
        let idIndex = url.indexOf("?");
        let id = url.substring(idIndex + 1);
        // console.log(id);
        const students = await axios(`/api/students/${id}`);
        const { name, email, enrollnumber } = students.data.student;
        setData({ id, name, email, enrollnumber });
      } catch (err) {
        setData({ response: "Student not found!" });
      }
    };
    fetchData();
  }, [window.location.href]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updateStudent = await axios.put(`/api/students/${data.id}`, {
        name: data.name,
        email: data.email,
        enrollnumber: data.enrollnumber,
      });
      toast(updateStudent.data.message, {
        type: toast.TYPE.INFO,
        autoClose: 3000,
      });
    } catch (err) {
      toast(err.message, { type: toast.TYPE.ERROR, autoClose: 3000 });
    }
  };

  return (
    <div className={style.container}>
      <h1>Edit Student:</h1>
      <form className={style.form} onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter student's name..."
          value={data.name}
          onChange={handleChange}
          required
          id="name"
        />
        <label htmlFor="email">
          Email: <b>(must be a valid email)</b>
        </label>
        <input
          type="text"
          name="email"
          placeholder="Enter student's email"
          value={data.email}
          onChange={handleChange}
          required
          id="email"
        />
        <label htmlFor="enrollnumber">Enrollment Number:</label>
        <input
          type="number"
          name="enrollnumber"
          placeholder="Enter student's enrollment number"
          value={data.enrollnumber}
          onChange={handleChange}
          id="enrollnumber"
        />
        <div className={style.button}>
          <button className={style.submit}>Submit</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default EditStudent;
