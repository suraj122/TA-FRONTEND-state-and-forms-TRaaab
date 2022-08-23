import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shipping: {
        address: "",
        postal: "",
        city: "",
        country: "",
      },
      billing: {
        address: "",
        postal: "",
        city: "",
        country: "",
      },
      error: {
        address: "",
      },
      isSame: false,
    };
  }

  handleInput = ({ target }) => {
    let { name, value } = target;
    let error = this.state.error;

    switch (name) {
      case "address":
        error.address = value.length > 9 ? "" : "You need to enter at-least 8";
        break;

      default:
        break;
    }

    this.setState({
      shipping: { ...this.state.shipping, [name]: value },
    });
  };

  handleCheckbox = () => {
    this.setState({
      isSame: !this.state.isSame,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(
      this.state.shipping.address +
        this.state.shipping.postal +
        this.state.shipping.city +
        this.state.shipping.country
    );
  };

  render() {
    let { address } = this.state.error;
    let { shipping, billing, isSame } = this.state;
    let billingData = isSame ? shipping : billing;
    return (
      <>
        <form onSubmit={this.handleSubmit} className="container" action="">
          <legend>Shipping Address</legend>
          <fieldset>
            <label htmlFor="address">Address</label>
            <input
              onChange={this.handleInput}
              type="text"
              name="address"
              id="address"
              value={shipping.address}
              className={address && "error"}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="postal">Postal Code</label>
            <input
              onChange={this.handleInput}
              type="number"
              name="postal"
              id="postal"
              value={shipping.postal}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="city">City</label>
            <input
              onChange={this.handleInput}
              type="text"
              name="city"
              id="city"
              value={shipping.city}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="country">country</label>
            <input
              onChange={this.handleInput}
              type="text"
              name="country"
              id="country"
              value={shipping.country}
            />
          </fieldset>
          <input type="submit" value="Submit" />
        </form>
        <form onSubmit={this.handleSubmit} className="container" action="">
          <legend>Billing Address</legend>
          <label className="flex" htmlFor="checkbox">
            <input
              onChange={this.handleCheckbox}
              id="checkbox"
              type="checkbox"
            />
            same as shipping address?
          </label>

          <fieldset>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              value={billingData.address}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="postal">Postal Code</label>
            <input
              type="number"
              name="postal"
              id="postal"
              value={billingData.postal}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="city">City</label>
            <input type="text" name="city" id="city" value={billingData.city} />
          </fieldset>
          <fieldset>
            <label htmlFor="country">country</label>
            <input
              type="text"
              name="country"
              id="country"
              value={billingData.country}
            />
          </fieldset>
          <input type="submit" value="Submit" />
        </form>
      </>
    );
  }
}

export default Form;
