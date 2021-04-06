import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import '../App.css';

function HomePage() {
    return (
        <div className="App">
            <h1>MSHOP IS REACT + LARAVEL PWA ECOMMERCE APP m</h1>
            <FontAwesomeIcon icon={faCoffee} />
        </div>
    );
}

export default HomePage;
