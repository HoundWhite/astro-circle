import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        // Загружаем корзину из localStorage при инициализации
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Сохраняем корзину в localStorage при каждом изменении
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    // Добавление товара в корзину
    const addToCart = (product) => {
        setCart(prevCart => {
            // Проверяем, есть ли уже такой товар в корзине
            const existingItem = prevCart.find(item => item.id === product.id);
            
            if (existingItem) {
                // Если товар уже есть, увеличиваем количество
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                // Если товара нет, добавляем его с количеством 1
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    // Удаление товара из корзины
    const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    };

    // Обновление количества товара в корзине
    const updateQuantity = (productId, quantity) => {
        if (quantity < 1) return;
        
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === productId
                    ? { ...item, quantity }
                    : item
            )
        );
    };

    // Очистка корзины
    const clearCart = () => {
        setCart([]);
    };

    // Получение общей стоимости товаров в корзине
    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    // Получение общего количества товаров в корзине
    const getTotalItems = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            getTotalPrice,
            getTotalItems
        }}>
            {children}
        </CartContext.Provider>
    );
}; 