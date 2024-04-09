import React, { useState } from "react";
import axios from "axios";

export default function LoginPage() {
  // State variables to store user input
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");

  // Function to handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log("Passwords do not match");
      setError("Passwords do not match");
      return;
    }
    try {
      // Here you can add your logic to handle the login process, like sending the data to a server for authentication
      const response = await axios.post(
        "http://localhost:8080/api/v1/register",
        {
          username,
          email,
          password,
        }
      );
      // Handle successful login
      console.log("Registration successful:", response.data);
      // Reset the form and error state
      setUsername("");
      setEmail("");
      setPassword("");
      setPassword2("");
      setError("");
    } catch (error) {
      console.error("Registration failed:", error);
      setError("Invalied field, try again.");
    }
    // Reset the form after submission
    setUsername("");
    setPassword("");
    setPassword2("");
    setEmail("");
  };

  return (
    <div className="flex flex-col justify-center items-center gap-y-4">
      <h2>Registration Page</h2>

      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="username">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="username">Create a Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="password2">Verify Password:</label>
          <input
            type="password"
            id="password2"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <div>
        Already a user? <a href="/login">Login here</a>
      </div>
    </div>
  );
}
