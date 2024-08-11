import styles from "./Button.module.scss";


/**
 * Button component with the generic style for the app
 *
 * @param {Object} props - The component props.
 * @param {string} [props.classStyle] - The complementary class to style the button if needed.
 * @param {React.ReactNode} props.children - The content to be displayed inside the button.
 * @param {Object} props.otherProps - Additional props to be passed to the button element.
 * @returns {JSX.Element} The rendered button.
*/

function Button({classStyle, children, ...otherProps}) {
return(
    <button className={`${styles.container} ${classStyle || ''}`} {...otherProps}>{children}</button>
)
}


export default Button;