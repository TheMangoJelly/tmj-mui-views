import React from "react";
import { Button, List, ListItemText, Menu, MenuItem, Typography } from "@mui/material";
import { Check, KeyboardArrowDown, Search } from "@mui/icons-material";
import { Box } from "@mui/system";
import Stack from "@mui/material/Stack";
// import { DEFAULT_NUMERIC_VALUES } from "../../../constants/NumericConstants";
import "./style.css";

// import _ from "underscore";

// interface DropdownMultiSelectProps {
//   queryMulti?: string;
//   setQueryMulti?: Function;
//   options?: string[]
// }

export default function MultiSelectDemo({ filterTitle, queryMulti, setQueryMulti, options }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [menuOptions, SetMenuOptions] = React.useState(options);
    let filteredMenuOptions = [];
    const [selectedMenuOptions, setSelectedMenuOptions] = React.useState([]);
    let filteredSelectedMenuOptions = [...selectedMenuOptions];
    const [searchText, setSearchText] = React.useState("");

    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuOptionClick = (option) => {
        setSelectedMenuOptions([...selectedMenuOptions, option]);
        filteredMenuOptions = menuOptions.filter((menuItem) => menuItem !== option);
        SetMenuOptions([...filteredMenuOptions]);
        setQueryMulti([...queryMulti, option]);
    };

    const handleSelectedMenuOptionClick = (option) => {
        SetMenuOptions([...menuOptions, option]);
        filteredSelectedMenuOptions = selectedMenuOptions.filter((menuItem) => menuItem !== option);
        setSelectedMenuOptions([...filteredSelectedMenuOptions]);
        setQueryMulti(queryMulti.filter((query) => query !== option));
    };

    const handleSearch = (event) => {
        setSearchText(event.target.value)
        if (event.target.value.length > 2) {
            filteredMenuOptions = menuOptions.filter((menuItem) => menuItem.toLowerCase().includes(event.target.value.toLowerCase()) );
            SetMenuOptions([...filteredMenuOptions]);
        } else {
            SetMenuOptions([...options]);
        }
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    React.useEffect(() => {
        if (menuOptions.length === 0) {
            SetMenuOptions(options);
        }
    }, [options]);

    return (
        <div>
            <List component="nav">
                <Button
                    endIcon={open ? <KeyboardArrowDown sx={{ color: "gray" }} /> : <KeyboardArrowDown sx={{ color: "gray" }} />}
                    id="lock-button"
                    aria-haspopup="listbox"
                    aria-controls="lock-menu"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClickListItem}
                    sx={{ border: "0.5px solid lightgray", borderRadius: "7px" }}
                >
                    <ListItemText secondary={filterTitle} />
                </Button>
            </List>
            <Menu
                sx={{ marginTop: "10px" }}
                id="lock-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "lock-button",
                    role: "listbox",
                }}
            >
                <Box sx={{ p: "0px 5px" }}>
                    <Stack
                        sx={{
                            borderRadius: "5px",
                            mb: "3px",
                            backgroundColor: "rgb(238, 238, 238)",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            p: "2px 5px",
                            width: "100%",
                            height: "40px",
                            border: "0.5px solid llightgray",
                        }}
                    >
                        <Search sx={{ m: "2px" }} fontSize="0.8rem" />
                        <input
                            value={searchText}
                            onChange={handleSearch}
                            // onChange={(event) => {
                            //   setSearchText(event.target.value);
                            //   handleSearch(event.target.value);
                            // }}
                            className="search"
                            placeholder="search"
                            type="search"
                            name=""
                            id=""
                        />
                    </Stack>

                    <div style={{ maxHeight: "240px", height: "fit-content", overflowY: "scroll" }}>
                        {selectedMenuOptions.map((option, index) => {
                            return (
                                <div key={index}>
                                    {option !== null && (
                                        <MenuItem key={option} selected onClick={(event) => handleSelectedMenuOptionClick(option)}>
                                            <div className="content-container">
                                                <Check fontSize="0.8rem" />
                                                <div>
                                                    <p style={{ fontSize: "0.7rem" }}>{option}</p>
                                                </div>
                                            </div>
                                        </MenuItem>
                                    )}
                                </div>
                            );
                        })}

                        <hr style={{ borderTop: "0.5px", backgroundColor: "gray", margin: "5px 0px" }} />

                        <Typography sx={{ marginTop: "3px", color: "gray", fontSize: "0.7rem" }}>{menuOptions.length === 0 ? 'Nothing found' : 'Suggestions'}</Typography>

                        {menuOptions.map((option, index) => {
                            return (
                                <div key={index}>
                                    {option !== null && (
                                        <MenuItem key={option} onClick={(event) => handleMenuOptionClick(option)}>
                                            <div className="content-container">
                                                <p style={{ fontSize: "0.7rem" }}>{option}</p>
                                            </div>
                                        </MenuItem>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </Box>
            </Menu>
        </div>
    );
}