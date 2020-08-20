import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Particles from "react-tsparticles";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  handleDemo() {
    this.props.login(this.props.demoUser);
  }

  componentDidMount() {
    this.props.clearSessionErrors();
    let eles = document.getElementsByClassName("login-yes-errors-input");

    Array.from(eles).forEach(ele => {
      ele.className = "login-no-errors-input";
    })

  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.login(user);
  }

  handleEmailErr() {
    let field = document.getElementById("login-email");
    if (field === null) return;

    if (this.props.errors.email) {
      field.className = "login-yes-errors-input1";
      return this.props.errors.email;
    } else {
      field.className = "login-no-errors-input1";
    }
  }

  handlePasswordErr() {
    let field = document.getElementById("login-password");
    if (field === null) return;


    if (this.props.errors.password) {
      field.className = "login-yes-errors-input1";
      return this.props.errors.password;
    } else {
      field.className = "login-no-errors-input1";
    }
  }

  render() {
    return (
      <div className="login-form-container">
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
        <div className="login-form1">
          <h1>Welcome Back!</h1>
          <form onSubmit={this.handleSubmit}>
            <input
              id="login-email"
              className="login-no-errors-input1"
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="Email"
            />
            <p className="signup-error">{this.handleEmailErr()}</p>
            <input
              id="login-password"
              type="password"
              className="login-no-errors-input1"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
            />
            <p className="signup-error">{this.handlePasswordErr()}</p>
            <input type="submit" value="Submit" />
          </form>
          <button className="demo-button" onClick={() => this.handleDemo()}>
            Demo
          </button>
          <p className="link-to-other-form">
            Don’t have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);