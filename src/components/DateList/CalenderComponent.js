import React, { useState } from 'react';
import "./DateList.css";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { addDays, format } from 'date-fns/esm';


const CalenderComponent = () => {
    const [open, setOPen] = useState(true);
    const [range, setRange] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: "selection"
        },
    ]);

    return (
        <div className='calenderWrap'>
            {/* <input onClick={() => setOPen(!open)} type="text" readOnly value={`${format(range[0].startDate, "MM/dd/yyyy")} to ${format(range[0].endDate, "MM/dd/yyyy")}`} className="inputBox" /> */}
            {open && <DateRangePicker
                className='calenderElement'
                date={new Date()}
                onChange={(item) => setRange([item.selection])}
                direction="horizontal"
                months={2}
                ranges={range}
                editableDateInputs={true}
                moveRangeOnFirstSelection={false}
            />}
        </div>
    )
}

export default CalenderComponent