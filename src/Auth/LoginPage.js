import React, { useState } from "react";
import axios from "axios";

export default function LoginPage() {
  // State variables to store user input
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 const [error, setError] = useState("");


  // Function to handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try{
      // Here you can add your logic to handle the login process, like sending the data to a server for authentication
      const response = await axios.post("http://localhost:8080/api/v1/login", {
        username,
        password,
      });
      // Handle successful login
      console.log("Login successful:", response.data);
      // Reset the form and error state
      setUsername("");
      setPassword("");
      setError("");
    } catch(error){
      console.error("Login failed:", error);
      setError("Invalid username or password");
    }
    // Reset the form after submission
    setUsername("");
    setPassword("");
  };




  return (
    <div className="bg-orange-400 pt-40 h-[100vh]">
      <h2>Login Page</h2>
      
      <form className='flex flex-col justify-center items-center gap-y-4' onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
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
        <button type="submit">Login</button>
      </form>
      <div>Not a user yet? <a href="/register">Register</a></div>
    </div>
  );
};
  
