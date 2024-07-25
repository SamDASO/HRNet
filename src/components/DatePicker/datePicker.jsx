import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

/**
 * datePickerComponent that renders the date picker component from Material-UI.
 * 
 * @param {Object} - The component props.
 * @param {string} props.label - The name of the field.
 * @param {function} props.onChangeFunction - The function that will save the value when changed by the user
 * @returns {JSX.Element} The rendered Date picker component.
*/

function DatePickerComponent({label, onChangeFunction}) {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} >
      <DatePicker 
        sx={{ 
          width: "100%",  
          borderRadius: "8px", 
          backgroundColor: "#fee6e349"
        }} 
        label={label}
        onChange={onChangeFunction}
      />
    </LocalizationProvider>
  );
}


export default DatePickerComponent;

