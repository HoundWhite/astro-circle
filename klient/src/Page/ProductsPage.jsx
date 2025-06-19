import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { getProducts } from '../services/productService';

const ProductsPage = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Загрузка товаров
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts();
                setProducts(data);
                setLoading(false);
            } catch (err) {
                setError('Ошибка при загрузке товаров');
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    // Обработка клика на карточке товара
    const handleProductClick = (productId) => {
        navigate(`/product/${productId}`);
    };

    if (loading) {
        return (
            <div>
                <Header />
                <div className="flex justify-center items-center min-h-screen">
                    <div className="text-celestial-100 text-xl">Загрузка товаров...</div>
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
        {/* Страница продукции */}
        <section className='my-10 max-w-[1920px] mx-auto'>
           <div className='flex flex-col gap-y-8 md:px-14 px-2 mt-12'>
                {/* Заголовок и карточки */}
                <h3 className='2xl:text-4xl md:text-2xl text-3xl font-bold text-center text-celestial-100'>Наши товары</h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                        {products.map((product) => (
                            <div
                                key={product.id}
                                onClick={() => handleProductClick(product.id)}
                                className='flex flex-col overflow-hidden bg-celestial-500 rounded-3xl cursor-pointer hover:bg-celestial-600 transition-colors'
                            >
                                <div className='flex items-center justify-center h-48 overflow-hidden'>
                                    <img 
                                        src={product.image} 
                                        alt={product.name}
                                        className='w-full h-full object-cover'
                                    />
                                </div>
                                <div className='p-6 text-celestial-100'>
                                    <h4 className='text-xl font-semibold mb-2'>{product.name}</h4>
                                    <p className='text-2xl font-bold mb-4'>{product.price} ₽</p>
                                    <p className='text-sm line-clamp-3'>{product.description}</p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </section>
        <Footer />
    </div>
  )
}

export default ProductsPage