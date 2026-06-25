import { useState } from "react"
import css from '../css_modules/HomeModal.module.css'
import closeSvg from'../images/close.svg'
import circleSvg from'../images/circle.svg'
export default function HomeModalTransaction({isOn}){
const [isVisible, setIsVisible] = useState(false)
    const toggleModal = () =>{
        setIsVisible(!isVisible)
    }
    return(
        <>
        <button className={css.openBtn} onClick={toggleModal}>
        <img src={circleSvg} alt="cross" />
      </button>
      {isVisible && (
      <div className={css.backdrop} onClick={toggleModal}>
        <div className={css.modal} onClick={(e) => e.stopPropagation()}>
            {}
        <button className={css.closeBtn} onClick={toggleModal}><img src={closeSvg} alt="cross" className={css.closeImg}/></button>
        <h2 className={css.headline}>Add transaction</h2>
        <div className={css.switchDiv}>
            <p className={css.income}>
                Income
            </p>
            <button className={css.switchBtn}>
                <div className={css.circleDiv}>
                    <img src={circleSvg} alt="cross" className={css.circleImg}/>
                </div>
            </button>
            <p className={css.expence}>
                Expense
            </p>
        </div>
        <div className={css.inputDiv}>
            <input className={css.input} type="number"/>
            <input type="date" className={css.input}/>
        </div>
        <input type="text" className={css.input}/>
        <button className={css.addBtn}>Add</button>
        <button className={css.cancelBtn}>Cancel</button>
      </div>
      </div>
       )}
        </>
    )
}