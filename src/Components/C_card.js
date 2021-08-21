import React from "react";

const C_card = (props) => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <div class="row-cols-1">
        <h3>{props.name}</h3>
      </div>
      <div>
        <h>{props.phone}</h>
      </div>
      <div>
        <h>{props.website}</h>
      </div>
    </div>
  );
};

export default C_card;
