import React, { useState } from "react";
import css from "./App.css";
import { Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { singupSchema } from "../schemas";

const initialValues = {
  Name: "",
  Phonenumber: "",
  Email: "",
};
const FirstPage = () => {
  const [Name, setName] = useState("");
  const [Phonenumber, setPhonenumber] = useState("");
  const [Email, setEmail] = useState("");

  const navigate = useNavigate();

  function handleclick(event: any) {
    event.preventDefault();
    if (!Name || !Phonenumber || !Email) {
      alert("please fill all filed");
    } else {
      localStorage.setItem("Name", JSON.stringify(Name));
      localStorage.setItem("Phonenumber", JSON.stringify(Phonenumber));
      localStorage.setItem("Email", JSON.stringify(Email));
      alert("Sucessfully login");
      navigate("secound");
    }
  }

  return (
    <div>
      {" "}
      FirstPage
      <form className="input" onSubmit={handleclick}>
        Name
        <input
          type="Input"
          placeholder="Enter name"
          className="input_box"
          name="Name"
          id="Name"
          value={Name}
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        Phonenumber
        <input
          type="Input"
          placeholder="Enter Phonenumber"
          className="input_box"
          id="Phonenumber"
          name="Phonenumber"
          value={Phonenumber}
          onChange={(event) => setPhonenumber(event.target.value)}
          required
        />
        <br />
        Email
        <input
          type="Input"
          placeholder="Enter Email"
          className="input_box"
          id="Email"
          name="Email"
          value={Email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <br />
        <button className="input_submit" type="submit" onClick={handleclick}>
          submit
        </button>
        <br />
      </form>
      ;
    </div>
  );
};

export default FirstPage;
