import * as React from 'react';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Button } from '@mui/material';
import { Check, KeyboardArrowDown } from '@mui/icons-material';



export default function SimpleListMenu({ setQuerySimple, options }) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const open = Boolean(anchorEl);
    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index ,option) => {
        setSelectedIndex(index);
        setAnchorEl(null);
        setQuerySimple(option);
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
                        secondary={options[selectedIndex]}
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
                {options.map((option, index) => (
                    <MenuItem
                        key={option}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index, option)}
                    >
                        <Check fontSize='0.8rem' sx={{ marginRight: "7px", visibility: `${index === selectedIndex ? "visible" : "hidden"}` }} />{option}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}