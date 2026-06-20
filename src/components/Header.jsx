
import css from '../css_modules/Header.module.css'
import logo1x from '../images/logo_1x.png'
import logo2x from '../images/logo_2x.png'
import exit1x from '../images/exit_1x.png'
import exit2x from '../images/exit_2x.png'
import logo_hover_1x from '../images/logo_hover_1x.png'
import logo_hover_2x from '../images/logo_hover_2x.png'
import HeaderHover from './HeaderHover'
import { useState } from 'react'

export default function Header() {
    const [hover, setHover] = useState(false);

    const handleClick = () => {
        window.location.reload(); // перезавантажує сторінку
    };

    return (
        <header className={css.header}>
            <div 
                className={css.logo_div}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={handleClick}
            >
                <HeaderHover 
                    dlogo1x={logo1x} 
                    dlogo2x={logo2x} 
                    hlogo1x={logo_hover_1x} 
                    hlogo2x={logo_hover_2x} 
                    hover={hover}
                />
                <p className={`${css.logo_text} ${hover ? css.logo_text_hover : ''}`}>
                    Money Guard
                </p>
            </div>
            <div className={css.big_exit_div}>
                <p className={css.exit_text_name}>Name</p>
                <div className={css.exit_div}>
                    <img 
                        src={exit1x} 
                        alt="Logout icon" 
                        srcSet={`${exit1x} 1x, ${exit2x} 2x`} 
                    />
                    <p className={css.exit_text_exit}>Exit</p>
                </div>
            </div>
        </header>
    )
}
