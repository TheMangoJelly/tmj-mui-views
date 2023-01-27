import React, { useEffect, useState } from 'react';
import MultiSelectListMenu from '../MultiSelectListMenu/MultiSelectListMenu';
// import MultiSelectDemo from '../MultiSelectListMenu/MultiSelectDemo';
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
        "Monday", "Tuesday", "wednesday", "thursday", "tun"
    ];

    const optionsForNumeric = [
        "Less Than",
        "Greter than",
        "Equal to",
        "In between",
    ];

    const createQuery = () => {
        if (querySimple === "" && queryMulti.length === 0 && queryNumeric === "") {
            console.log(query);
        } else if (queryMulti.length === 0) {
            setQuery("query=" + "simple=" + querySimple);
        } else if (querySimple === "") {
            setQuery("query=" + "multi=" + queryMulti.toString());
        } else {
            setQuery("query=" + "simple=" + querySimple + "multi=" + queryMulti.toString());
        }
        console.log(queryNumeric);
    }

    useEffect(() => {
        createQuery();
    }, [query, queryMulti, querySimple, queryNumeric]);





    return (
        <>
            <div style={{ padding: "1rem", display: "flex", gap: "2rem" }}>
                <SimpleListMenu setQuerySimple={setQuerySimple} options={optionsForSimple} />

                {/* This is my multiselectMenu file */}
                <MultiSelectListMenu setQueryMulti={setQueryMulti} queryMulti={queryMulti} options={optionsForMulti} />

                {/* This is  Your file of multiSelect */}
                {/* <MultiSelectDemo setQueryMulti={setQueryMulti} queryMulti={queryMulti} options={optionsForMulti} /> */}
                <NumericSelectItem setQueryNumeric={setQueryNumeric} setRange={setRange} range={range} options={optionsForNumeric} />
            </div>
        </>
    )
}

export default Home