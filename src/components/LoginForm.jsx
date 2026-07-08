import css from "../css_modules/LoginForm.module.css";

function LoginForm({ onLogin, onRegister }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className={css.wrapper}>
      <div className={css.loginForm}>
        <svg
          className={css.logos}
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_15_231)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24.6579 4.94514C22.1122 4.30829 19.5664 3.03458 17.6571 1.12402C15.7478 3.03458 13.202 4.30829 10.6562 4.94514C11.2927 10.6768 13.202 14.4979 17.6571 17.6822C22.1122 14.4979 24.6579 10.6768 24.6579 4.94514Z"
              fill="#FFC727"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22.1116 28.6578L4.29126 7.6416V17.8313L18.2929 33.7526L22.1116 28.6578Z"
              fill="#FBFBFB"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24.0212 26.7476L31.6585 17.8316V8.27881L19.5662 22.2896L24.0212 26.7476Z"
              fill="#FBFBFB"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24.6577 29.9319V35.6636L31.6586 27.3845V21.6528L24.6577 29.9319Z"
              fill="#FBFBFB"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.2921 29.9319L4.29126 21.6528V27.3845L11.2921 35.6636V29.9319Z"
              fill="#FBFBFB"
            />
          </g>

          <defs>
            <clipPath id="clip0_15_231">
              <rect width="35.9506" height="35.9739" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <p className={css.logo}>Money Guard</p>

        <form onSubmit={handleSubmit}>
          <div className={css.field}>
            <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
              <path
                d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z"
                fill="white"
                fillOpacity="0.4"
              />
            </svg>

            <input
              className={css.input}
              type="email"
              placeholder="E-mail"
              required
            />
          </div>

          <div className={css.field}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17ZM15.1 8H8.9V6C8.9 4.29 10.29 2.9 12 2.9C13.71 2.9 15.1 4.29 15.1 6V8Z"
                fill="white"
                fillOpacity="0.4"
              />
            </svg>

            <input
              className={css.input}
              type="password"
              placeholder="Password"
              required
            />
          </div>

          <button className={css.loginBtn} type="submit">
            LOG IN
          </button>

          <button
            className={css.registerBtn}
            type="button"
            onClick={onRegister}
          >
            REGISTER
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;