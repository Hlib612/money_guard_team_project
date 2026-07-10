import { useState } from "react";
import css from "../css_modules/Header.module.css";
import logo1x from "../images/logo_1x.png";
import logo2x from "../images/logo_2x.png";
import exit1x from "../images/exit_1x.png";
import exit2x from "../images/exit_2x.png";
import logo_hover_1x from "../images/logo_hover_1x.png";
import logo_hover_2x from "../images/logo_hover_2x.png";
import HeaderHover from "./HeaderHover";
import LogOutForm from "./LogOutForm";

export default function Header({ userName, onLogout }) {
  const [hover, setHover] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleLogoClick = () => {
    window.location.reload();
  };

  return (
    <>
      <header className={css.header}>
        <div
          className={css.logo_div}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={handleLogoClick}
        >
          <HeaderHover
            dlogo1x={logo1x}
            dlogo2x={logo2x}
            hlogo1x={logo_hover_1x}
            hlogo2x={logo_hover_2x}
            hover={hover}
          />

          <p
            className={`${css.logo_text} ${
              hover ? css.logo_text_hover : ""
            }`}
          >
            Money Guard
          </p>
        </div>

        <div className={css.big_exit_div}>
          <p className={css.exit_text_name}>
            {userName || "Name"}
          </p>

          <div className={css.exit_div}>
            <img
              src={exit1x}
              srcSet={`${exit1x} 1x, ${exit2x} 2x`}
              alt="Exit"
              onClick={() => setShowModal(true)}
            />

            <p
              className={css.exit_text_exit}
              
            >
              Exit
            </p>
          </div>
        </div>
      </header>

      {showModal && (
        <LogOutForm
          onLogout={() => {
            setShowModal(false);
            onLogout();
          }}
          onCancel={() => setShowModal(false)}
        />
      )}
    </>
  );
}