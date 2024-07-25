import { useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

/**
 * DropDownMenu component that renders a simple drop down menu component from Material-UI.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.data - The data that needs to be render inside the drop down menu.
 * @param {string} props.data[].name - The name of the item.
 * @param {string} [props.data[].abbreviation] - The optional abbreviation of the item.
 * @param {string} props.dataName - The name of the drop down Menu that classify the data inside.
 * @returns {JSX.Element} The rendered DropDownMenu component.
*/

function DropDownMenu({data, dataName}) {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <FormControl variant="filled" sx={{ width:"100%" }}>
      <InputLabel id="select-label" >{dataName}</InputLabel>
      <Select
        labelId="select-label"
        id="select-small"
        value={selectedValue}
        label={dataName}
        onChange={handleChange}
      >
        {data.map((item, index)=> (
          <MenuItem key={index} value={item.name}>{item.name}</MenuItem>
        ))
        }
        </Select>
    </FormControl>
  );
}


export default DropDownMenu;

