import Header from "../../components/Header/header";
import styles from "./home.module.scss"

function Home() {

  return (
      <div className={styles.container}>
        <Header title="HRNet"/>
      </div>
  );
}

export default Home;