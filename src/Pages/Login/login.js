import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./login.css";
import { useState } from "react";
import { login } from "../../Component/ReduxContainer/apiCall";
export default function Login() {
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
  };
  return (
    <div className="mainContainerForsignup">
      <div className="submainContainer">
        <div style={{ flex: 1, marginLeft: 150, marginBottom: "170px" }}>
          <p className="logoText">
            Test<span className="part">Book</span>
          </p>
          <p className="introtext">
            Aplicación realizada con las librerias de React, NodeJs
            <span className="part"> y MongoDB </span>
          </p>
        </div>
        <div style={{ flex: 3 }}>
          <p className="createaccountTxt">Iniciar sesión</p>
          <input
            type="email"
            name=""
            id="email"
            placeholder="Email"
            onChange={(e) => setemail(e.target.value)}
            className="inputText"
          />
          <input
            type="password"
            placeholder="******"
            name=""
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            className="inputText"
          />
          <button className="btnforsignup" onClick={handleClick}>
            Ingresar
          </button>
          <Link to={"/forgot/password"}>
            <p style={{ textAlign: "start", marginLeft: "30.6%" }}>
              Olvidaste tu contraseña
            </p>
          </Link>
          <Link to={"/signup"}>
            <p style={{ textAlign: "start", marginLeft: "30.6%" }}>
              Crear nueva cuenta{" "}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
