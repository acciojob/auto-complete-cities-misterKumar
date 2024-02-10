import React, { useEffect, useState } from "react";

const cities = [
    "Mumbai",
    "Ajmer",
    "Ajmer",
    "Navi Mumbai",
    "Hydrabad",
    "Sangli Miraj Kupwad",
    "Banglore",
    "Jammu",
    "jaipur",
    "Jabalpur",
    "Ahemdabad",
]

const Text = () => {
    let [change, setChange] = useState('');
    let [update, setUpdate] = useState([]);
    let [val, setVal] = useState('');

    useEffect(() => {
        setUpdate(
            cities.filter((city) => (
                city.toLowerCase().includes(change.toLowerCase())
                ))
        )
    }, [change])
    
    return (
        <div>
            <input value={val?val:change} onChange={(e) => { setChange(e.target.value) }}></input>
            <ul>

                {
                    update.map((city, ind) => (
                        <li key={ind} onClick={() => { setVal(city) }}>{city}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Text;