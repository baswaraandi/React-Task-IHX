import React from "react";
import List from "./List";

function Props() {
  const listItem = [
    {
      id: 1,
      content: "Belajar props",
    },
    {
      id: 2,
      content: "Belajar state",
    },
    {
      id: 3,
      content: "Belajar react",
    },
  ];

  return (
    <div>
      <h1>Todo List</h1>
      <List items={listItem} />
    </div>
  );
}

export default Props;
