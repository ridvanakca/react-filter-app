import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";

const CheckboxProton = ({ cuisine, changeChecked }) => {
  const { label, id, checked } = cuisine;

  return (
    <div>
      <FormControlLabel
        sx={{
          "&$checked": {
            color: "#000",
          },
          width: "100%",
          display: "flex",
          flexDirection: "row-reverse",
          justifyContent: "space-between",
          alignItems: "center",
          marginLeft: 0,
        }}
        label={label}
        control={
          <Checkbox
            sx={{
              "&$checked": {
                color: "#000",
              },
            }}
            size='small'
            checked={checked}
            onChange={() => changeChecked(id)}
          />
        }
      />
    </div>
  );
};

export default CheckboxProton;
