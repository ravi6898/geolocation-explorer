import axios from 'axios';
import config from '../config/config.js';

const locationService = {
    searchLocation: async (query) => {
        try {
            const response = await axios.get(
                `${config.api.nominatim}/search?format=json&q=${encodeURIComponent(query)}`
            );
            return response.data;
        } catch (error) {
            console.error('Error searching location:', error);
            throw error;
        }
    }
};

export default locationService;