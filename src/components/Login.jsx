

export default function Login() {
  

  return (
    <section className="auth">
      <div className="auth__card card">
        <div className="auth__head">
          <span className="logo__mark">
            <svg>
              <use href="#i-logo" />
            </svg>
          </span>
          <h1>Welcome back</h1>
          <p className="muted">Log in to book your next cut</p>
        </div>

        <form className="auth__form" onSubmit={submitHandler}>
          {/* {error && <p className="auth__error">{error}</p>} */}

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
                value={values.email}
                onChange={changeHandler}
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
                placeholder="••••••••"
                value={values.password}
                onChange={changeHandler}
                autoComplete="current-password"
              />
            </span>
          </label>

          <div className="auth__row">
            <label className="auth__check">
              <input
                type="checkbox"
                name="remember"
                checked={values.remember}
                onChange={changeHandler}
              />
              Remember me
            </label>
            <a href="#" className="auth__link">Forgot password?</a>
          </div>

          <button type="submit" className="btn btn--yellow btn--block">
            <svg>
              <use href="#i-login" />
            </svg>
            Log in
          </button>
        </form>

        <p className="auth__footer muted">
          Don&apos;t have an account? <a href="/register" className="auth__link">Register</a>
        </p>
      </div>
    </section>
  );
}
