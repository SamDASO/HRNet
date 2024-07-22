import { Link } from "react-router-dom";
import Header from "../../components/Header/header";
import styles from "./home.module.scss"
import CreateForm from "../../components/CreateForm/createForm";

function Home() {

  return (
      <div className={styles.container}>
        <Header title="HRnet"/>
        <Link className={styles.link} to="/create">View Current Employees</Link>
        <h2>Create Employee</h2>
        <CreateForm />
      </div>
  );
}

export default Home;