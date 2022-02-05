import { useState } from "react";
import AddUser from "./component/User/AddUser";
import UsersList from "./component/User/UsersList";
import React from "react";

function App() {
  const [usersList, setUsersList] = useState([]);
  const onAddUserHandler = (userName, userAge) => {
    setUsersList((prevState) => {
      return [...prevState, {name: userName, age: userAge,id:Math.random().toString()}]}
    )
  }
  return (
    <div>
      <AddUser onAddUser = {onAddUserHandler}/>
      <UsersList list = {usersList}/>
    </div>
  );
}

export default App;