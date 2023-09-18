import React, { useState } from "react";
import style from "./searchStudent.module.css";

const SearchStudent = ({ searchStudents }) => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setName(value);
    searchStudents(value);
  };

  return (
    <input
      type="text"
      placeholder="Filter by name..."
      name="name"
      value={name}
      onChange={handleChange}
      className={style.input}
    />
  );
};

export default SearchStudent;
