import styles from "./createForm.module.scss"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUserName, updateBirthday, updateStartDay } from "../../api/api";


function CreateForm() {

    const [newFirstName, setNewFirstName] = useState('');
    const [newLastName, setNewLastName] = useState('');
    const [newBirthday, setNewBirthday] = useState(null);
    const [newStartDay, setNewStartDay] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch();

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
      <form action="#" id="create-employee" onSubmit={handleSubmit}>
        <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" value={newFirstName} onChange={(e) => setNewFirstName(e.target.value)}/>

        <label htmlFor="last-name">Last Name</label>
        <input type="text" id="last-name" value={newLastName} onChange={(e) => setNewLastName(e.target.value)}/>

        <LocalizationProvider dateAdapter={AdapterDayjs} >
        <DatePicker label="Date of Birth" value={newBirthday} onChange={(date) => setNewBirthday(date)}/>
        </LocalizationProvider>

        <LocalizationProvider dateAdapter={AdapterDayjs} >
        <DatePicker label="Start Date" value={newStartDay} onChange={(date) => setNewStartDay(date)}/>
        </LocalizationProvider>
        

        <fieldset className={styles.address}>
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input id="street" type="text" />

            <label htmlFor="city">City</label>
            <input id="city" type="text" />

            <label htmlFor="state">State</label>
            <select name="state" id="state"></select>

            <label htmlFor="zip-code">Zip Code</label>
            <input id="zip-code" type="number" />
        </fieldset>

        <label htmlFor="department">Department</label>
        <select name="department" id="department">
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
        </select>
        { errorMessage && <div className={styles.error}>{errorMessage}</div>}
      </form>
  );
}


export default CreateForm;