import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
const LoginContext = createContext();

function LoginProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isAdmin, setIsAdmin = useState(false);
  const [activeUser, setActiveUser] = useState({ user: "guest", id: "none" });
const [error, setError] = useState("");
const [token, setToken] = useState({});
 

    // useEffect(() => {
    //   if (token) {
    //     changeLoggedIn(true);
    //   } else if (!token) {
    //     changeLoggedIn(false);
    //   }
    // }, [token, changeLoggedIn]);

  //   useEffect(() => {
  //     setActiveUser(parseJwt(token));
  //   }, [token]);

    function changeLoggedIn(value) {
      if (value === false) {
        sessionStorage.remove("token", { path: "/login" });
      } else {
        setIsLoggedIn(value);
      }
    }


  useEffect(() => {
    const sessionToken = sessionStorage.getItem("token");
    const decoded = jwtDecode(sessionToken);
    setToken(decoded);
    console.log(decoded);
  }, []);

  useEffect(() => {
    getUser(token.id);
  }, [token]);

  useEffect(() => {
    console.log(activeUser);
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
    <LoginContext.Provider
      value={[activeUser, changeLoggedIn, isLoggedIn]}
    >
      {props.children}
    </LoginContext.Provider>
  );
}

export { LoginContext, LoginProvider };
