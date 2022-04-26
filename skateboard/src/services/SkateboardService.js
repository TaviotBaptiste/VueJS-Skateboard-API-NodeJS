const axios = require('axios');

export async function getAllSkateboards() {

    const response = await axios.get('/api/skateboards');
    return response.data;
}

export async function createSkateboard(data) {
    const response = await axios.post(`/api/skateboard`, {skateboard: data});
    return response.data;
}