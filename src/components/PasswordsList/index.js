import './index.css'

const PasswordsList = props => {
  const {passwords, isShowBtn, deleteButtonClicked} = props

  const {website, password, userName, id} = passwords

  const deletePassword = () => {
    deleteButtonClicked(id)
  }

  return (
    <li>
      <div className="list-container">
        <div className="list-sub-container">
          <p className="logo">{userName[0]}</p>
          <div className="details-container">
            <p className="website">{website}</p>
            <p className="user-name">{userName}</p>
            {isShowBtn ? (
              <p className="password">{password}</p>
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
                alt="stars"
                className="star-passwords"
              />
            )}
          </div>
        </div>
        <button
          type="button"
          data-testid="delete"
          className="custom-btn"
          onClick={deletePassword}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-image"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordsList
