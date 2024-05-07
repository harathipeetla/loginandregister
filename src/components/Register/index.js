import {Component} from 'react'
import {Link} from 'react-router-dom'

import Cookies from 'js-cookie'
import './index.css'

class RegisterPage extends Component {
  state = {
    userName: '',
    password: '',
    errorMsg: '',
  }

  onChangeUserName = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  registerUserDetails = () => {
    const {userName, password} = this.state

    const existingUser = Cookies.get('userName')
    if (existingUser === userName) {
      this.setState({errorMsg: 'User alredy Exists'})
    } else if (userName === '' || password === '') {
      this.setState({errorMsg: 'user name or passwords should not be empty'})
    } else {
      Cookies.set('username', userName, {expires: 2})
      Cookies.set('password', password, {expires: 2})
      this.props.history.replace('/login')
    }
  }

  render() {
    const {userName, password, errorMsg} = this.state
    return (
      <div className="register-page-container">
        <div className="user-name-container">
          <label>Username:</label>
          <input
            type="text"
            className="user-name-feild"
            onChange={this.onChangeUserName}
            value={userName}
          />
        </div>
        <div className="user-password-container">
          <label>Password:</label>
          <input
            type="password"
            className="password-feild"
            onChange={this.onChangePassword}
            value={password}
          />
        </div>
        <div className="register-button-container">
          <button
            className="register-button"
            type="button"
            onClick={this.registerUserDetails}
          >
            Register
          </button>
        </div>
        <p>
          <p className="error-msg">{errorMsg}</p>
          Already have an account
          <span className="login">
            <Link to="/login">Login Here</Link>
          </span>
        </p>
      </div>
    )
  }
}

export default RegisterPage
