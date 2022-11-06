import React, { Children, useState, useContext } from "react";
import { createContext } from "react";

const userContext = React.createContext();
const userToggleContext = React.createContext();


function UserProvider() {

  const [user, setUser] = useState(null);

  const Enviar = () => {
    if (user) {
      setUser(null);
    } else {
      setUser({
        name: 'brian',
      })
    }
  }

  return (
    <userContext.Provider value={user}>
      <userToggleContext.Provider value={Enviar}>
        {Children}
      </userToggleContext.Provider>
    </userContext.Provider>
  );
}
export default UserProvider;