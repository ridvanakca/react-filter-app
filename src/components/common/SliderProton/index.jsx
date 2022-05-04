import { Slider } from "@mui/material";
import React from "react";

const SliderProton = ({ value, changedPrice }) => {
  return (
    <div style={{ width: "100%" }}>
      <Slider value={value} onChange={changedPrice} valueLabelDisplay='on' min={1000} max={5000} sx={{}} />
    </div>
  );
};

export default SliderProton;
