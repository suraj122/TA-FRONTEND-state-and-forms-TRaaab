import React from "react";

function Signup(props) {
  return (
    <div>
      <h6>step 1/3</h6>
      <h2>Signup</h2>
      <div>
        <fieldset>
          <label htmlFor="first">First Name</label>
          <input
            value={props.state.first}
            type="text"
            name="first"
            id="first"
            onChange={props.change}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="last">Last Name</label>
          <input
            onChange={props.change}
            value={props.state.last}
            type="text"
            name="last"
            id="last"
          />
        </fieldset>
      </div>
      <div>
        <fieldset>
          <label htmlFor="date">Date of Birth</label>
          <input
            onChange={props.change}
            value={props.state.date}
            type="date"
            name="date"
            id="date"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="email">Email Address</label>
          <input
            onChange={props.change}
            value={props.state.email}
            type="text"
            name="email"
            id="email"
            className={props.email && "error"}
          />
        </fieldset>
      </div>
      <fieldset>
        <label htmlFor="address">Address</label>
        <input
          onChange={props.change}
          value={props.state.address}
          type="text"
          name="address"
          id="address"
        />
      </fieldset>
    </div>
  );
}

export default Signup;
