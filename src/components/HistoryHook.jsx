import React from "react";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
const HistoryHook = () => {
  var history = useHistory();
  const handleClick = () => {
    history.goBack();
  };
  return (
    <Button variant="contained" style={{ width: "100%" }} onClick={handleClick}>
      GO Back to your priveous page
    </Button>
  );
};

export default HistoryHook;
