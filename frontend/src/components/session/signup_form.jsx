import React from 'react';
import { Link } from 'react-router-dom';
import Particles from "react-tsparticles";


class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      password2: "",
      name: "",
      errors: {},
    };

    this.handleEmailErr = this.handleEmailErr.bind(this);
    this.handleNameErr = this.handleNameErr.bind(this);
    this.handlePasswordErr = this.handlePasswordErr.bind(this);
    this.handlePassword2Err = this.handlePassword2Err.bind(this);
    this.handleDropdown = this.handleDropdown.bind(this);
    this.handleDropdownp = this.handleDropdownp.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }



  update(field) {
    return (e) => {
      this.props.clearSessionErrors();

      this.setState({
        [field]: e.currentTarget.value,
      });
    }
  }

  handleDropdown(e) {
    this.setState({ language: e.target.value });
  }

  handleDropdownp(e) {
    this.setState({ pronouns: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      name: this.state.name,
      password: this.state.password,
      password2: this.state.password2,
    };
    this.props.signup(user);
  }


  handleEmailErr() {
    let field = document.getElementById("signup-email");
    if (field === null) return;

    if (this.props.errors.email) {
      field.className = "signup-yes-errors-input";
      return "Enter a valid email";
    } else {
      field.className = "signup-no-errors-input";
    }
  }


  handleNameErr() {
    let field = document.getElementById("signup-name");
    if (field === null) return;

    if (this.props.errors.name) {
      field.className = "signup-yes-errors-input";
      return "Name field is required";
    } else {
      field.className = "signup-no-errors-input";
    }
  }

  handlePasswordErr() {
    let field = document.getElementById("signup-password-1");
    if (field === null) return;

    if (this.props.errors.password) {
      field.className = "signup-yes-errors-input";
      return "Password must be at least 6 characters";
    } else {
      field.className = "signup-no-errors-input";
    }
  }

  handlePassword2Err() {
    let field = document.getElementById("signup-password-2");
    if (field === null) return;

    if (this.props.errors.password2) {
      field.className = "signup-yes-errors-input";
      return "Passwords must match";
    } else {
      field.className = "signup-no-errors-input";
    }
  }

  componentDidMount() {
    this.props.clearSessionErrors();
    let inputs = document.getElementsByClassName("signup-yes-errors-input");
    Array.from(inputs).forEach(input => input.className = "signup-no-errors-input");
  }


  render() {

    return (
      <div className="signup-form-container">
        <Particles
          id="tsparticles"
          options={{
            background: {
              color: {
                value: "00008B",
              },
            },
            fpsLimit: 60,
            interactivity: {
              detectsOn: "canvas",
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
        />
        <form onSubmit={this.handleSubmit} className="signup-form-with-header">
          <div className="signup-form">
            <h1>Sign up for free</h1>

            <input
              className="signup-no-errors-input"
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="Email"
              id="signup-email"
            />

            <p className="signup-error">{this.handleEmailErr()}</p>

            <input
              className="signup-no-errors-input"
              type="text"
              value={this.state.name}
              onChange={this.update("name")}
              placeholder="Name"
              id="signup-name"
            />

            <p className="signup-error">{this.handleNameErr()}</p>

            <input
              className="signup-no-errors-input"
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
              id="signup-password-1"
            />
            <p className="signup-error">{this.handlePasswordErr()}</p>

            <input
              className="signup-no-errors-input"
              type="password"
              value={this.state.password2}
              onChange={this.update("password2")}
              placeholder="Confirm Password"
              id="signup-password-2"
            />
            <p className="signup-error">{this.handlePassword2Err()}</p>
            <input type="submit" value="Submit" />
            <p className="link-to-other-form">
              Already have an account? <Link to="/login">Log in</Link>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;
