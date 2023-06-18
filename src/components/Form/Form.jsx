import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ValidateEmail, CheckPassword } from "./Validations";
import "./Form.css";

export default function Form() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const isValidEmail = ValidateEmail(userData.email);
    const isStrongPassword = CheckPassword(userData.password);

    setErrors({
      email: !isValidEmail,
      password: !isStrongPassword,
    });

    if (isValidEmail && isStrongPassword) {
      navigate("/home");
    }
  };

  return (
    // <div className = 'FormContainer'>
    //   <img src = 'https://wallpapercave.com/wp/wp2461863.png' alt = 'Imagen de Rick y Morty'/>
    //   <div className="Form">
    //     <form onSubmit={handleFormSubmit}>
    //       <label>Email </label>
    //       <input name="email" value={userData.email} onChange={handleChange} />
    //       {errors.email && <p>Invalid email</p>}
    //       <hr />
    //       <label>Password </label>
    //       <input
    //         name="password"
    //         value={userData.password}
    //         onChange={handleChange}
    //       />
    //       {errors.password && <p>Weak password</p>}
    //       <hr />

    //       <button type="submit">Let´s go!</button>
    //     </form>
    //   </div>
    // </div>
    <div className="Body">
      <div class="center">
        <h1>Need Help? Can do!</h1>
        <form onSubmit={handleFormSubmit}>
          <div class="inputbox">
            <input
              type="text"
              required="required"
              name="email"
              value={userData.email}
              onChange={handleChange}
            />
            <span>Email</span>
          </div>
          <div class="inputbox">
            <input
              type="text"
              required="required"
              name="password"
              value={userData.password}
              onChange={handleChange}
            />
            <span>Password</span>
          </div>
          <div class="inputbox">
            <input type="submit" value="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
