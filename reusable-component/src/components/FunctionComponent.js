import React from "react";

const Greet = (props) => {
  // console.log(props);
  return (
    <div>
      <h1>
        My {props.id} name is {props.name}
      </h1>
      <p>{props.children}</p>
    </div>
  );
};

export default Greet;
