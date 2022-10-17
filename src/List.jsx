import axios from "axios";
import { useState } from "react";
import NewPost from "./NewPost";

const List = (props) => {
  const [arryPost, setArrayPost] = useState([]);

  async function clickHandler() {
    const allUserPost = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const userPost = allUserPost.data.filter(
      (curr) => curr.userId === props.id
    );
    setArrayPost(userPost);
    // console.log(arryPost);
  }
  function clickHandler2(obj){
    console.log(obj);
    setArrayPost((prev)=>{return [...prev,obj]})
   
  }

  return (
    <>
      <h1>Hi there your id is {props.id}</h1>
      <button onClick={clickHandler}>All Post</button>
      <ol>
        {arryPost.map((curr) => {
          return (
            <li style={{textalign:"center"}}>
              <h2>{curr.title}</h2>
              <h5>{curr.body}</h5>
            </li>
          );
        })}
      </ol>
      <NewPost onNew={clickHandler2}/>
    </>
  );
};
export default List;
