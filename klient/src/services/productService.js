const API_URL = 'http://localhost:8000';

export const getProducts = async () => {
    try {
        const response = await fetch(`${API_URL}/products/`);
        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

export const getProduct = async (id) => {
    try {
        const response = await fetch(`${API_URL}/products/${id}/`);
        if (!response.ok) {
            throw new Error('Failed to fetch product');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching product:', error);
        throw error;
    }
}; 