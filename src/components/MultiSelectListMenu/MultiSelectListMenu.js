import * as React from 'react';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Button } from '@mui/material';
import { Check, KeyboardArrowDown, Search } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { Stack, Box } from '@mui/system';
import "./style.css";
import { sub } from 'date-fns';


export default function MultiSelectListMenu({ queryMulti, setQueryMulti, options }) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const [suggestion, setSuggestion] = React.useState([]);
    const [searchText, setSearchText] = React.useState('');
    let forSugges = [...suggestion];

    const [filteredArr, SetFilteredArr] = React.useState(options);
    let forFilter = [];

    const open = Boolean(anchorEl);
    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, object) => {
        // Handle Menu
        setSuggestion([...suggestion, object])
        forFilter = filteredArr.filter((obj) => obj.id !== object.id);
        SetFilteredArr([...forFilter]);
        setQueryMulti([...queryMulti, object.desc]);
    };

    const handleSugesstionItemClick = (event, object) => {
        // Handle Suggestion ------------------------------
        SetFilteredArr([...filteredArr, object])
        forSugges = suggestion.filter((obj) => obj.id !== object.id);
        setSuggestion([...forSugges]);
        setQueryMulti(queryMulti.filter((query) => query !== object.desc));
        console.log(queryMulti);
    };

    const handleSearch = (value) => {
        console.log([...forFilter])
        if (value.length >= 3) {
            forFilter = filteredArr.filter((obj) => obj.desc.toLowerCase().includes(value.toLowerCase()));
            console.log([...forFilter])
            SetFilteredArr([...forFilter]);
        }else{
            SetFilteredArr([...options]);
        }
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
                        <input value={searchText} onChange={(e) => { setSearchText(e.target.value); handleSearch(e.target.value) }} className='search' placeholder='search' type="search" name="" id="" />
                    </Stack>

                    <div style={{ maxHeight: "240px", height:"fit-content" , overflowY: "scroll" }}>
                        {suggestion.map((option, index) => (
                            <div key={index}>
                                {option !== null && <MenuItem
                                    key={option}
                                    selected
                                    onClick={(event) => handleSugesstionItemClick(event, option)}
                                >
                                    <div className='content-cont'>
                                        <Check fontSize='0.8rem' />
                                        <div className='circle'>
                                            <div>{option.logo}</div>
                                        </div>
                                        <div>
                                            <p style={{ fontSize: "0.9rem" }}>{option.heading}</p>
                                            <p style={{ fontSize: "0.7rem" }}>{option.desc}</p>
                                        </div>
                                    </div>
                                </MenuItem>}
                            </div>
                        ))}

                        <hr style={{ borderTop: "0.5px", backgroundColor: "gray", margin: "5px 0px" }} />

                        <Typography sx={{ marginTop: "3px", color: "gray", fontSize: "0.7rem" }}>Suggestions</Typography>

                        {filteredArr.map((option, index) => (
                            <div key={index}>
                                {option !== null && <MenuItem
                                    key={option}
                                    onClick={(event) => handleMenuItemClick(event, option)}
                                >
                                    <div className='content-cont'>
                                        <div className='circle'>
                                            <div>{option.logo}</div>
                                        </div>
                                        <div>
                                            <p style={{ fontSize: "0.9rem" }}>{option.heading}</p>
                                            <p style={{ fontSize: "0.7rem" }}>{option.desc}</p>
                                        </div>
                                    </div>
                                </MenuItem>}
                            </div>
                        ))}
                    </div>
                </Box>
            </Menu>
        </div>
    );
}




// Handle Suggestion ------------------------------
// setQuery([...query, suggestion[index]]);
// filteredArr.push(suggestion[index]);
// setQuery([...filteredArr]);


// Handle Menu
// setSuggestion([...suggestion, options[index]]);
// filteredArr = filteredArr.filter((obj) => obj.id !== options[index].id)
// setQuery([...filteredArr]);