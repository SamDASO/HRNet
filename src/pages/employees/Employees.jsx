import Header from "../../components/header/Header";
import SortingTable from "../../components/sortingTable/SortingTable"
import styles from "./Employees.module.scss";
import {headCellsEmployeesData} from "../../data/headCells";
import { Link } from "react-router-dom";

/**
 * Employees page. This component renders the table with the employees.
 *
 * @component
 * * @returns {JSX.Element} The rendered page.
*/

function Employees({userData}) {

  return (
      <div className={styles.container}>
        <Header title="Current Employees"/>
        <SortingTable headCellsData={headCellsEmployeesData} tableData={userData}/>
        <Link className={styles.link} to="/">Home</Link>
      </div>
  );
}

export default Employees;