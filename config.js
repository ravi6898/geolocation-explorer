const config = {
    api: {
        nominatim: process.env.REACT_APP_OSM_NOMINATIM_URL || 'https://nominatim.openstreetmap.org'
    },
    map: {
        defaultPosition: [
            parseFloat(process.env.REACT_APP_DEFAULT_LATITUDE) || 51.505,
            parseFloat(process.env.REACT_APP_DEFAULT_LONGITUDE) || -0.09
        ],
        defaultZoom: parseInt(process.env.REACT_APP_DEFAULT_ZOOM) || 13
    }
};

export default config;