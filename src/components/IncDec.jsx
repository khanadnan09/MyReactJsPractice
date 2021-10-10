import React,{useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
const IncDec = () => {

    const [num, setnum] = useState(0)
    
    const increment = ()=> {
        setnum(num + 1)
    }
    const decerment = ()=> {
        setnum(num - 1)
    }

  return (
    <div className="container-fluid in-dec-container">
      <Box className="row in-dec-row" sx={{ boxShadow: 3 }}>
        <div className="col-12 mb-4">
          <h1 className="text-center num-box">{num}</h1>
        </div>
        <div className="col-12 text-center">
          <Button variant="contained" className="mx-3" onClick={increment}>Increment <AddIcon/>
          </Button>
          <Button variant="contained" className="ms-3" onClick={decerment}>Decrement <RemoveIcon/>
          </Button>
          
        </div>
      
      </Box>
    </div>
  );
};

export default IncDec;
