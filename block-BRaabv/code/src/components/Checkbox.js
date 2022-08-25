import React from "react";

function Checkbox(props) {
  return (
    <div>
      <h6>step 2/3</h6>
      <h2>Checkbox</h2>
      <div>
        <fieldset>
          <label htmlFor=""></label>
          <input type="checkbox" />
          <label htmlFor=""></label>
          <input type="checkbox" />
        </fieldset>
        <fieldset>
          <label htmlFor="">
            <input type="radio" />
            The number one choice
          </label>
          <label htmlFor="">
            <input type="radio" />
            The number two choice
          </label>
        </fieldset>
      </div>
    </div>
  );
}

export default Checkbox;
