import React,{useState} from 'react'
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const Oftodolist = (props) => {
    const [remove,setremove]= useState();
    const deletelist = () => {
        setremove("line-through")
        console.log("clicke")
      };
    return (
        <div>
            <li style={{textDecoration:remove}}>
                  <Button
                    variant="contained"
                    color="success"
                    className="mybtn rounded-circle"
                    onClick={deletelist}
                  >
                    <DeleteIcon fontSize="small" />
                  </Button>
                  {props.value}
                </li>
        </div>
    )
}

export default Oftodolist
