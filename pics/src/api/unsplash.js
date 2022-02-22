import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID xA8AfT_Sc2rHfgLM65IvrUR1t7Y2wlKAcy5eVGwoSuY'
    }
});