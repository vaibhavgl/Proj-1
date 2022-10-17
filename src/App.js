import { useState } from "react";
import "./App.css";
import Form from "./Form";
import List from "./List";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [userId, setUserId] = useState();
  function idHandler(userId) {
    // console.log(userId);
    setUserId(userId);
    setIsLogged(true);
  }

  return (
    <>
      <h1>Welcome to the world of blogs.</h1>
      <Form onGetId={idHandler} />
      {isLogged == true ? <List id={userId} /> : <></>}
    </>
  );
}

export default App;
