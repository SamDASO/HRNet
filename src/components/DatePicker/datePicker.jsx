import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import PropTypes from "prop-types"

function DatePickerComponent({label, value, onChangeFunction}) {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} >
        <DatePicker 
        sx={{ 
            width: "100%",  
            borderRadius: "8px", 
            backgroundColor: "#fee6e349"
        }} 
        label={label}
        value={value}
        onChange={onChangeFunction}/>
        </LocalizationProvider>
  );
}

DatePickerComponent.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  onChangeFunction: PropTypes.func.isRequired,
}

export default DatePickerComponent;

