import axios from 'axios';

const API_URL = 'http://localhost:8080'; // URL tới backend

export const getQuote = async (deviceDetails) => {
    return await axios.post(`${API_URL}/quote`, deviceDetails);
};

export const getItemStatus = async (itemId) => {
    return await axios.get(`${API_URL}/item-status/${itemId}`);
};

// Các lệnh gọi API khác tương tự
