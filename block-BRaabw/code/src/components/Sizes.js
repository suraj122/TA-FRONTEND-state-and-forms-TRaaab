import React from "react";

function Sizes(props) {
  return (
    <aside className="sidebar">
      <ul className="sizes">
        {props.sizes.map((size) => (
          <li onClick={() => props.filter(size)} key={size}>
            {size}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sizes;
