import styles from "./createForm.module.scss"
import { useState } from "react";
import { states } from "../../data/states";
import { departments } from "../../data/departments";
import DropDownMenu from "../DropDownMenu/dropDownMenu";
import Button from "../Button/button";
import DatePickerComponent from "../DatePicker/datePicker";
import {Modal} from "@samdaso/modal-component";
import { FetchData } from "../../api/fetchData";

/**
 * Form to create a new employee. This component renders the create employee form.
 *
 * @component
 * @example
 * return (
 *   <CreateForm />
 * )
 * @returns {JSX.Element} The rendered form component.
*/

function CreateForm() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [startDay, setStartDay] = useState(null);
    const [department, setDepartement] = useState('');
    const [birthday, setBirthday] = useState(null);
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');


    const statesData = states;
    const departmentsData = departments;
    const userId = 4;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        
        try {
            const fetchingData = new FetchData(userId)
            fetchingData.setUserData("firstName", firstName);
            fetchingData.setUserData("lastName", lastName)
            fetchingData.setUserData("startDate", startDay)
            fetchingData.setUserData("department", department)
            fetchingData.setUserData("dateOfBirth", birthday)
            fetchingData.setUserData("street", street)
            fetchingData.setUserData("city", city)
            fetchingData.setUserData("state", state)
            fetchingData.setUserData("zipCode", zipCode)
            setModalMessage('Employee Created!');
        } catch (error) {
            console.error('Form error:', error);
            setModalMessage('An error has occurred, please try again later.');
        }finally {
            setIsModalOpen(true);
        }
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }


  return (
      <form action="#" id="create-employee" className={styles.formContainer} onSubmit={handleSubmit}>

        <div className={styles.subDiv}>
            <label htmlFor="first-name">First Name</label>
            <input type="text" className={styles.input} id="first-name"onChange={(e) => setFirstName(e.target.value)}/>
        </div>

        <div className={styles.subDiv}>
            <label htmlFor="last-name">Last Name</label>
            <input type="text" className={styles.input} id="last-name" onChange={(e) => setLastName(e.target.value)}/>
        </div>

        <DatePickerComponent 
            label="Date of Birth" 
            onChangeFunction={(date) => setBirthday(date)}  
        />

        <DatePickerComponent 
            label="Start Date"
            onChangeFunction={(date) => setStartDay(date)}
        />
  
        <fieldset className={styles.address}>
            <legend>Address</legend>

            <div className={styles.subDiv}>
                <label htmlFor="street">Street</label>
                <input className={styles.input} id="street" type="text" onChange={(e) => setStreet(e.target.value)}/>
            </div>

            <div className={styles.subDiv}>
                <label htmlFor="city">City</label>
                <input className={styles.input} id="city" type="text" onChange={(e) => setCity(e.target.value)}/>
            </div>

            <DropDownMenu data={statesData} dataName="State" selectedValue={state} onChangeFunction={(e) => setState(e.target.value)}/>
            
            <div className={styles.subDiv}>
                <label htmlFor="zip-code">Zip Code</label>
                <input className={styles.input} id="zip-code" type="number" onChange={(e) => setZipCode(e.target.value)}/>
            </div>
        </fieldset>

        <DropDownMenu data={departmentsData} dataName="Department" selectedValue={department} onChangeFunction={(e) => setDepartement(e.target.value)}/>

        <Button classStyle={styles.btnSubmit} type="submit">Save</Button>

        <Modal isOpen={isModalOpen} onClose={closeModal}>
            <p>{modalMessage}</p>
            <Button onClick={closeModal}>Close</Button>
        </Modal>

      </form>
  );
}


export default CreateForm;