import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Register({ onRegister }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(false);

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    const isRegistered = onRegister(formData.username, formData.password);

    if (isRegistered) {
      setMessage("Registration successful! You can now log in.");
      setIsSuccess(true);
    } else {
      setMessage("User already exists!");
    }
  };

  return (
    <div className="container">
      <h1>Sign Up</h1>
      {message && (
        <p className="message" style={{ color: isSuccess ? "green" : "red" }}>
          {message}
        </p>
      )}
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="input"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="input"
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="input"
          required
        />
        <button type="submit" className="button">
          Sign Up
        </button>
      </form>
      <p className="switchText">
        Already have an account?{" "}
        <Link to="/auth" className="switchButton">
          Log In
        </Link>
      </p>
      <div className="background-image"></div>
    </div>
  );
}
