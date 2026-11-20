

export default function Register() {


  return (
    <section className="auth">
      <div className="auth__card card">
        <div className="auth__head">
          <span className="logo__mark">
            <svg>
              <use href="#i-logo" />
            </svg>
          </span>
          <h1>Create account</h1>
          <p className="muted">Join Cutz and book in seconds</p>
        </div>

        <form className="auth__form">
          {/* {error && <p className="auth__error">{error}</p>} */}

          <label className="field">
            <span className="field__label">Full name</span>
            <span className="field__control">
              <svg>
                <use href="#i-user" />
              </svg>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                autoComplete="name"
              />
            </span>
          </label>

          <label className="field">
            <span className="field__label">Email</span>
            <span className="field__control">
              <svg>
                <use href="#i-mail" />
              </svg>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                autoComplete="email"
              />
            </span>
          </label>

          <label className="field">
            <span className="field__label">Password</span>
            <span className="field__control">
              <svg>
                <use href="#i-lock" />
              </svg>
              <input
                type="password"
                name="password"
                placeholder="At least 6 characters"
                autoComplete="new-password"
              />
            </span>
          </label>

          <label className="field">
            <span className="field__label">Repeat password</span>
            <span className="field__control">
              <svg>
                <use href="#i-lock" />
              </svg>
              <input
                type="password"
                name="rePassword"
                placeholder="Repeat password"
                autoComplete="new-password"
              />
            </span>
          </label>

          <button type="submit" className="btn btn--yellow btn--block">
            Create account
          </button>
        </form>

        <p className="auth__footer muted">
          Already have an account? <a href="/login" className="auth__link">Log in</a>
        </p>
      </div>
    </section>
  );
}
