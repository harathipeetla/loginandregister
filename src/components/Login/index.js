import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'

import {FcGoogle} from 'react-icons/fc'
import './index.css'

class LoginPage extends Component {
  state = {
    userName: '',
    password: '',
    errorMsg: '',
  }

  onChnageUserName = e => {
    this.setState({userName: e.target.value})
  }

  onChnagePassword = e => {
    this.setState({password: e.target.value})
  }

  onLoginUserDetails = () => {
    const {userName, password} = this.setState
    const existingUserName = Cookies.get('username')
    const existingPassword = Cookies.get('password')

    if (existingUserName === userName && existingPassword === password) {
      this.props.hisory.replace('/welcom')
    } else {
      this.setState({errorMsg: 'User does not exists'})
    }
  }

  render() {
    const {userName, password, errorMsg} = this.state

    return (
      <div className="login-page-container">
        <div className="login-with-google-container">
          <div>
            <button className="google-button">
              Login with google <FcGoogle className="icon-g" />
            </button>
          </div>
        </div>
        <div className="user-name-container">
          <label>Username:</label>
          <input
            type="text"
            className="user-name-feild"
            value={userName}
            onChange={this.onChnageUserName}
          />
        </div>
        <div className="user-password-container">
          <label>Password:</label>
          <input
            type="password"
            className="password-feild"
            value={password}
            onChange={this.onChnagePassword}
          />
        </div>
        <div className="login-button-container">
          <button
            className="login-button"
            type="button"
            onClick={this.onLoginUserDetails}
          >
            Login
          </button>
        </div>
        <p className="error-msg">{errorMsg}</p>
        <p>
          Dont have an account{' '}
          <span className="register">
            <Link to="/register">Register Here</Link>
          </span>
        </p>
      </div>
    )
  }
}
export default LoginPage
