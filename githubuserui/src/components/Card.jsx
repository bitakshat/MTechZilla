import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Card = () => {

    const [userName, setUserName] = useState('');
    const [submittedValue, setSubmittedValue] = useState('');
    const [userData, setUserData] = useState('');

    const handleInputChange = event => {
        setUserName(event.target.value);
    };

    const navigate = useNavigate();
    const handleSubmit = () => {
        setSubmittedValue(userName);
        console.log("userdata: ", userData)
        navigate('/userinfo')
    };

    useEffect(() => {
        const apiUrl = `https://api.github.com/users/${userName}`;

        axios.get(apiUrl)
            .then(response => {
                setUserData(response.data); // Set the fetched data
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [])

    return (
        <div class="max-w-xs w-96 h-1/2">
            <div class="bg-white shadow-xl rounded-lg py-3 w-1/2 h-3/4">
                <h1>Github User Details</h1>

                <label htmlFor="nameInput">Enter Github Username:</label>
                <input
                    type="text"
                    id="nameInput"
                    value={userName}
                    onChange={handleInputChange}
                />
                <button onClick={handleSubmit}>Get Details!</button>
                <p>You entered: {submittedValue}</p>
            </div>
        </div>
    )
}

export default Card;