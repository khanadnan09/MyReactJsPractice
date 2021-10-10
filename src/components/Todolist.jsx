import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddTaskIcon from "@mui/icons-material/AddTask";
import Oftodolist from "./Oftodolist";

const Todolist = () => {
  const [gettext, setgettext] = useState();
  const [textarr, settextarr] = useState([]);

  const valuetext = (e) => {
    setgettext(e.target.value);
  };
  const textinarray = () => {
    settextarr((prevvalofarr) => {
      return [...prevvalofarr, gettext];
    });
    setgettext(" ");
  };

 
  return (
    <div className="container-fluid todo-container">
      <div className="card__body">
        <div className="heading">
          <h3>TODO-LIST</h3>
        </div>
        <div className="input__field mb-4 text-center d-flex">
          <input
            type="text"
            className="input__area"
            placeholder="Type Your Todo Here"
            value={gettext}
            onChange={valuetext}
          />
          <Button
            variant="contained"
            color="success"
            className="rounded rounded-circle"
            onClick={textinarray}
          >
            <AddTaskIcon fontSize="medium" />
          </Button>
        </div>
        <div className="list">
          <ul>
            {textarr.map((value,index) => {
              return (
                <Oftodolist value={value} key={index}/>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todolist;
