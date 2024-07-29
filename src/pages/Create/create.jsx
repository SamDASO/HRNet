import Header from "../../components/Header/header";
import SortingTable from "../../components/SortingTable/sortingTable";
import styles from "./create.module.scss";
import {headCellsEmployeesData} from "../../data/headCells";
import { Link } from "react-router-dom";
import { employeesData } from "../../data/employees";

/**
 * Create page. This component renders the create employee page.
 *
 * @component
 * * @returns {JSX.Element} The rendered page.
*/

function Create() {

  return (
      <div className={styles.container}>
        <Header title="Current Employees"/>
        <SortingTable headCellsData={headCellsEmployeesData} tableData={employeesData}/>
        <Link className={styles.link} to="/">Home</Link>
      </div>
  );
}

export default Create;