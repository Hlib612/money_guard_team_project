import css from '../css_modules/Container.module.css'

export default function Container({children}){
    return <div className={css.container}>{children}</div>
}