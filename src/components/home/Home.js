import React, { useState } from 'react';
import MultiSelectListMenu from '../MultiSelectListMenu/MultiSelectListMenu';
import NumericSelectItem from '../NumericSelect/NumericSelectItem';
import SimpleListMenu from '../SimpleListMenu/SimpleListMenu';

const Home = () => {
    const optionsForSimple = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursdays",
    ];
    const [range, setRange] = useState([20, 60]);



    const optionsForMulti = [
        {
            id: 1,
            logo: "MJ",
            heading: "Demolime 1",
            desc: "MOnday"
        },
        {
            id: 2,
            logo: "MJ",
            heading: "Demolime 2",
            desc: "Tuesday"
        },
        {
            id: 3,
            logo: "MJ",
            heading: "Demolime 3",
            desc: "Wednesday"
        },
        {
            id: 4,
            logo: "MJ",
            heading: "Demolime 4",
            desc: "Thursday"
        },

    ];

    const optionsForNumeric = [
        "Less Than",
        "Greter than",
        "Equal to",
        "In between",
    ];

    return (
        <div style={{ padding: "1rem", display: "flex", gap: "2rem" }}>
            <SimpleListMenu options={optionsForSimple} />
            <MultiSelectListMenu options={optionsForMulti} />
            <NumericSelectItem setRange={setRange} range={range} options={optionsForNumeric} />
        </div>
    )
}

export default Home