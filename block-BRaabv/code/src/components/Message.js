import React from "react";

function Message(props) {
  return (
    <div>
      <h6>step 2/3</h6>
      <h2>Message</h2>
      <div>
        <fieldset>
          <label htmlFor="first">Message</label>
          <textarea
            onChange={props.change}
            value={props.state.Message}
            name="message"
            id="message"
            cols="30"
            rows="10"
          ></textarea>
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

export default Message;
