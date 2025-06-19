import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const HomePage = () => {
  return (
    <div>
        <Header />
        {/* Главная страница */}
        <section className='my-10 max-w-[1920px] mx-auto'>
          {/* Приветствие */}
          <div className='flex lg:flex-row flex-col gap-y-5 bg-celestial-500'>
             <div className='lg:w-1/2'>
                <img src='./media/glav.png' alt='приветствие' loading='lazy' />
            </div>
            <div className='flex flex-col gap-y-7 justify-center lg:w-1/2 lg:pl-16 lg:pr-28 px-6 pb-7 2xl:text-xl md:text-base text-base text-celestial-100 text-justify'>
              <h2 className='lg:text-4xl md:text-2xl text-xl text-center font-bold md:text-left'>Добро пожаловать на сайт об астрологии и нумерологии!</h2>
              <p>Здесь вы узнаете, что такое астрология и нумерология, как они работают и какое влияние могут 
                оказать на нашу жизнь. Мы расскажем о значении звезд, чисел и символических атрибутов: талисманов, 
                камней, карт и других предметов, помогающих привнести гармонию и удачу.</p>
            </div>
          </div>
          {/* Основатель */}
          <div className='flex lg:flex-row flex-col-reverse gap-y-5 bg-celestial-500 mt-12 items-center'>
            <div className='flex flex-col gap-y-3 text-celestial-100 justify-center 2xl:text-lg md:text-sm text-base lg:w-3/5 lg:pr-16 lg:pl-28 px-6 pb-7 text-justify'>
              <h3 className='2xl:text-4xl md:text-2xl text-xl font-bold md:mb-2 text-center'>Знакомство</h3>
              <p>Приветствую вас! Меня зовут Юлия Гордиенко и уже много лет я занимаюсь изучением как психологии, так и 
                парапсихологии. Это помогло мне изменить мою жизнь в лучшую сторону и прийти к тому, о чем я только мечтала. 
                Если коротко, то я жена, любящая и любимая, у меня двое сыновей и маленькая дочка, я счастлива здесь и сейчас 
                в моменте, я знаю, как взаимодействовать с людьми, как получить то, что я хочу, как привести человека к желаемому результату.</p>
              <p>Мой конек — это трансформация. Я трансформировала себя и сейчас трансформирую других. Каждый кто прикоснется 
                к моему полю, моей энергии получает изменения в жизни в лучшую сторону</p>
            </div>
            <div className=''>
              <img src='./media/osnov.png' alt='фото директора' loading='lazy' />
            </div>
          </div>
          {/*О сайте */}
          <div className='flex bg-celestial-500 mt-12'>
            <div className='flex flex-col gap-y-5 text-celestial-100 justify-center 2xl:text-lg md:text-sm text-base 2xl:px-56 2xl:py-[69px] md:px-20 md:py-10 px-6 py-7 text-justify'>
              <h3 className='2xl:text-4xl md:text-2xl text-xl font-bold text-center'>Что вы получите на этом сайте?</h3>
              <p>На этом сайте я предлагаю пройти на один из предложенных продуктов - разбор, где мы разберем ту точку, в 
                которой ты находишься сейчас: что нравится, что не нравится. Проанализируем точку, в которую ты хочешь прийти, 
                для чего, как ты ее видишь. И проанализируем инструменты, которыми ты владеешь, чтоб прийти к своей желанной точке, 
                а также выясним, каких инструментов тебе не хватает. По итогу у тебя будет план действий, с помощью которого ты 
                перейдешь из нынешней точки в желаемую.</p>
            </div>
          </div>
          {/* Астрологи */}
          <div className='flex flex-col gap-y-8 md:px-14 mt-12'>
            <h3 className='2xl:text-4xl md:text-2xl text-3xl font-bold text-center text-celestial-100'>Наши астрологи</h3>
            <div className='flex lg:flex-row flex-col gap-x-5 gap-y-5 items-center'>
              {/* Карточка 1 */}
              <div className='md:w-[587px] rounded-3xl bg-celestial-500 overflow-hidden max-w-sm md:max-w-none'>
                <img src='./media/Владик.jpg' alt='Владислав' loading='lazy' />
                <p className='mb-16 mt-8 mx-9 text-celestial-100 2xl:text-lg md:text-sm text-base text-justify'>Добрый день! Меня зовут Владислав, и я нумеролог с многолетним опытом работы. Моя миссия - помочь вам раскрыть тайны 
                  вашей судьбы и понять свои жизненные задачи через изучение чисел и числовых сочетаний.  Я индивидуальные консультации, 
                  анализы числовых кодов вашей жизни и обучение, чтобы помочь вам преодолевать препятствия и достигать своих целей. Давайте 
                  вместе исследуем числа и создадим карту вашего жизненного пути!</p>
              </div>
              {/* Карточка 2 */}
              <div className='md:w-[587px] rounded-3xl bg-celestial-500 overflow-hidden max-w-sm md:max-w-none'>
                <img src='./media/Аня.jpg' alt='Анна' loading='lazy' />
                <p className='mb-16 mt-8 mx-9 text-celestial-100 2xl:text-lg md:text-sm text-base text-justify'>Приветствую вас! Меня зовут Ана, и я астролог с опытом работы, готова помочь вам понять себя и свои возможности через 
                  знания звезд и планет. Мои консультации и анализы астрологических карт индивидуальны и направлены на помощь вам в принятии 
                  важных решений, раскрытии потенциала и достижении гармонии. Давайте вместе исследуем вашу астрологическую карту и создадим 
                  стратегию для вашего личного и духовного роста!</p>
              </div>
              {/* Карточка 3 */}
              <div className='md:w-[587px] rounded-3xl bg-celestial-500 overflow-hidden max-w-sm md:max-w-none'>
                <img src='./media/Катя.jpg' alt='Екатерина' loading='lazy' />
                <p className='mb-16 mt-8 mx-9 text-celestial-100 2xl:text-lg md:text-sm text-base text-justify'>Добро пожаловать! Меня зовут Екатерина, и я астролог с многолетним опытом. Моя страсть - помогать людям раскрыть потенциал 
                  своей личности и найти гармонию в жизни через астрологические знания. Я предлагаю персонализированные консультации, 
                  астрологические анализы и обучение, помогающие вам лучше понять себя и свой жизненный путь. Давайте вместе исследуем звезды и 
                  создадим вашу уникальную карту успеха!</p>
              </div>
            </div>
            
          </div>
        </section>
        <Footer />
    </div>
  )
}

export default HomePage