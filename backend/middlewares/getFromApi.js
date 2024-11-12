const config = require('../config/config.json')

const getImage = async (token, route) => {

    const convertToBuffer = (arrayBuffer) => {
        return Buffer.from(new Uint8Array(arrayBuffer));
    };
    try {
        const image = await fetch(route, {
            method: 'GET',
            headers: {
                "Content-Type":"image/png",
                accept : "image/png",
                "X-Group-Authorization": config.apikey,
                Authorization: `Bearer ${token}`
            }
        })
        const imageData = await image.arrayBuffer();
        if (image.ok) {
            return imageData; //convertToBuffer(imageData);
        } else {
            throw new Error("Error fecthing image");
        }
    } catch (error) {
        throw new Error(`Error: ${error.message}`)
    }
};

const getFromApi = async (token, route) => {
    try {
        const response = await fetch(route, {
            method: 'GET',
            headers: {
              "Content-Type": "application/json",
              accept : "application/json, image/png",
              "X-Group-Authorization": config.apikey,
              Authorization: `Bearer ${token}`
            },
        })

        const responseData = await response.json()
        if (response.ok) {
            return responseData;
        } else {
            throw new Error("Error fetching data");
        }
    } catch (error) {
        throw new Error(`Error: ${error.message}`)
    }
}

module.exports = {getFromApi, getImage}