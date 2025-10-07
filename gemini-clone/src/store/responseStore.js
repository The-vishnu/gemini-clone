import axios from 'axios';

const API_URL = "http://localhost:5000/api/gemini";

export const sendMessageToBackend = async (prompt) => {
    try {
        const response = await axios.post(`${API_URL}`, { prompt });
        return response.data.reply; 
    } catch (error) {
        console.error("Error sending message to backend:", error);
        throw error;
    }
}