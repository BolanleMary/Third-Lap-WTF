import styles from "./button.module.css"

function Button(props) {
    // return <button  className={props.variant ==="secondary"? styles.secondaryBtn :styles.btn}>
    return <button data-variant={props.variant} className={styles.btn} >
        {props?.buttonText}
        </button>
}

export default Button;