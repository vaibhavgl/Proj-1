import { useState } from "react";

const NewPost = (props) => {
  const [newTitle, setTitle] = useState();
  const [newBody, setBody] = useState();
  const titleChange=(e)=>{
    setTitle(e.target.value);
  }
  const postChange=(e)=>{
    setBody(e.target.value);
  }
  const submitted=(e)=>{
    e.preventDefault();

   const newUserData={
    title:newTitle,
    body:newBody
   }
   props.onNew(newUserData);


  }
  return (
    <>
      <form style={{ textAlign: "center" }} onSubmit={submitted}>
        <h1>New Post</h1>
        <input placeholder="Enter  title" onChange={titleChange}></input>
        <br />
        <br /> <br />
        <input
          placeholder="Enter body of the post"
          onChange={postChange}
        ></input>

        <br /> <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default NewPost;
