import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Stack } from '@mui/system';
import { Button } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';

export default function ButtonSelectDemo() {
  const [age, setAge] = React.useState('Choose');
  const [show, setShow] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <Button onClick={() => setShow(!show)} endIcon=<KeyboardArrowDown /> id="demo-simple-select" labelId="demo-simple-select-label" sx={{ backgroundColor: "white", color: "black", border: "1px solid lightgray", marginBottom: "10px" }}>{age}</Button>

      {show && <Stack className="shadow" sx={{backgroundColor:"lightgray" ,borderRadius:"5px" , position:"absolute" , boxShadow:""}}>

        <MenuItem value="110">110</MenuItem>
        <MenuItem value="120">120</MenuItem>
        <MenuItem value="130">130</MenuItem>
        <MenuItem value="140">140</MenuItem>
      </Stack>}

    </Box>
  );
}