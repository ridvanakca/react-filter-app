import React from "react";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import "./styles.css";

const FilterListToggle = ({ options, value, selectToggle }) => {
  return (
    <div>
      <ToggleButtonGroup exclusive value={value} onChange={selectToggle} className='root'>
        {options.map(({ label, id, value }) => (
          <ToggleButton className='toggle' key={id} value={value}>
            {label}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </div>
  );
};

export default FilterListToggle;
