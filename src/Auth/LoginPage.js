import React, { useState , useContext} from "react";
import axios from "axios";
import { LoginContext } from "../Context/LoginContext";


export default function LoginPage() {
  // State variables to store user input
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 const [error, setError] = useState("");
const [activeUser, isLoggedIn, changeLoggedIn] = useContext(LoginContext);

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
      sessionStorage.setItem("token", response.data.token);
      changeLoggedIn(true)
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
    <div className="bg-orange-400 pt-40 h-[100vh] flex justify-start items-center flex-col gap-y-8">
      <h2>Login to your Account</h2>

      <form
        className="flex flex-col justify-center items-center gap-y-4"
        onSubmit={handleFormSubmit}
      >
        <div className="flex gap-x-4">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="flex gap-x-4">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className='bg-slate-300 rounded-md py-4 w-[100px]' type="submit">Login</button>
      </form>
      <div>
        Not a user yet? <a href="/register">Register</a>
      </div>
    </div>
  );
};
  
