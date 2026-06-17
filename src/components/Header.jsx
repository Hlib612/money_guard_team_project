// nут має бути імпорт з форми регістра де import name from './FormRegister.jsx'
import css from '../css_modules/Header.module.css'
import logo1x from '../images/logo_1x.png'
import logo2x from '../images/logo_2x.png'
import exit1x from '../images/exit_1x.png'
import exit2x from '../images/exit_2x.png'

// Logout icon — white rectangle with right-pointing arrow"  srcSet='logo1x 1x, logo2x 2x'
export default function Header(){

    return(
        <>
        <header className={css.header}>
            <div className={css.logo_div}>
                <img className={css.logo_img} src={logo1x} alt="Stylized gold shield above white chevrons" srcSet={`${logo1x} 1x, ${logo2x} 2x`} />
                <p className={css.logo_text}>Money Guard</p>
            </div>
            <div className={css.big_exit_div}>
                <p className={css.exit_text}>Name</p>
                <div className={css.exit_div}>
                    <img src={exit1x} alt="#" srcSet={`${exit1x} 1x, ${exit2x} 2x`}/>
                    <p className={css.exit_text}>Exit</p>
                </div>
            </div>
        </header>
        </>
    )
}