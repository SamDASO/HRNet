import Header from "../../components/Header/header";
import SortingTable from "../../components/SortingTable/sortingTable";
import styles from "./create.module.scss";
import {headCellsEmployeesData} from "../../data/headCells";
import { Link } from "react-router-dom";

//data test - needs to be replace with the real data
const employeesData = [
  {
    id: 1,
    firstName: 'firstName1',
    lastName: 'lastName1',
    startDate: 'startDate1',
    department: 'department1',
    dateOfBirth: 'dateOfBirth1',
    street: 'street1' ,
    city: 'city1',
    state: 'state1',
    zipCode: 'zipCode1',
  },
  {
    id: 2,
    firstName: 'firstName2',
    lastName: 'lastName2',
    startDate: 'startDate2',
    department: 'department2',
    dateOfBirth: 'dateOfBirth2',
    street: 'street2' ,
    city: 'city2',
    state: 'state2',
    zipCode: 'zipCode2',
  },

];
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