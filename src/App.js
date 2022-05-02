
import React from 'react'
import './App.css';
import Welcome from './components/Welcome/Welcome'
import CountryGrid from './components/CountryGrid/CountryGrid'

function App() {

    const [appState, setAppState] = React.useState('welcome');
    const [countryList, setCountryList] = React.useState(null);

    return (
    <div className="App">
        {appState === 'welcome' && <Welcome setAppState={setAppState} setCountryList={setCountryList}/>}
        {appState === 'loaded' && <CountryGrid countryList={countryList}/>}
    </div>
    );
}

export default App;
