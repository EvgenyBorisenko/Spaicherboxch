import React, { Component } from 'react';
import s from './Login.module.css';
// import { authUser } from '../../helpers/api';
import { connect } from 'react-redux';
import * as sessionOperations from '../../redux/operations/sessionOperations';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onLogin({ ...this.state });
    this.setState({ email: '', password: '' });
    this.props.history.replace('/dashboard');
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className={s.ShadowBox}>
        <form className={s.Form} onSubmit={this.handleSubmit}>
          <h3>Login</h3>
          <div className={s.Label}>
            <label>E-mail</label>
          </div>

          <input
            className={s.EmailInput}
            required
            name="email"
            type="email"
            value={email}
            onChange={this.handleChange}
            placeholder="Enter you E-mail"
          />
          <div className={s.Label}>
            <label>Password</label>
          </div>
          <input
            className={s.EmailInput}
            required
            name="password"
            type="password"
            value={password}
            onChange={this.handleChange}
            placeholder="Enter you Password"
          />
          <button className={s.SubmitBtn}>LOGIN</button>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = {
  onLogin: sessionOperations.login,
};

export default connect(null, mapDispatchToProps)(Login);
