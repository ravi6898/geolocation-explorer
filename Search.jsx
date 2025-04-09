import React, { useState } from 'react';
import axios from 'axios';

function Search({ onLocationSelect }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [results, setResults] = useState([]);

    const searchLocation = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(
                `https://nominatim.openstreetmap.org/search?format=json&q=${searchQuery}`
            );
            setResults(response.data);
        } catch (error) {
            console.error('Error searching location:', error);
        }
    };

    return (
        <div className="search-container">
            <form onSubmit={searchLocation}>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search location..."
                />
                <button type="submit">Search</button>
            </form>
            <div className="results">
                {results.map((result) => (
                    <div
                        key={result.place_id}
                        onClick={() => onLocationSelect([
                            parseFloat(result.lat),
                            parseFloat(result.lon)
                        ])}
                        className="result-item"
                    >
                        {result.display_name}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Search;