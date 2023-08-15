"use client";

import { useState } from "react";

export default function TodoForm(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-row mx-auto">
        <input
          value={input}
          type="text"
          name="text"
          placeholder="Add a todo"
          className="border p-3 rounded-l-lg"
          onChange={handleChange}
        />
        <button className="text-white font-semibold bg-green-500 p-4 rounded-r-lg">
          Add
          {/* <p>{edited === true ? "Edit" : "Add"}</p> */}
        </button>
      </form>
    </>
  );
}
