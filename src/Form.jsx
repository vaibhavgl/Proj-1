import { useState } from "react";
import axios from "axios";

const Form = (props) => {
  const [enteredEmail, setEmail] = useState("");
  const [userId, setUserId] = useState("");

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  async function submitHandler(e) {
    e.preventDefault();
    const userData = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const user = userData.data.filter((curr) => curr.email === enteredEmail);
    //no array

    user.length === 0 ? alert("wrong Email") : setUserId(user[0].id);
   
    if(user.length===1){
      props.onGetId(userId);
    }
     
    
  }

  return (
    <div style={{ textAlign: "center" }}>
      <form onSubmit={submitHandler}>
        <h1>Write your email here.</h1>
        <input
          type="text"
          placeholder="Enter your email here"
          value={enteredEmail}
          onChange={emailHandler}
        ></input>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};
export default Form;
