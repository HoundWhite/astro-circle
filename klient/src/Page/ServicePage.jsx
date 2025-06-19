import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { useCart } from '../context/CartContext';

const ServicePage = () => {
  
  const { addToCart } = useCart();

  // Обработка добавления услуги в корзину
  const handleAddToCart = (service) => {
    addToCart(service);
    alert('Услуга добавлена в корзину!');
  };

  return (
    <div>
      <Header />
      {/* Страница услуг */}
      <section className='my-10 max-w-[1920px] mx-auto'>
        <div className='flex flex-col gap-y-8 md:px-14 px-2 mt-12'>
          {/* Заголовок и карточки */}
          <h3 className='2xl:text-4xl md:text-2xl text-3xl font-bold text-center text-celestial-100'>Наши услуги</h3>
          <div className='flex flex-col gap-x-5 md:gap-y-5 gap-y-3'>
            {/* карточки 1 */}
            <div className='flex lg:flex-row flex-col overflow-hidden w-full bg-celestial-500 rounded-3xl'>
              <div className='flex items-center justify-center overflow-hidden align-middle'>
                <img src='./media/pair.png' alt='совместимость' className='md:max-w-none' />
              </div>
              <div className='m-8 flex flex-col lg:gap-0 gap-9 justify-between w-5/6'>
                <div className='text-celestial-100 md:space-y-5 space-y-3'>
                  <p className='2xl:text-2xl md:text-lg text-xl font-semibold lg:text-start text-center'>Консультация по совместимости</p>
                  <p className='2xl:text-lg md:text-sm text-xs text-justify'>Хотите узнать, насколько вы и ваш партнер подходите друг другу? Наша консультация по совместимости предлагает вам уникальную возможность погрузиться в глубины ваших отношений и понять, как ваши карты взаимодействуют друг с другом.</p>
                  <p className='2xl:text-base md:text-xs text-xs italic text-justify'>Данная услуга будет оказана 2 раз с частотой обговоренной в личной бесседе</p>
                </div>
                <div className='flex gap-x-4 lg:self-end self-center'>
                  <button
                    type='button'
                    className='bg-celestial-100 md:py-3 py-2 md:px-10 px-5 rounded-3xl text-celestial-900 2xl:text-xl md:text-lg text-base font-semibold'
                    onClick={() => handleAddToCart({
                      id: 1,
                      name: 'Консультация по совместимости',
                      price: 2500,
                      image: './media/pair.png',
                      description: 'Хотите узнать, насколько вы и ваш партнер подходите друг другу? Наша консультация по совместимости предлагает вам уникальную возможность погрузиться в глубины ваших отношений и понять, как ваши карты взаимодействуют друг с другом.'
                    })}
                  >
                    Добавить в корзину
                  </button>
                </div>
              </div>
            </div>

            {/* карточки 2 */}
            <div className='flex lg:flex-row flex-col overflow-hidden w-full bg-celestial-500 rounded-3xl'>
              <div className='flex items-center justify-center overflow-hidden align-middle'>
                <img src='./media/child.png' alt='детский_разбор' className='md:max-w-none' />
              </div>
              <div className='m-8 flex flex-col lg:gap-0 gap-9 justify-between w-5/6'>
                <div className='text-celestial-100 md:space-y-5 space-y-3'>
                  <p className='2xl:text-2xl md:text-lg text-xl font-semibold lg:text-start text-center'>Консультация по детским картам</p>
                  <p className='2xl:text-lg md:text-sm text-xs text-justify'>Хотите узнать о внутреннем мире вашего ребенка и помочь ему раскрыть свой потенциал? Наша консультация по детским картам предлагает уникальный взгляд на мир вашего малыша через призму карт Таро, адаптированных специально для детей.</p>
                  <p className='2xl:text-base md:text-xs text-xs italic text-justify'>Данная услуга будет оказана 1 раз в обговоренный день в личной бесседе</p>
                </div>
                <div className='flex gap-x-4 lg:self-end self-center'>
                  <button
                    type='button'
                    className='bg-celestial-100 md:py-3 py-2 md:px-10 px-5 rounded-3xl text-celestial-900 2xl:text-xl md:text-lg text-base font-semibold'
                    onClick={() => handleAddToCart({
                      id: 2,
                      name: 'Консультация по детским картам',
                      price: 2000,
                      image: './media/child.png',
                      description: 'Хотите узнать о внутреннем мире вашего ребенка и помочь ему раскрыть свой потенциал? Наша консультация по детским картам предлагает уникальный взгляд на мир вашего малыша через призму карт Таро, адаптированных специально для детей.'
                    })}
                  >
                    Добавить в корзину
                  </button>
                </div>
              </div>
            </div>

            {/* карточки 3 */}
            <div className='flex lg:flex-row flex-col overflow-hidden w-full bg-celestial-500 rounded-3xl'>
              <div className='flex items-center justify-center overflow-hidden align-middle'>
                <img src='./media/group.png' alt='групповой_разбор' className='md:max-w-none' />
              </div>
              <div className='m-8 flex flex-col lg:gap-0 gap-9 justify-between w-5/6'>
                <div className='text-celestial-100 md:space-y-5 space-y-3'>
                  <p className='2xl:text-2xl md:text-lg text-xl font-semibold lg:text-start text-center'>Разбор наставничества (групповое)</p>
                  <p className='2xl:text-lg md:text-sm text-xs text-justify'>Разбор наставничества - это процесс анализа и обсуждения деятельности наставника и его подопечного с целью оценки прогресса, выявления достижений и проблемных моментов, а также определения дальнейших шагов для развития. Этот процесс может проводиться как в рамках индивидуальных консультаций, так и в групповом формате.</p>
                  <p className='2xl:text-base md:text-xs text-xs italic text-justify'>Данная услуга будет оказана 3 раз в неделю в течении месяца</p>
                </div>
                <div className='flex gap-x-4 lg:self-end self-center'>
                  <button
                    type='button'
                    className='bg-celestial-100 md:py-3 py-2 md:px-10 px-5 rounded-3xl text-celestial-900 2xl:text-xl md:text-lg text-base font-semibold'
                    onClick={() => handleAddToCart({
                      id: 3,
                      name: 'Разбор наставничества (групповое)',
                      price: 3000,
                      image: './media/group.png',
                      description: 'Разбор наставничества - это процесс анализа и обсуждения деятельности наставника и его подопечного с целью оценки прогресса, выявления достижений и проблемных моментов, а также определения дальнейших шагов для развития. Этот процесс может проводиться как в рамках индивидуальных консультаций, так и в групповом формате.'
                    })}
                  >
                    Добавить в корзину
                  </button>
                </div>
              </div>
            </div>

            {/* карточки 4 */}
            <div className='flex lg:flex-row flex-col overflow-hidden w-full bg-celestial-500 rounded-3xl'>
              <div className='flex items-center justify-center overflow-hidden align-middle'>
                <img src='./media/privat.png' alt='личный_разбор' className='md:max-w-none' />
              </div>
              <div className='m-8 flex flex-col lg:gap-0 gap-9 justify-between w-5/6'>
                <div className='text-celestial-100 md:space-y-5 space-y-3'>
                  <p className='2xl:text-2xl md:text-lg text-xl font-semibold lg:text-start text-center'>Разбор наставничества (личное)</p>
                  <p className='2xl:text-lg md:text-sm text-xs text-justify'>Разбор наставничества - это процесс анализа и обсуждения деятельности наставника и его подопечного с целью оценки прогресса, выявления достижений и проблемных, а также определения дальнейших шагов развития. Этот процесс может как в рамках индивидуальных так и в групповом формате.</p>
                  <p className='2xl:text-base md:text-xs text-xs italic text-justify'>Данная услуга будет оказана 3 раз в неделю с частотой обговоренной в личной бесседе</p>
                </div>
                <div className='flex gap-x-4 lg:self-end self-center'>
                  <button
                    type='button'
                    className='bg-celestial-100 md:py-3 py-2 md:px-10 px-5 rounded-3xl text-celestial-900 2xl:text-xl md:text-lg text-base font-semibold'
                    onClick={() => handleAddToCart({
                      id: 4,
                      name: 'Разбор наставничества (личное)',
                      price: 3500,
                      image: './media/privat.png',
                      description: 'Разбор наставничества - это процесс анализа и обсуждения деятельности наставника и его подопечного с целью оценки прогресса, выявления достижений и проблемных, а также определения дальнейших шагов развития. Этот процесс может как в рамках индивидуальных так и в групповом формате.'
                    })}
                  >
                    Добавить в корзину
                  </button>
                </div>
              </div>
            </div>

            {/* карточки 5 */}
            <div className='flex lg:flex-row flex-col overflow-hidden w-full bg-celestial-500 rounded-3xl'>
              <div className='flex items-center justify-center overflow-hidden align-middle'>
                <img src='./media/online.png' alt='онлайн_игра' className='md:max-w-none' />
              </div>
              <div className='m-8 flex flex-col lg:gap-0 gap-9 justify-between w-5/6'>
                <div className='text-celestial-100 md:space-y-5 space-y-3'>
                  <p className='2xl:text-2xl md:text-lg text-xl font-semibold lg:text-start text-center'>Трансформационная игра для онлайн группы</p>
                  <p className='2xl:text-lg md:text-sm text-xs text-justify'>Добро пожаловать в увлекательное и вдохновляющее путешествие к самопознанию! Это интерактивная трансформационная игра, специально разработанная для групповой работы на онлайн платформе. В течение игры вы совершите захватывающее путешествие по различным областям вашего внутреннего мира, раскрывая свои скрытые потребности, желания и возможности. Вы столкнетесь с интересными заданиями, упражнениями и рефлексиями, которые помогут вам лучше понять себя и свои цели в жизни.</p>
                  <p className='2xl:text-base md:text-xs text-xs italic text-justify'>Данная услуга будет оказана 2 раз в неделю в оговоренные дни</p>
                </div>
                <div className='flex gap-x-4 lg:self-end self-center'>
                  <button
                    type='button'
                    className='bg-celestial-100 md:py-3 py-2 md:px-10 px-5 rounded-3xl text-celestial-900 2xl:text-xl md:text-lg text-base font-semibold'
                    onClick={() => handleAddToCart({
                      id: 5,
                      name: 'Трансформационная игра для онлайн группы',
                      price: 2500,
                      image: './media/online.png',
                      description: 'Добро пожаловать в увлекательное и вдохновляющее путешествие к самопознанию! Это интерактивная трансформационная игра, специально разработанная для групповой работы на онлайн платформе. В течение игры вы совершите захватывающее путешествие по различным областям вашего внутреннего мира, раскрывая свои скрытые потребности, желания и возможности. Вы столкнетесь с интересными заданиями, упражнениями и рефлексиями, которые помогут вам лучше понять себя и свои цели в жизни.'
                    })}
                  >
                    Добавить в корзину
                  </button>
                </div>
              </div>
            </div>

            {/* карточки 6 */}
            <div className='flex lg:flex-row flex-col overflow-hidden w-full bg-celestial-500 rounded-3xl'>
              <div className='flex items-center justify-center overflow-hidden align-middle'>
                <img src='./media/offline.png' alt='оффлайн_игра' className='md:max-w-none' />
              </div>
              <div className='m-8 flex flex-col lg:gap-0 gap-9 justify-between w-5/6'>
                <div className='text-celestial-100 md:space-y-5 space-y-3'>
                  <p className='2xl:text-2xl md:text-lg text-xl font-semibold lg:text-start text-center'>Трансформационная игра для офлайн группы в Приморском крае</p>
                  <p className='2xl:text-lg md:text-sm text-xs text-justify'>Добро пожаловать в захватывающее приключение самопознания! Это интерактивная трансформационная игра, разработанная для групповой работы в офлайн формате. В течение игры вы отправитесь в путешествие по вашему внутреннему миру, исследуя свои мысли, чувства и убеждения. Вы столкнетесь с увлекательными заданиями, упражнениями и обсуждениями, которые помогут вам раскрыть свой потенциал и достичь новых высот в личном росте.</p>
                  <p className='2xl:text-base md:text-xs text-xs italic text-justify'>Данная услуга будет оказана 2 раз в неделю в оговоренные дни</p>
                </div>
                <div className='flex gap-x-4 lg:self-end self-center'>
                  <button
                    type='button'
                    className='bg-celestial-100 md:py-3 py-2 md:px-10 px-5 rounded-3xl text-celestial-900 2xl:text-xl md:text-lg text-base font-semibold'
                    onClick={() => handleAddToCart({
                      id: 6,
                      name: 'Трансформационная игра для офлайн группы в Приморском крае',
                      price: 5000,
                      image: './media/offline.png',
                      description: 'Добро пожаловать в захватывающее приключение самопознания! Это интерактивная трансформационная игра, разработанная для групповой работы в офлайн формате. В течение игры вы отправитесь в путешествие по вашему внутреннему миру, исследуя свои мысли, чувства и убеждения. Вы столкнетесь с увлекательными заданиями, упражнениями и обсуждениями, которые помогут вам раскрыть свой потенциал и достичь новых высот в личном росте.'
                    })}
                  >
                    Добавить в корзину
                  </button>
                </div>
              </div>
            </div>

            
            {/* карточки 7 */}
            <div className='flex lg:flex-row flex-col overflow-hidden w-full bg-celestial-500 rounded-3xl'>
              <div className='flex items-center justify-center overflow-hidden align-middle'>
                <img src='./media/master.png' alt='ведущий' className='md:max-w-none' />
              </div>
              <div className='m-8 flex flex-col lg:gap-0 gap-9 justify-between w-5/6'>
                <div className='text-celestial-100 md:space-y-5 space-y-3'>
                  <p className='2xl:text-2xl md:text-lg text-xl font-semibold lg:text-start text-center'>Трансформационная игра (стать ведущим)</p>
                  <p className='2xl:text-lg md:text-sm text-xs text-justify'>Мы ищем вдохновенного и энергичного человека, который готов вести наши участников в захватывающее путешествие самопознания. Если вы готовы поделиться своей страстью к личностному росту и помочь другим открыть для себя новые горизонты, то этот вызов для вас!</p>
                  <p className='2xl:text-base md:text-xs text-xs italic text-justify'>Данная услуга будет оказываться в оговоренные дни</p>
                </div>
                <div className='flex lg:self-end self-center'>
                  <button
                    type='button'
                    className='bg-celestial-100 md:py-3 py-2 md:px-10 px-5 rounded-3xl text-celestial-900 2xl:text-xl md:text-lg text-base font-semibold'
                    onClick={() => handleAddToCart({
                      id: 5,
                      name: 'Трансформационная игра (стать ведущим)',
                      price: 7500,
                      image: './media/master.png',
                      description: 'Мы ищем вдохновенного и энергичного человека, который готов вести наши участников в захватывающее путешествие самопознания. Если вы готовы поделиться своей страстью к личностному росту и помочь другим открыть для себя новые горизонты, то этот вызов для вас!'
                    })}
                  >
                    Добавить в корзину
                  </button>
                </div>
              </div>
            </div>
            
            {/* карточки 8 */}
            <div className='flex lg:flex-row flex-col overflow-hidden w-full bg-celestial-500 rounded-3xl'>
              <div className='flex items-center justify-center overflow-hidden align-middle'>
                <img src='./media/business.png' alt='разбор_бизнесса' className='md:max-w-none' />
              </div>
              <div className='m-8 flex flex-col lg:gap-0 gap-9 justify-between w-5/6'>
                <div className='text-celestial-100 md:space-y-5 space-y-3'>
                  <p className='2xl:text-2xl md:text-lg text-xl font-semibold lg:text-start text-center'>Консультация для бизнеса</p>
                  <p className='2xl:text-lg md:text-sm text-xs text-justify'>Готовы раскрыть тайны вашего бизнеса с помощью астрономии и нумерологии? Наша консультация предлагает уникальный подход к анализу вашего бизнеса, используя знания космоса и чисел для обеспечения успеха и процветания.</p>
                  <p className='2xl:text-base md:text-xs text-xs italic text-justify'>Данная услуга будет оказана 4 раз с частотой обговоренной в личной бесседе</p>
                </div>
                <div className='flex gap-x-4 lg:self-end self-center'>
                  <button
                    type='button'
                    className='bg-celestial-100 md:py-3 py-2 md:px-10 px-5 rounded-3xl text-celestial-900 2xl:text-xl md:text-lg text-base font-semibold'
                    onClick={() => handleAddToCart({
                      id: 5,
                      name: 'Трансформационная игра для онлайн группы',
                      price: 2500,
                      image: './media/business.png',
                      description: 'Готовы раскрыть тайны вашего бизнеса с помощью астрономии и нумерологии? Наша консультация предлагает уникальный подход к анализу вашего бизнеса, используя знания космоса и чисел для обеспечения успеха и процветания.'
                    })}
                  >
                    Добавить в корзину
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ServicePage;