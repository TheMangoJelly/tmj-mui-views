import { set } from 'date-fns';
import React, { useEffect, useState } from 'react';
import MultiSelectListMenu from '../MultiSelectListMenu/MultiSelectListMenu';
import NumericSelectItem from '../NumericSelect/NumericSelectItem';
import SimpleListMenu from '../SimpleListMenu/SimpleListMenu';

const Home = () => {
    const [query, setQuery] = useState("");

    const [querySimple, setQuerySimple] = useState("");
    const [queryMulti, setQueryMulti] = useState([]);
    const [queryNumeric, setQueryNumeric] = useState("");


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
        // {
        //     id: 4,
        //     logo: "MJ",
        //     heading: "Demolime 4",
        //     desc: "Thursday"
        // },
        // {
        //     id: 4,
        //     logo: "MJ",
        //     heading: "Demolime 4",
        //     desc: "Thursday"
        // },
        // {
        //     id: 4,
        //     logo: "MJ",
        //     heading: "Demolime 4",
        //     desc: "Thursday"
        // },
        // {
        //     id: 4,
        //     logo: "MJ",
        //     heading: "Demolime 4",
        //     desc: "Thursday"
        // },
        // {
        //     id: 4,
        //     logo: "MJ",
        //     heading: "Demolime 4",
        //     desc: "Thursday"
        // },

    ];

    const optionsForNumeric = [
        "Less Than",
        "Greter than",
        "Equal to",
        "In between",
    ];

    const createQuery = () => {
        if (querySimple === "" && queryMulti.length === 0) {
            console.log(query);
        } else if (queryMulti.length === 0) {
            setQuery("query=" + "simple=" + querySimple);
        } else if (querySimple === "") {
            setQuery("query=" + "multi=" + queryMulti.toString());
        } else {
            setQuery("query=" + "simple=" + querySimple + "multi=" + queryMulti.toString());
        }
        console.log(query);
    }

    useEffect(() => {
        createQuery();
    }, [query, queryMulti, querySimple, queryNumeric]);

    return (
        <>
            <div style={{ padding: "1rem", display: "flex", gap: "2rem" }}>
                <SimpleListMenu setQuerySimple={setQuerySimple} options={optionsForSimple} />
                <MultiSelectListMenu setQueryMulti={setQueryMulti} queryMulti={queryMulti} options={optionsForMulti} />
                <NumericSelectItem setQueryNumeric={setQueryNumeric} setRange={setRange} range={range} options={optionsForNumeric} />
            </div>
        </>
    )
}

export default Home