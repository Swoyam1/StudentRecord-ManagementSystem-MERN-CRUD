import React, { useEffect, useState } from "react";
import axios from "axios";
import { PropagateLoader } from "react-spinners";
import style from "./home.module.css";
import SearchStudent from "../../components/SearchStudent/SearchStudent";
import Student from "../../components/Student/Student";

const Home = () => {
  const [data, setData] = useState(null);
  const [allStudents, setAllStudents] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("hello");
    const fetchData = async () => {
      try {
        const students = await axios("/api/students");
        setData(students.data);
      } catch (err) {
        console.log(err);
        setError(err.message);
      }
    };
    fetchData();
  }, []);

  const removeStudent = async (id) => {
    try {
      const studentRemoved = await axios.delete(`/api/students/${id}`);
      const students = await axios("/api/students/");
      setData(students.data);
    } catch (err) {
      setError(err.message);
    }
  };

  const searchStudents = async (username) => {
    let allStudentsData = [...data.students];
    if (allStudents === null) {
      setAllStudents(allStudentsData);
    }

    let students = data.students.filter(({ name }) =>
      name.toLowerCase().includes(username.toLowerCase())
    );
    if (students.length > 0) {
      setData({ students });
    }

    if (username.trim() === "") {
      setData({ students: allStudents });
    }
  };

  let assignedStudentsData;
  if (data) {
    assignedStudentsData =
      data.students &&
      data.students.map((student) => (
        <Student key={student._id} {...student} removeStudent={removeStudent} />
      ));
  } else {
    return (
      <div className={style.spinner}>
        <PropagateLoader color={"#333"} />
      </div>
    );
  }
  if (data !== null) {
    if (!data.students.length) {
      return <h1>No Students!</h1>;
    }
  }

  return (
    <div className={style.container}>
      <h1>Students:</h1>
      <SearchStudent searchStudents={searchStudents} />
      <table className={style.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Enrollment Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{assignedStudentsData}</tbody>
      </table>
    </div>
  );
};

export default Home;
