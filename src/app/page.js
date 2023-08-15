import Head from "next/head";
import Todo from "../../libs/screen/Todo";
import TodoList from "@libs/screen/TodoList";

export default function Home() {
  return (
    <div className="bg-slate-300 h-screen">
      <TodoList />
    </div>
  );
}
