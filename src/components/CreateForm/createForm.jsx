import styles from "./createForm.module.scss"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUserName, updateBirthday, updateStartDay } from "../../api/api";
import { states } from "../../data/states";
import { departments } from "../../data/departments";
import DropDownMenu from "../DropDownMenu/dropDownMenu";


function CreateForm() {

    const [newFirstName, setNewFirstName] = useState('');
    const [newLastName, setNewLastName] = useState('');
    const [newBirthday, setNewBirthday] = useState(null);
    const [newStartDay, setNewStartDay] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch();
    
    const statesData = states;
    const departmentsData = departments;

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrorMessage("");
        
        try {
            updateUserName( newFirstName, newLastName, dispatch);
            updateBirthday(newBirthday, dispatch);
            updateStartDay(newStartDay, dispatch);
        }catch (error) {
            console.error('Form error:', error);
            setErrorMessage("There's been an error in the form");
         }
    }

  return (
      <form action="#" id="create-employee" className={styles.formContainer} onSubmit={handleSubmit}>

        <div className={`${styles.firstName} ${styles.subDiv}`}>
            <label htmlFor="first-name">First Name</label>
            <input type="text" className={styles.input} id="first-name" value={newFirstName} onChange={(e) => setNewFirstName(e.target.value)}/>
        </div>

        <div className={`${styles.lastName} ${styles.subDiv}`}>
            <label htmlFor="last-name">Last Name</label>
            <input type="text" className={styles.input} id="last-name" value={newLastName} onChange={(e) => setNewLastName(e.target.value)}/>
        </div>

        <LocalizationProvider dateAdapter={AdapterDayjs} >
        <DatePicker sx={{ width:"100%" }} label="Date of Birth" value={newBirthday} onChange={(date) => setNewBirthday(date)}/>
        </LocalizationProvider>

        <LocalizationProvider dateAdapter={AdapterDayjs} >
        <DatePicker sx={{ width:"100%" }} label="Start Date" value={newStartDay} onChange={(date) => setNewStartDay(date)}/>
        </LocalizationProvider>
        

        <fieldset className={styles.address}>
            <legend>Address</legend>

            <div className={`${styles.street} ${styles.subDiv}`}>
                <label htmlFor="street">Street</label>
                <input className={styles.input} id="street" type="text" />
            </div>

            <div className={`${styles.city} ${styles.subDiv}`}>
                <label htmlFor="city">City</label>
                <input className={styles.input} id="city" type="text" />
            </div>

            <DropDownMenu data={statesData} dataName="State" />
            
            <div className={`${styles.zipCode} ${styles.subDiv}`}>
                <label htmlFor="zip-code">Zip Code</label>
                <input className={styles.input} id="zip-code" type="number" />
            </div>
        </fieldset>

        <DropDownMenu data={departmentsData} dataName="Department"/>

        { errorMessage && <div className={styles.error}>{errorMessage}</div>}
      </form>
  );
}


export default CreateForm;