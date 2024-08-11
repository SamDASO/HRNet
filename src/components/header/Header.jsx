import styles from "./Header.module.scss"

/**
 * Header component that renders the basic header of the page.
 *
 * @param {Object} props - The component props.
 * @param {string} props.title - The h1 element inside the header that gives a title to the page.
 * @returns {JSX.Element} The rendered Header component.
*/

function Header({title}) {

  return (
      <header className={styles.container}>
        <h1>{title}</h1>
      </header>
  );
}


export default Header;