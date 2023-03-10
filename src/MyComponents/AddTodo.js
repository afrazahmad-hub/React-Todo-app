import React, { useState } from "react";

function AddTodo(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();

    if (!title || !desc) {
      alert("Can not add empty list.");
    } else {
      props.addTodo(title, desc);
      setTitle(" ");
      setDesc("");
    }
  };
  return (
    <form onSubmit={submit} className="container my-3">
      <h2 className="my-3">
        <b>Add Todo</b>
      </h2>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Todo Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="desc" className="form-label">
          Todo Descriptions
        </label>
        <input
          type="text"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="form-control"
          id="desc"
        />
      </div>

      <button type="submit" className="btn btn-sm btn-success">
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
