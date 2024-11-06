import axios from 'axios';

const API_URL = "https://firstapp-4329.onrender.com"

export const postStudentData = async (student_name, student_score) => {
    try {
        let data = JSON.stringify({
            student_name,
            student_score
        });

        const response = await axios.post(`${API_URL}/add-info/post-student-data`, data, {
            headers: {
                "Content-Type": "application/json",  // Ensure you're sending JSON
            }
        });
        
        console.log(response.data); // Log or handle response as needed
    } catch (error) {
        console.error('Error posting student data:', error);
    }
};

export const fetchStudentData = async () => {
    try {
        const response = await axios.get(`${API_URL}/view-data/get-student-data`);
        return response.data; // Return data to be used in your app
    } catch (error) {
        console.error('Error fetching student data:', error);
    }
};