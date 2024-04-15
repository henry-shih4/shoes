import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
const LoginContext = createContext();

function LoginProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //   const [isAdmin, setIsAdmin = useState(false);
  const [activeUser, setActiveUser] = useState({ });
  const [token, setToken] = useState({});

  useEffect(() => {
if (!token) {
  setIsLoggedIn(false);
} else if(token){
    setIsLoggedIn(true)
    getUser(token.id)
}
  }, [token]);

  function handleLogout(){
    
        changeLoggedIn(false);
        setActiveUser({})
        window.location.reload();
    
  }

  function changeLoggedIn(value) {
    if (value === false) {
      localStorage.removeItem("token", { path: "/login" });
    } else {
      setIsLoggedIn(value);
    }
  }

  useEffect(() => {
    const sessionToken = localStorage.getItem("token");
    console.log(sessionToken);
    if (sessionToken) {
      const decoded = jwtDecode(sessionToken);
      setToken(decoded);
      console.log(decoded);
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);


  useEffect(() => {
    console.log(isLoggedIn);
    console.log(token);
    console.log(activeUser)
  });

  async function getUser(id) {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/users/${id}`
      );
      let data = response.data.data;
      console.log(data);
      setActiveUser(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <LoginContext.Provider value={[activeUser, changeLoggedIn, isLoggedIn, handleLogout]}>
      {props.children}
    </LoginContext.Provider>
  );
}

export { LoginContext, LoginProvider };
