import React from "react";

const List = (props) => {
  return (
    <div>
      {props.items.map((item) => (
        <h4 key={item.id}>
          {item.id}. {item.content}
        </h4>
      ))}
    </div>
  );
};

export default List;
