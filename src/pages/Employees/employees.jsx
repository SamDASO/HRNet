import Header from "../../components/Header/header";
import SortingTable from "../../components/SortingTable/sortingTable";
import styles from "./employees.module.scss";
import {headCellsEmployeesData} from "../../data/headCells";
import { Link } from "react-router-dom";
import { employeesData } from "../../data/employees";

/**
 * Employees page. This component renders the table with the employees.
 *
 * @component
 * * @returns {JSX.Element} The rendered page.
*/

function Employees() {

  return (
      <div className={styles.container}>
        <Header title="Current Employees"/>
        <SortingTable headCellsData={headCellsEmployeesData} tableData={employeesData}/>
        <Link className={styles.link} to="/">Home</Link>
      </div>
  );
}

export default Employees;