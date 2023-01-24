import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Button } from '@mui/material';
import { Check, KeyboardArrowDown, Search } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { Stack, Box } from '@mui/system';
import "./style.css";
import InnerMenu from "./InnerMenu.js"
import CustomizedSlider from './CustomizedSlider';


export default function NumericSelectItem({ range , setRange , options }) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [inBetween, setInBetween] = React.useState(false);
    const open = Boolean(anchorEl);
    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

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
                        <InnerMenu options={options} setInBetween={setInBetween} />
                        {inBetween === false && <Stack sx={{
                            borderRadius: "5px",
                            mb: "3px",
                            backgroundColor: "rgb(238, 238, 238)",
                            display: "flex", flexDirection: "row", alignItems: "center", p: "2px 5px", width: "100%", height: "40px", border: "0.5px solid llightgray"
                        }}>
                            <input className='search' placeholder='$ 0.00' type="number" name="" id="" />
                        </Stack>}
                    </div>

                    {inBetween && <>
                        <Stack>
                            <CustomizedSlider range={range} setRange={setRange} />
                        </Stack>

                        <Stack>
                            <div className='input-cont'>
                                <input className='input input-number' value={range[0]} placeholder='$ 0.00' type="number" name="" id="" />
                                <input className='input input-number' value={range[1]} placeholder='$ 0.00' type="number" name="" id="" />
                            </div>
                        </Stack>
                    </>}
                </Box>
            </Menu>
        </div>
    );
}