import Header from "../../components/Header/header";
import styles from "./home.module.scss"

function Create() {

  return (
      <div className={styles.container}>
        <Header title="Current Employees"/>
      </div>
  );
}

export default Create;