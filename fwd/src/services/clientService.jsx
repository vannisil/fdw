const GET_CLIENT_URL = 'http://localhost:8080/api/v1/products/',
    GET_CLIENT_HEADERS = {"Content-Type":"application/json"};

export default {
    getProducts: () => {
        return fetch(GET_CLIENT_URL, {
            method: "get",
            headers: GET_CLIENT_HEADERS
        }).then(res => res.json()).then(data => data)
    }
};