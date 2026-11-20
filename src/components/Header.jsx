import HeaderItems from "./HeaderItems";

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
      
    </div>
  </div>
</header>
</>
    );
}