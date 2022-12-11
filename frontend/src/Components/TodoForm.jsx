import React, { useRef } from "react";

const TodoForm = () => {
    const todo = useRef()
    const submitTodo=(e)=>{
        e.preventDefault();
        console.log(todo.current.value)
    }
  return (
    <form style={{ display: "flex", gap: "10px" }}>
      <input
        style={{
          fontSize: "20px",
          color: "#2c3e50",
          width: "100%",
          border: "none",
          outline: "none",
          borderBottom: "1px solid #2c3e50",
          padding: "5px",
        }}
        ref ={todo}
        type="text"
        placeholder="Enter a new todo..."
      />
      <input
        style={{
          width: "20%",
          color: "#2c3e50",
          background: "tomato",
          border: "none",
          borderRadius: "7px",
          cursor: "pointer",
        }}
        type="submit"
        onClick={submitTodo}
      />
    </form>
  );
};

export default TodoForm;
