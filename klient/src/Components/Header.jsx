import React, { useState, useRef, useEffect } from 'react';
import { Menu, UserCircle } from "lucide-react";
import { useNavigate, Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScienceDropdownOpen, setIsScienceDropdownOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const scienceRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  const handleProtectedNavigation = (path) => {
    if (!isAuthenticated) {
      alert('Для доступа к этому разделу необходимо авторизоваться');
      navigate('/registre');
      return;
    }
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate('/login');
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

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
    <header className='bg-celestial-700'>
      <div className="flex md:px-9 px-3 py-5 justify-between max-w-[1920px] mx-auto">
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

        <div className='flex gap-4 items-center'>
          <nav className="hidden md:flex gap-3 text-celestial-100 text-base font-normal relative">
            <div className="relative" ref={scienceRef}>
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

            <button type='button' className="hover:text-celestial-300 transition" onClick={() => handleProtectedNavigation('/service')}>Услуги</button>
            <button type='button' className="hover:text-celestial-300 transition" onClick={() => handleProtectedNavigation('/products')}>Товары</button>
          </nav>

          <div className="flex space-x-4">
            <button
              className="md:hidden focus:outline-none"
              onClick={() => setIsOpen(true)}
              aria-label="Открыть меню"
            >
              <Menu className="w-7 h-7 text-celestial-100" />
            </button>

            {isAuthenticated ? (
              <>
                <Link to="/account" className="hover:text-celestial-300 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </Link>
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
