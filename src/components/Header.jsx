import HeaderItems from "./HeaderItems";
import { Link } from "react-router";

export default function Header() {
    return (
      <>
      <HeaderItems />
        <header className="header">
  <div className="container">
    <a href="index.html" className="logo">
      <span className="logo__mark">
        <svg>
          <use href="#i-logo" />
        </svg>
      </span>
      <span>Cutz</span>
    </a>
    <nav className="nav">
      <a href="index.html" className="active">
        <span className="nav__icon">
          <svg>
            <use href="#i-home" />
          </svg>
        </span>
        <span className="label">Home</span>
      </a>
      <a href="index.html#offers">
        <span className="nav__icon">
          <svg>
            <use href="#i-search" />
          </svg>
        </span>
        <span className="label">Explore</span>
      </a>
      <a href="appointment.html">
        <span className="nav__icon">
          <svg>
            <use href="#i-calendar" />
          </svg>
        </span>
        <span className="label">Booking</span>
      </a>
      <a href="#">
        <span className="nav__icon">
          <svg>
            <use href="#i-user" />
          </svg>
        </span>
        <span className="label">Profile</span>
      </a>
    </nav>
    <label className="header__search">
      <svg>
        <use href="#i-search" />
      </svg>
      <input type="text" placeholder="Search salons, barbers, services..." />
    </label>
    <div className="header__user">
      <button className="icon-btn notify" aria-label="Notifications">
        <svg>
          <use href="#i-bell" />
        </svg>
      </button>
      {/* <div className="avatar" /> */}
      <Link to="/login" className="btn btn--ghost btn--sm">
        <svg>
          <use href="#i-login" />
        </svg>
        Login
      </Link>
      <Link to="/register" className="btn btn--yellow btn--sm">
        Register
      </Link>

    </div>
  </div>
</header>
</>
    );
}