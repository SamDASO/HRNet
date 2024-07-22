import styles from "./button.module.scss";
import PropTypes from "prop-types"

function Button({classStyle, children, onclickFunction}) {
return(
    <button className={`${styles.container} ${classStyle}`} onClick={onclickFunction}>{children}</button>
)
}

Button.propTypes = {
    classStyle: PropTypes.string,
    children: PropTypes.any.isRequired,
    onclickFunction: PropTypes.func
}

export default Button;