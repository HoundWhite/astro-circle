import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { useCart } from '../context/CartContext';

const AccountPage = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCart();

    // Загрузка данных пользователя
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    navigate('/login');
                    return;
                }

                const response = await fetch('http://localhost:8000/user-profile/', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Token ${token}`,
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                });

                if (!response.ok) {
                    if (response.status === 401) {
                        // Если токен недействителен, перенаправляем на страницу входа
                        localStorage.removeItem('token');
                        localStorage.removeItem('user');
                        navigate('/login');
                        return;
                    }
                    const errorData = await response.json();
                    throw new Error(errorData.error || 'Ошибка при загрузке данных пользователя');
                }

                const data = await response.json();
                setUser(data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching user data:', err);
                setError(err.message);
                setLoading(false);
            }
        };

        fetchUserData();
    }, [navigate]);

    // Выход из аккаунта
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login');
    };

    if (loading) {
        return (
            <div>
                <Header />
                <div className="flex justify-center items-center min-h-screen">
                    <div className="text-celestial-100 text-xl">Загрузка данных...</div>
                </div>
                <Footer />
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <Header />
                <div className="flex justify-center items-center min-h-screen">
                    <div className="text-red-500 text-xl">{error}</div>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div>
            <Header />
            {/* Личный кабинет */}
            <section className='my-10 max-w-[1920px] mx-auto'>
                <div className='flex flex-col gap-y-8 md:px-14 px-2 mt-12'>
                    <h3 className='2xl:text-4xl md:text-2xl text-3xl font-bold text-center text-celestial-100'>
                        Личный кабинет
                    </h3>

                    <div className='flex flex-col lg:flex-row gap-8'>
                        {/* Информация о пользователе */}
                        <div className='bg-celestial-500 p-8 rounded-3xl w-1/3'>
                            <h2 className='text-2xl font-semibold text-celestial-100 mb-6'>
                                Информация о пользователе
                            </h2>
                            {user && (
                            <div className='space-y-4'>
                                    <p className='text-celestial-100'>
                                        <span className='font-semibold'>Имя:</span> {user.name}
                                    </p>
                                    <p className='text-celestial-100'>
                                        <span className='font-semibold'>Email:</span> {user.email}
                                    </p>
                                    <p className='text-celestial-100'>
                                        <span className='font-semibold'>Телефон:</span> {user.telephon}
                                    </p>
                            <button
                                onClick={handleLogout}
                                        className='mt-4 bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-600 transition-colors'
                            >
                                        Выйти
                            </button>
                                </div>
                            )}
                        </div>

                        {/* Корзина */}
                        <div className='bg-celestial-500 p-8 rounded-3xl w-2/3'>
                            <h2 className='text-2xl font-semibold text-celestial-100 mb-6'>
                                Корзина
                            </h2>
                            {cart.length === 0 ? (
                                <p className='text-celestial-100'>Ваша корзина пуста</p>
                            ) : (
                                <div className='space-y-4'>
                                    {cart.map((item) => (
                                        <div key={item.id} className='flex items-center gap-4 bg-celestial-400 p-4 rounded-xl'>
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className='w-20 h-20 object-cover rounded-lg'
                                            />
                                            <div className='flex-1'>
                                                <h3 className='text-celestial-100 font-semibold'>{item.name}</h3>
                                                <p className='text-celestial-200'>{item.price} ₽</p>
                                                <div className='flex items-center gap-2 mt-2'>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className='text-celestial-100 hover:text-celestial-200'
                                                    >
                                                        -
                                                    </button>
                                                    <span className='text-celestial-100'>{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className='text-celestial-100 hover:text-celestial-200'
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className='text-red-500 hover:text-red-600'
                                            >
                                                Удалить
                                            </button>
                                        </div>
                                    ))}
                                    <div className='mt-6 flex justify-between items-center'>
                                        <p className='bg-celestial-100 text-celestial-700 shadow-lg text-xl font-semibold py-1 px-2 rounded-lg'>
                                            Итого: {getTotalPrice()} ₽
                                        </p>
                                        <button
                                            className='bg-celestial-100 text-celestial-500 py-2 px-6 rounded-full hover:bg-celestial-200 transition-colors'
                                            onClick={() => {
                                                // TODO: Добавить функционал оформления заказа
                                                alert('Функционал оформления заказа будет добавлен позже');
                                            }}
                                        >
                                            Оформить заказ
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default AccountPage; 