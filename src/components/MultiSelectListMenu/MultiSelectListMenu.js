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


const options = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursdays",
];
const suggestion = [

];

export default function MultiSelectListMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const open = Boolean(anchorEl);
    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        console.log(index)
        suggestion.push(options[index]);
        options[index] = null;
    };

    const handleArrayElements = (index) => {
        suggestion.push(options[index]);
        options[index] = null;
    }

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
                <Button
                    endIcon={open ? <KeyboardArrowDown sx={{ color: "gray" }} /> : <KeyboardArrowDown sx={{ color: "gray" }} />}

                    id="lock-button"
                    aria-haspopup="listbox"
                    aria-controls="lock-menu"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClickListItem}
                    sx={{ border: "0.5px solid lightgray", borderRadius: "7px" }}
                >
                    <ListItemText
                        secondary="Choose"
                    />
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
                <Box sx={{ p: "0px 5px" }}>

                    <Stack sx={{
                        borderRadius: "5px",
                        mb: "3px",
                        backgroundColor: "rgb(238, 238, 238)",
                        display: "flex", flexDirection: "row", alignItems: "center", p: "2px 5px", width: "100%", height: "40px", border: "0.5px solid llightgray"
                    }}>
                        <Search sx={{ m: "2px" }} fontSize='0.8rem' />
                        <input className='search' placeholder='search' type="search" name="" id="" />
                    </Stack>

                    {suggestion.map((option, index) => (
                        <MenuItem
                            key={option}
                            selected
                        >
                            <div className='content-cont'>
                                <Check fontSize='0.8rem' />
                                <div className='circle'>
                                    <div>MJ</div>
                                </div>
                                <div>
                                    <p style={{ fontSize: "0.9rem" }}>Demo Line</p>
                                    <p style={{ fontSize: "0.7rem" }}>{option}</p>
                                </div>
                            </div>
                        </MenuItem>
                    ))}

                    <hr style={{ borderTop: "0.5px", backgroundColor: "gray", margin: "5px 0px" }} />

                    <Typography sx={{ marginTop: "3px", color: "gray", fontSize: "0.7rem" }}>Suggestions</Typography>

                    {options.map((option, index) => (
                        <div key={index}>
                            {option !== null && <MenuItem
                                key={option}
                                onClick={(event) => handleMenuItemClick(event, index)}
                            >
                                <div className='content-cont'>
                                    <div className='circle'>
                                        <div>MJ</div>
                                    </div>
                                    <div>
                                        <p style={{ fontSize: "0.9rem" }}>Demo Line</p>
                                        <p style={{ fontSize: "0.7rem" }}>{option}</p>
                                    </div>
                                </div>
                            </MenuItem>}
                        </div>
                    ))}
                </Box>
            </Menu>
        </div>
    );
}