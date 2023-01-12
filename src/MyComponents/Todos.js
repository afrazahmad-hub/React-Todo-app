import React from "react";
import Todo from "./Todo";

function Todos(props) {
  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto",
  };
  return (
    <div className="container" style={myStyle}>
      <h2 className="my-3">
        <b>Todos List</b>
      </h2>

      {props.todo.length == 0 ? (
        <b className="text-red">No Todo list, would like to ADD ?</b>
      ) : (
        props.todo.map((_todo) => {
          return (
            <Todo todo={_todo} key={_todo.sno} onDelete={props.onDelete} />
          );
        })
      )}
    </div>
  );
}

export default Todos;
