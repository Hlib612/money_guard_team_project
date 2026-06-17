// nут має бути імпорт з форми регістра де import name from './FormRegister.jsx'
import css from '../css_modules/Header.module.css'
// import logo1x from './assets/images/logo_1x.png'
//alt
//Stylized gold shield above white chevrons
// Logout icon — white rectangle with right-pointing arrow"
export default function Header(){

    return(
        <>
        <header className={css.header}>
            <div className={css.logo_div}>
                <img src="#" alt="#" />
                <p>Money Guard</p>
            </div>
            <div className={css.big_exit_div}>
                <p>Name</p>
                <div className={css.exit_div}>
                    <img src="#" alt="#"/>
                    <p>Exit</p>
                </div>
            </div>
        </header>
        </>
    )
}