// import styles from "./dropDownMenu.module.scss";
import { useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PropTypes from "prop-types"

function DropDownMenu({data, dataName}) {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="select-label" >{dataName}</InputLabel>
      <Select
        labelId="select-label"
        id="select-small"
        value={selectedValue}
        label="dataName"
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

DropDownMenu.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      abbreviation: PropTypes.string, 
    })
  ).isRequired,
  dataName: PropTypes.string.isRequired,
}

export default DropDownMenu;

