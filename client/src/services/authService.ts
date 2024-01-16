import apiService from './apiService';

const login = async (email: string, password: string) => {
    try {
        const response = await apiService.post('/users', { email, password });
        const token = response.data.token;
        localStorage.setItem('jwtToken', token);
        return response.data.user;
    } catch (error) {
        // Handle error (e.g., incorrect credentials, network issues, etc.)
        console.error(error);
        throw error;
    }
};

const refreshToken = async () => {
    try {
        const currentToken = localStorage.getItem('jwtToken');
        if (!currentToken) {
            throw new Error("No current token available for refresh");
        }

        const response = await apiService.post('/refresh-token', { token: currentToken });
        const newToken = response.data.newToken;
        localStorage.setItem('jwtToken', newToken);
        return newToken; // Return the new token
    } catch (error) {
        console.error("Error refreshing token: ", error);
        throw error;
    }
};

const authService = {
    login,
    refreshToken,
    // other authentication related functions
};

export default authService;
