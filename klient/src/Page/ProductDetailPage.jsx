import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { getProduct } from '../services/productService';
import { useCart } from '../context/CartContext';

const ProductDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { addToCart } = useCart();

    // Загрузка товара
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await getProduct(id);
                setProduct(data);
                setLoading(false);
            } catch (err) {
                setError('Ошибка при загрузке товара');
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    // Добавление товара в корзину
    const handleAddToCart = () => {
        if (product) {
            addToCart(product);
            alert('Товар добавлен в корзину!');
        }
    };

    if (loading) {
        return (
            <div>
                <Header />
                <div className="flex justify-center items-center min-h-screen">
                    <div className="text-celestial-100 text-xl">Загрузка товара...</div>
                </div>
                <Footer />
            </div>
        );
    }

    if (error || !product) {
        return (
            <div>
                <Header />
                <div className="flex justify-center items-center min-h-screen">
                    <div className="text-red-500 text-xl">{error || 'Товар не найден'}</div>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div>
            <Header />
            {/* Страница детального описания товара */}
            <section className='my-10 max-w-[1920px] mx-auto'>
                <div className='flex flex-col gap-y-5 bg-celestial-500 md:px-14 px-2 py-5'>
                    {/* Кнопка назад */}
                    <button
                        onClick={() => navigate('/products')}
                        className='text-celestial-100 text-left ml-5 hover:text-celestial-200 transition-colors'
                    >
                        ← Назад
                    </button>

                    {/* Детальное описание товара */}
                    <div className='flex lg:flex-row flex-col gap-y-5'>
                        <div className='flex items-center justify-center 2xl:w-1/3 lg:w-1/2'>
                            <img 
                                src={product.image} 
                                alt={product.name}
                                className='w-full max-w-md rounded-3xl'
                            />
                        </div>
                        
                        <div className='flex flex-col gap-6 2xl:w-2/3 lg:w-1/2 lg:px-0 px-5'>
                            <h1 className='text-4xl font-bold text-celestial-100'>
                                {product.name}
                            </h1>
                            
                            <p className='text-3xl font-bold text-celestial-100'>
                                {product.price} ₽
                            </p>
                            
                            <div className='text-celestial-100'>
                                <h2 className='text-xl font-semibold mb-2'>Описание</h2>
                                <p className='text-lg'>{product.description}</p>
                            </div>

                            <button
                                className='bg-celestial-100 text-celestial-500 py-3 px-6 rounded-full font-semibold hover:bg-celestial-200 transition-colors'
                                onClick={handleAddToCart}
                            >
                                Добавить в корзину
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default ProductDetailPage; 