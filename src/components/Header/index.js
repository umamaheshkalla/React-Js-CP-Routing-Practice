import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="header-block">
    <div className="logo-name-container">
      <img
        className="logo"
        alt="wave"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
      />
      <p className="logo-name">Wave</p>
    </div>
    <ul className="blogs">
      <li>
        <Link className="nav-links" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="nav-links" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="nav-links" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)
export default Header
