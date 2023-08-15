"use client";

import { useState } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import useEditStore from "@libs/useEditState";

export default function Todo({ removeTodo, todos, completeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };
  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return (
    <>
      {todos.map((todo, index) => (
        <div
          className="shadow-lg flex gap-2 items-center justify-between p-3 w-full md:w-[400px] mx-auto rounded-md bg-gradient-to-r from-blue-400 to-green-500 hover:from-pink-500 hover:to-yellow-500 hover:text-black cursor-pointer text-white"
          key={index}
        >
          <div
            key={todo.id}
            onClick={() => completeTodo(todo.id)}
            className={`capitalize ${
              todo.isComplete === true ? "line-through" : ""
            }`}
          >
            {todo.text}
          </div>
          <div className="flex">
            <RiCloseCircleLine
              onClick={() => removeTodo(todo.id)}
              className="w-6 h-6 "
            />
            <TiEdit
              onClick={() => setEdit({ id: todo.id, value: todo.text })}
              className="w-6 h-6"
            />
          </div>
        </div>
      ))}
    </>
  );
}
