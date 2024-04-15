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
        "https://rebound-shoes-api.adaptable.app/register",
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
    <div className="bg-orange-400 pt-40 h-[100vh] flex justify-start items-center flex-col gap-y-8">
      <h2>Registration Page</h2>

      <form
        className="flex flex-col justify-center items-start gap-y-4"
        onSubmit={handleFormSubmit}
      >
        <div className="flex flex-col gap-x-4">
          <label htmlFor="username">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col gap-x-4">
          <label htmlFor="username">Create a Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col gap-x-4">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col gap-x-4">
          <label htmlFor="password2">Verify Password:</label>
          <input
            type="password"
            id="password2"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            required
          />
        </div>
        <button
          className="bg-slate-300 rounded-md py-4 w-[100px]"
          type="submit"
        >
          Register
        </button>
      </form>
      <div>
        Already a user? <a href="/login">Login here</a>
      </div>
    </div>
  );
}
