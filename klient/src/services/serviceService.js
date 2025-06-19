const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

export const getServices = async () => {
    try {
        const response = await fetch(`${API_URL}/services/`);
        if (!response.ok) {
            throw new Error('Failed to fetch services');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching services:', error);
        throw error;
    }
};

export const getService = async (id) => {
    try {
        const response = await fetch(`${API_URL}/services/${id}/`);
        if (!response.ok) {
            throw new Error('Failed to fetch service');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching service:', error);
        throw error;
    }
}; 