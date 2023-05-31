import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoPassWordList from '../NoPassWordList'
import PasswordsList from '../PasswordsList'

import './index.css'

class PasswordManager extends Component {
  state = {
    passwordsList: [],
    website: '',
    password: '',
    userName: '',
    searchInput: '',
    isShowBtn: false,
  }

  passwordSubmitted = event => {
    event.preventDefault()
    const {website, password, userName} = this.state
    const newPassword = {
      id: uuidv4(),
      website,
      password,
      userName,
    }
    this.setState(preState => ({
      passwordsList: [...preState.passwordsList, newPassword],
      website: '',
      userName: '',
      password: '',
    }))
  }

  isPasswordShowed = () => {
    const {passwordsList} = this.state

    if (passwordsList.length === 0) {
      return false
    }
    return true
  }

  deleteButtonClicked = id => {
    const {passwordsList} = this.state
    const afterDeletePasswordsList = passwordsList.filter(
      eachPassword => eachPassword.id !== id,
    )

    this.setState({passwordsList: afterDeletePasswordsList})
  }

  onWebsiteChange = event => {
    this.setState({website: event.target.value})
  }

  onUserNameChanged = event => {
    this.setState({userName: event.target.value})
  }

  onPasswordChange = event => {
    this.setState({password: event.target.value})
  }

  searchInputChange = event => {
    this.setState({searchInput: event.target.value})
  }

  showBtnClicked = () => {
    this.setState(preState => ({
      isShowBtn: !preState.isShowBtn,
    }))
  }

  render() {
    const {
      passwordsList,
      searchInput,
      isShowBtn,
      website,
      userName,
      password,
    } = this.state
    const passwordsCount = passwordsList.length
    const filterDate = passwordsList.filter(eachPassword =>
      eachPassword.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
    const isPasswordShow = this.isPasswordShowed()
    return (
      <div className="app-container">
        <img
          className="app-logo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
        />
        <div className="form-container">
          <form className="form" onSubmit={this.passwordSubmitted}>
            <h1 className="main-heading">Add New Password</h1>
            <div className="website-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png "
                alt="website"
                className="website-logo"
              />
              <input
                className="input"
                type="text"
                value={website}
                placeholder="Enter Website"
                onChange={this.onWebsiteChange}
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
                value={userName}
                placeholder="Enter Username"
                onChange={this.onUserNameChanged}
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
                value={password}
                placeholder="Enter Password"
                onChange={this.onPasswordChange}
              />
            </div>
            <div className="button-container">
              <button type="submit" className="add-btn">
                Add
              </button>
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
              <p className="password-count">{passwordsCount}</p>
            </div>
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png "
                alt="search"
                className="website-logo"
              />
              <input
                className="input"
                type="search"
                placeholder="Search"
                onChange={this.searchInputChange}
              />
            </div>
          </div>
          <div className="show-password-container">
            <input
              className="checkbox-input"
              id="password"
              type="checkbox"
              onChange={this.showBtnClicked}
            />
            <label className="label-text" htmlFor="password">
              Show Passwords
            </label>
          </div>
          <div className="url-container">
            {isPasswordShow && filterDate.length !== 0 ? (
              <ul className="password-list">
                {filterDate.map(eachPassword => (
                  <PasswordsList
                    passwords={eachPassword}
                    key={eachPassword.id}
                    isShowBtn={isShowBtn}
                    deleteButtonClicked={this.deleteButtonClicked}
                  />
                ))}
              </ul>
            ) : (
              <NoPassWordList />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
