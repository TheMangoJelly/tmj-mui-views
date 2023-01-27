import * as React from 'react';
import List from '@mui/material/List';
import Menu from '@mui/material/Menu';
import { Button } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { Stack, Box } from '@mui/system';
import "./style.css";
import InnerMenu from "./InnerMenu.js"
import CustomizedSlider from './CustomizedSlider';


export default function NumericSelectItem({ range, setRange, options, setQueryNumeric }) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [inBetween, setInBetween] = React.useState(false);

    const [startValue, setStartValue] = React.useState(range[0]);
    const [endValue, setEndValue] = React.useState(range[1]);

    const [initQuery, setInitQuery] = React.useState('');
    const [inputValue, setInputValue] = React.useState('');



    const open = Boolean(anchorEl);
    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const changeStartValue = (e) => {
        setStartValue(e.target.value);
        setRange([Number(e.target.value), Number(endValue)]);

        const query = initQuery.split("=")[0];
        // setInitQuery(query + "=" + num);
        setQueryNumeric(query + "=" + Number(e.target.value) + "-" + Number(endValue))
    }
    const changeEndValue = (e) => {
        setEndValue(e.target.value);
        setRange([Number(startValue), Number(e.target.value)]);

        const query = initQuery.split("=")[0];
        // setInitQuery(query + "=" + num);
        setQueryNumeric(query + "=" + Number(startValue) + "-" + Number(e.target.value))
    }


    const handleChange = (num) => {
        if (initQuery !== "bet=") {
            setInputValue(num);
            const query = initQuery.split("=")[0];
            // setInitQuery(query + "=" + num);
            setQueryNumeric(query + "=" + num)
        }
    }

    return (
        <div>
            <List
                component="nav"
                aria-label="Device settings"
                sx={{ bgcolor: 'background.paper' }}
            >
                <Button endIcon={open ? <KeyboardArrowDown sx={{ color: "gray" }} /> : <KeyboardArrowDown sx={{ color: "gray" }} />}
                    id="lock-button"
                    aria-haspopup="listbox"
                    aria-controls="lock-menu"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClickListItem}
                    sx={{ border: "0.5px solid lightgray", borderRadius: "7px", fontSize: "0.9rem", color: "gray" }}
                >
                    Amount
                </Button>
            </List>
            <Menu
                sx={{ marginTop: "10px" }}
                id="lock-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'lock-button',
                    role: 'listbox',
                }}

            >
                <Box sx={{ p: "3px 10px", display: "flex", gap: "15px", flexDirection: "column", minHeight: "100px" }}>

                    <Typography sx={{ marginTop: "3px", color: "black", fontSize: "0.8rem" }}>Dollar value</Typography>

                    <div className='input-cont'>
                        <InnerMenu setInitQuery={setInitQuery} setQueryNumeric={setQueryNumeric} options={options} setInBetween={setInBetween} />
                        {inBetween === false && <Stack sx={{
                            borderRadius: "5px",
                            mb: "3px",
                            backgroundColor: "rgb(238, 238, 238)",
                            display: "flex", flexDirection: "row", alignItems: "center", p: "2px 5px", width: "100%", height: "40px", border: "0.5px solid llightgray"
                        }}>
                            <input value={inputValue} onChange={(e) => handleChange(e.target.value)} className='search' placeholder='$ 0.00' type="number" name="" id="" />
                        </Stack>}
                    </div>

                    {inBetween && <>
                        <Stack>
                            <CustomizedSlider initQuery={initQuery} setQueryNumeric={setQueryNumeric} range={range} setRange={setRange} setStartValue={setStartValue} setEndValue={setEndValue} />
                        </Stack>

                        <Stack>
                            <div className='input-cont'>
                                <input className='input input-number' onChange={changeStartValue} value={startValue} placeholder='$ 0.00' type="number" name="" id="" />
                                <input className='input input-number' onChange={changeEndValue} value={endValue} placeholder='$ 0.00' type="number" name="" id="" />
                            </div>
                        </Stack>
                    </>}
                </Box>
            </Menu>
        </div>
    );
}