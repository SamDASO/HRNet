import styles from "./button.module.scss";
import PropTypes from "prop-types"

function Button({classStyle, children, ...otherProps}) {
return(
    <button className={`${styles.container} ${classStyle}`} {...otherProps}>{children}</button>
)
}

Button.propTypes = {
    classStyle: PropTypes.string,
    children: PropTypes.node.isRequired,
    onclickFunction: PropTypes.func
}

export default Button;