import {Component} from 'react'
import PasswordsList from '../PasswordsList'
import './index.css'

class PasswordManager extends Component {
  render() {
    return (
      <div className="app-container">
        <img
          className="app-logo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
        />
        <div className="form-container">
          <form className="form">
            <h1>Add New Password</h1>
            <div className="website-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png "
                alt="website"
                className="website-logo"
              />
              <input
                className="input"
                type="text"
                placeholder="Enter Website"
              />
            </div>
            <div className="website-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
                alt=" username"
                className="website-logo"
              />
              <input
                className="input"
                type="text"
                placeholder="Enter Username"
              />
            </div>
            <div className="website-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                alt="password"
                className="website-logo"
              />
              <input
                className="input"
                type="password"
                placeholder="Enter Password"
              />
            </div>
          </form>
          <img
            className="password-manager-image"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
          />
        </div>
        <div className="bottom-section">
          <div className="password-count-container">
            <div className="password-count-card">
              <h1 className="password-count-heading">Your Passwords</h1>
              <p className="password-count">{0}</p>
            </div>
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png "
                alt="website"
                className="website-logo"
              />
              <input className="input" type="search" placeholder="Search" />
            </div>
          </div>
          <div className="show-password-container">
            <input className="checkbox-input" id="password" type="checkbox" />
            <label className="label-text" htmlFor="password">
              Show Passwords
            </label>
          </div>
          <div className="url-container">
            <ul>
              <PasswordsList />
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
