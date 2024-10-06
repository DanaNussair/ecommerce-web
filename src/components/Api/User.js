import axios from 'axios';

export const registerUser = async (data) => {
	try {
		const response = await axios.post('http://localhost:3001/users', data);
		return response.data;
	} catch (error) {
		return error.response.data;
	}
};
