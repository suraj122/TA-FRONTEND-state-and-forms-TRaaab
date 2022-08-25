import React from "react";

function Header(props) {
  return (
    <header className="product-wrapper flex">
      <h5>{props.total} prodcts found</h5>
      <label htmlFor="">
        sort by:
        <select onChange={props.sort} name="" id="">
          <option value="select">select</option>
          <option value="highest">Lowest to Highest</option>
          <option value="lowest">Highest to Lowest</option>
        </select>
      </label>
    </header>
  );
}

export default Header;
