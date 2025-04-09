import React, { useState } from 'react';
import Map from './components/Map';
import Search from './components/Search';
import config from './config/config';
import './App.css';

function App() {
    const [selectedLocation, setSelectedLocation] = useState(config.map.defaultPosition);
    const [locationDetails, setLocationDetails] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleLocationSelect = async (location, details) => {
        try {
            setIsLoading(true);
            setError(null);
            setSelectedLocation(location);
            setLocationDetails(details);
        } catch (err) {
            setError('Failed to load location details');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="App">
            <nav className="navbar">
                <h1>Geolocation Explorer</h1>
            </nav>
            <div className="main-container">
                <div className="sidebar">
                    {error && <div className="error-message">{error}</div>}
                    <Search 
                        onLocationSelect={handleLocationSelect}
                        isLoading={isLoading}
                    />
                    {locationDetails && (
                        <div className="location-details">
                            <h3>Location Details</h3>
                            <div className="detail-item">
                                <span>Name:</span>
                                <p>{locationDetails.display_name}</p>
                            </div>
                            <div className="detail-item">
                                <span>Coordinates:</span>
                                <p>{locationDetails.lat}, {locationDetails.lon}</p>
                            </div>
                        </div>
                    )}
                </div>
                <div className="map-container">
                    <Map selectedLocation={selectedLocation} />
                </div>
            </div>
        </div>
    );
}

export default App;