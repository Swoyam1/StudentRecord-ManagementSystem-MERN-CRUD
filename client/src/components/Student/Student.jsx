import React from "react";
import style from "./student.module.css";
import { Link } from "react-router-dom";

const Student = ({ _id, name, email, enrollnumber, removeStudent }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{enrollnumber}</td>
      <td className={style.button}>
        <button onClick={() => removeStudent(_id)} className={style.delete}>
          Delete
        </button>
        <Link to={{ pathname: "/edit", search: _id }}>
          <button className={style.edit}>Edit</button>
        </Link>
      </td>
    </tr>
  );
};

export default Student;
