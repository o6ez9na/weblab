import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login({ users }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
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

    const user = users.find(
      (user) =>
        user.username === formData.username &&
        user.password === formData.password
    );

    if (user) {
      setMessage("Login successful!");
      setIsSuccess(true);
    } else {
      setMessage("User not found or incorrect password!");
    }
  };

  return (
    <>
      <div className="container">
        <h1>Log In</h1>
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
          <button type="submit" className="button">
            Log In
          </button>
        </form>
        <p className="switchText">
          Don't have an account?{" "}
          <Link to="/register" className="switchButton">
            Sign Up
          </Link>
        </p>
      </div>
      <div className="background-image"></div>
    </>
  );
}
