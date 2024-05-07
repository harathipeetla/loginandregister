import {Component} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Welcome from './components/Welcome'
import LoginPage from './components/Login'

import RegisterPage from './components/Register'

import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter className="container">
        <Routes>
          <Route path="/login" component={LoginPage} />
          <Route path="/welcom" component={Welcome} />
          <Route path="/register" component={RegisterPage} />
          <Route exact path="/" component={LoginPage} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App
