import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate()
  return (
    <footer className="bg-celestial-700">
      <div className="md:px-10 px-4 py-6 flex justify-between max-w-[1920px] mx-auto">
        {/* Название компании */}
        <button type='button' className='md:text-3xl text-xl h-1/2 font-semibold text-celestial-100' onClick={() => navigate('/')}>
          <h2 className="">Астро-цикл</h2>
        </button>

        <div className='flex lg:flex-row flex-col gap-y-8 gap-x-7 lg:w-2/5 md:w-3/5 w-3/5'>
            {/* Контактная информация */}
            <ul className='space-y-2 md:text-sm text-xs text-celestial-200 w-auto lg:w-4/6 2xl:w-3/5'>
                <li className='md:text-lg text-base text-celestial-100'>8 (902) 505-43-01</li>
                <li>Gordienko@email.com</li>
                <li>690091 Россия г.Владивосток
Приморский край, ул.Светланская, д.13, 3 этаж</li>
            </ul>

            {/* Социальные сети */}
            <div className='md:w-auto md:h-auto'>
              <div className="flex space-x-4 items-center justify-end">
                  <a
                  href="https://t.me/astronumcircle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 transition w-auto h-auto"
                  aria-label="Telegram"
                  >
                  <img src='/media/telegram.png' alt='telegram' />
                  </a>
                  <a
                  href="https://vk.com/astronumcirclevk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition w-auto h-auto"
                  aria-label="VK"
                  >
                  <img src='/media/vk.png' alt='vk' />
                  </a>
                  <a
                  href="https://www.instagram.com/specialist_po_sudbe/?utm_medium=copy_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 transition w-auto h-auto"
                  aria-label="Instagram"
                  >
                  <img src='/media/insta.png' alt='instagram' />
                  </a>
              </div>
            </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer