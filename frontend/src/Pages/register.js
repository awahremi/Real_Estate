import React from "react";

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      age: 0,
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(this.state);
  };

  handleSubmit = (event) => {
    event.preventDefault();

    //make api request to submit data

    this.setState({
      firstName: "",
      lastName: "",
      age: "",
      email: "",
      password: "",
    });
  };

  render() {
    return (
        <div className="register-form">
      <form onSubmit={this.handleSubmit}>
        <input
          name="firstName"
          value={this.state.firstName}
          placeholder="Enter first name"
          onChange={this.handleChange}
        />
        <br />
        <br />
        <input
          name="lastName"
          value={this.state.lastName}
          placeholder="Enter last name"
          onChange={this.handleChange}
        />
        <br />
        <br />
        <input
          type="number"
          value={this.state.age}
          name="age"
          placeholder="Enter your age"
          onChange={this.handleChange}
        />
        <br />
        <br />
        <input
          type="email"
          name="email"
          value={this.state.email}
          placeholder="Enter email"
          onChange={this.handleChange}
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          value={this.state.password}
          placeholder="Enter password"
          onChange={this.handleChange}
        />
        <br />
        <br />
        <button type="submit">Register</button>
      </form>
      </div>
    );
  }
}

export default RegisterForm;
