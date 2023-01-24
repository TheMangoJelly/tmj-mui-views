import * as React from 'react';
import PropTypes from 'prop-types';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';

function ValueLabelComponent(props) {
    const { children, value } = props;

    return (
        <Tooltip enterTouchDelay={0} placement="top" title={value}>
            {children}
        </Tooltip>
    );
}

ValueLabelComponent.propTypes = {
    children: PropTypes.element.isRequired,
    value: PropTypes.number.isRequired,
};


const AirbnbSlider = styled(Slider)(({ theme }) => ({
    color: '#2196f3',
    height: 3,
    padding: '13px 0',
    '& .MuiSlider-thumb': {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "2px",
        height: 16,
        width: 16,
        backgroundColor: '#fff',
        border: '1px solid gray',
        padding: "5px",
        '&:hover': {
            boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
        },
        '& .airbnb-bar': {
            height: 7,
            width: 1.5,
            backgroundColor: 'black',
            // marginRight: 1.3,
        },
    },
    '& .MuiSlider-track': {
        height: 3,
    },
    '& .MuiSlider-rail': {
        color: theme.palette.mode === 'dark' ? '#bfbfbf' : '#d8d8d8',
        opacity: theme.palette.mode === 'dark' ? undefined : 1,
        height: 3,
    },
}));

function AirbnbThumbComponent(props) {
    const { children, ...other } = props;
    return (
        <SliderThumb {...other}>
            {children}
            <span className="airbnb-bar" />
            <span className="airbnb-bar" />
            <span className="airbnb-bar" />
        </SliderThumb>
    );
}

AirbnbThumbComponent.propTypes = {
    children: PropTypes.node,
};

export default function CustomizedSlider({ range, setRange }) {
    const [sliderValue, setSliderValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
        setRange(newValue);
    };
    return (
        <Box sx={{ width: 320 }}>
            <AirbnbSlider
                slots={{ thumb: AirbnbThumbComponent }}
                getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
                value={range}
                onChange={handleChange}
            />
        </Box>
    );
}