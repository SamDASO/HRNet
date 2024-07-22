import styles from "./createForm.module.scss"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUserName, updateBirthday, updateStartDay } from "../../api/api";
import { states } from "../../data/states";
import { departments } from "../../data/departments";
import DropDownMenu from "../DropDownMenu/dropDownMenu";
import Button from "../Button/button";
import DatePickerComponent from "../DatePicker/datePicker";
import Modal from "../Modal/modal";


function CreateForm() {

    const [newFirstName, setNewFirstName] = useState('');
    const [newLastName, setNewLastName] = useState('');
    const dispatch = useDispatch();
    const [newBirthday, setNewBirthday] = useState(null);
    const [newStartDay, setNewStartDay] = useState(null);
    const statesData = states;
    const departmentsData = departments;

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsModalOpen(true);
              
        try {
            updateUserName( newFirstName, newLastName, dispatch);
            updateBirthday(newBirthday, dispatch);
            updateStartDay(newStartDay, dispatch);
        }catch (error) {
            console.error('Form error:', error);
            displayError();
         }
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const openModal = () => {
        setIsModalOpen(true)
    }

    const displayError = () => {
        setIsModalOpen(true);

        return (
            <Modal>
                <p>An error has occurred, please try again later </p>
                <Button onclickFunction={closeModal}>Close</Button>
            </Modal>
        )
    }

  return (
      <form action="#" id="create-employee" className={styles.formContainer} onSubmit={handleSubmit}>

        <div className={styles.subDiv}>
            <label htmlFor="first-name">First Name</label>
            <input type="text" className={styles.input} id="first-name" value={newFirstName} onChange={(e) => setNewFirstName(e.target.value)}/>
        </div>

        <div className={styles.subDiv}>
            <label htmlFor="last-name">Last Name</label>
            <input type="text" className={styles.input} id="last-name" value={newLastName} onChange={(e) => setNewLastName(e.target.value)}/>
        </div>

        <DatePickerComponent 
            label="Date of Birth" 
            onChangeFunction={(date) => setNewBirthday(date)}  
        />

        <DatePickerComponent 
            label="Start Date"
            onChangeFunction={(date) => setNewStartDay(date)}
        />
  
        <fieldset className={styles.address}>
            <legend>Address</legend>

            <div className={styles.subDiv}>
                <label htmlFor="street">Street</label>
                <input className={styles.input} id="street" type="text" />
            </div>

            <div className={styles.subDiv}>
                <label htmlFor="city">City</label>
                <input className={styles.input} id="city" type="text" />
            </div>

            <DropDownMenu data={statesData} dataName="State" />
            
            <div className={styles.subDiv}>
                <label htmlFor="zip-code">Zip Code</label>
                <input className={styles.input} id="zip-code" type="number" />
            </div>
        </fieldset>

        <DropDownMenu data={departmentsData} dataName="Department"/>

        <Button classStyle={styles.btnSubmit} onclickFunction={openModal}>Save</Button>

        <Modal isOpen={isModalOpen}>
            <p>Employee Created!</p>
            <Button onclickFunction={closeModal} classStyle={styles.btnClose}>Close</Button>
        </Modal>

      </form>
  );
}


export default CreateForm;