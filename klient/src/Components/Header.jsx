import React, { useState, useRef, useEffect } from 'react';
import { Menu, UserCircle } from "lucide-react";
import { useNavigate, Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScienceDropdownOpen, setIsScienceDropdownOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const scienceRef = useRef(null);

  // Проверка на авторизацию
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  // Защищенный переход
  const handleProtectedNavigation = (path) => {
    if (!isAuthenticated) {
      alert('Для доступа к этому разделу необходимо авторизоваться');
      navigate('/registre');
      return;
    }
    navigate(path);
  };

  // Выход из аккаунта
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate('/login');
  };

  // Закрытие меню при клике вне него
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  // Закрытие выпадающего меню при клике вне него
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (scienceRef.current && !scienceRef.current.contains(event.target)) {
        setIsScienceDropdownOpen(false);
      }
    };

    if (isScienceDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isScienceDropdownOpen]);

  return (
    // Шапка сайта
    <header className='bg-celestial-700'>
      <div className="flex md:px-9 px-3 py-5 justify-between max-w-[1920px] mx-auto">
        {/* Логотип */}
        <div className='flex lg:text-4xl md:text-2xl text-3xl font-bold text-celestial-100 gap-x-5 items-center'>
          <button
            type='button'
            className='flex lg:text-4xl md:text-2xl text-2xl font-bold text-celestial-100 gap-x-3 items-center'
            onClick={() => navigate('/')}
          >
            <img src='/media/logo.png' alt='лого' className='lg:w-auto w-10 h-auto rounded-full' />
            <h1>Астро-цикл</h1>
          </button>
        </div>

        {/* Меню */}
        <div className='flex gap-4 items-center'>
          <nav className="hidden md:flex gap-3 text-celestial-100 text-base font-normal relative">
            <div className="relative" ref={scienceRef}>
              {/* Наука */}
              <button
                type='button'
                className="hover:text-celestial-300 transition flex items-center gap-1"
                onClick={() => setIsScienceDropdownOpen(prev => !prev)}
                aria-haspopup="true"
                aria-expanded={isScienceDropdownOpen}
              >
                Наука
                <svg
                  className={`w-4 h-4 transition-transform ${isScienceDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              {/* Выпадающее меню */}
              {isScienceDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-40 bg-celestial-450 rounded-md shadow-lg z-20">
                  <button
                    type='button'
                    className="block w-full text-left px-4 py-2 hover:bg-celestial-500 rounded-md transition"
                    onClick={() => {
                      navigate('/astrology');
                      setIsScienceDropdownOpen(false);
                    }}
                  >
                    Астрология
                  </button>
                  <button
                    type='button'
                    className="block w-full text-left px-4 py-2 hover:bg-celestial-500 rounded-md transition"
                    onClick={() => {
                      navigate('/numerology');
                      setIsScienceDropdownOpen(false);
                    }}
                  >
                    Нумерология
                  </button>
                </div>
              )}
            </div>

            {/* Услуги и товары */}
            <button type='button' className="hover:text-celestial-300 transition" onClick={() => handleProtectedNavigation('/service')}>Услуги</button>
            <button type='button' className="hover:text-celestial-300 transition" onClick={() => handleProtectedNavigation('/products')}>Товары</button>
          </nav>

          <div className="flex space-x-4">
          {/* Кнопка меню */}
            <button
              className="md:hidden focus:outline-none"
              onClick={() => setIsOpen(true)}
              aria-label="Открыть меню"
            >
              <Menu className="w-7 h-7 text-celestial-100" />
            </button>

            {/* Аккаунт */}
            {isAuthenticated ? (
              <>
                <Link to="/account" className="account-link">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="#ECD5DD"/>
                  </svg>
                </Link>
                {/* Выход и выход из аккаунта */}
                <button
                  onClick={handleLogout}
                  className="text-celestial-100 hover:text-celestial-300 transition"
                >
                  Выйти
                </button>
              </>
            ) : (
              <>
                <Link to="/registre" className="text-celestial-100 hover:text-celestial-300 transition">
                  Войти
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Мобильное меню */}
      {isOpen && (
        <div
          className="fixed inset-0  flex justify-center items-center z-50"
          onClick={handleOverlayClick}
        >
          <div className="bg-celestial-450 rounded-lg shadow-lg w-72 p-6 relative">
            <nav className="flex flex-col space-y-4 text-celestial-100 text-base font-medium">
              <button
                type='button'
                className="hover:text-red-300 transition text-left"
                onClick={() => {
                  navigate('/astrology');
                  setIsOpen(false);
                }}
              >
                Астрология
              </button>
              <button
                type='button'
                className="hover:text-red-300 transition text-left"
                onClick={() => {
                  navigate('/numerology');
                  setIsOpen(false);
                }}
              >
                Нумерология
              </button>
              <button
                type='button'
                className="hover:text-red-300 transition text-left"
                onClick={() => {
                  handleProtectedNavigation('/service');
                  setIsOpen(false);
                }}
              >
                Услуги
              </button>
              <button
                type='button'
                className="hover:text-red-300 transition text-left"
                onClick={() => {
                  handleProtectedNavigation('/products');
                  setIsOpen(false);
                }}
              >
                Товары
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
