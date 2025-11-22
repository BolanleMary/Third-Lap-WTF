import styles from "./button.module.css"

function Button(props) {
    return <button  className={props.variant ==="secondary"? styles.secondaryBtn :styles.btn}>
    {/* data-variant={props.variant} className={style.btn} */}
        {props?.buttonText}
        </button>
}

export default Button;