import React from 'react';

function Welcome(props) {

    function fetchData() {
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then((data) => {
            props.setCountryList(data);
            props.setAppState('loaded');

        });
    }

    return(
        <button onClick={fetchData}>See the world</button>
    )
}

export default Welcome;