import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const RegPage = () => {
    const [forma, setForma] = useState({
        name: '',
        telephon: '',
        email: '',
        password: ''
    })
    
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    // Валидация формы
    const validateForm = () => {
        const newErrors = {}
        
        // Валидация имени
        if (!forma.name.trim()) {
            newErrors.name = 'Имя обязательно для заполнения'
        }
        
        // Валидация телефона
        const phoneRegex = /^\+?[1-9]\d{10,14}$/
        if (!phoneRegex.test(forma.telephon)) {
            newErrors.telephon = 'Введите корректный номер телефона'
        }
        
        // Валидация email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(forma.email)) {
            newErrors.email = 'Введите корректный email'
        }
        
        // Валидация пароля
        if (forma.password.length < 8) {
            newErrors.password = 'Пароль должен содержать минимум 8 символов'
        }
        
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    // Обработка изменения поля
    const handleInputChange = (e) => {
        const {name, value} = e.target
        setForma({...forma, [name]: value})
        // Очищаем ошибку при изменении поля
        if (errors[name]) {
            setErrors({...errors, [name]: ''})
        }
    }

    // Обработка отправки формы
    const handleInputSubmit = async (e) => {
        e.preventDefault()
        
        if (!validateForm()) {
            return
        }
        
        setIsLoading(true)
        setErrors({})
        
        try {
            const response = await fetch('http://localhost:8000/register/', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: forma.name,
                    telephon: forma.telephon,
                    email: forma.email,
                    password: forma.password
                }),
            })
            
            const data = await response.json()
            
            if (!response.ok) {
                // Обработка ошибок с бэкенда
                if (typeof data === 'object') {
                    // Если ошибка в конкретном поле
                    const fieldErrors = {}
                    Object.keys(data).forEach(key => {
                        if (Array.isArray(data[key])) {
                            fieldErrors[key] = data[key][0]
                        } else {
                            fieldErrors[key] = data[key]
                        }
                    })
                    setErrors(fieldErrors)
                } else if (data.error) {
                    // Если общая ошибка
                    setErrors({ general: data.error })
                } else {
                    setErrors({ general: 'Произошла ошибка при регистрации' })
                }
                console.error('Registration error:', data)
            } else {
                // Сохраняем данные пользователя
                localStorage.setItem('token', data.token)
                localStorage.setItem('user', JSON.stringify({
                    id: data.user_id,
                    email: data.email,
                    name: data.name,
                    telephon: data.telephon
                }))
                
                // Перенаправляем на главную страницу
                navigate('/')
            }
        } catch (error) {
            console.error('Network error:', error)
            setErrors({ general: 'Ошибка сети. Проверьте подключение к интернету.' })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        // Страница регистрации
        <div className='flex items-center justify-center md:pt-5'>
            <div className='w-full max-w-lg'>
                {/* Форма регистрации */}
                <form onSubmit={handleInputSubmit} className='flex flex-col gap-y-7 bg-celestial-500 p-7 md:rounded-3xl rounded-b-2xl items-center'>
                    <div>  
                        <h3 className='2xl:text-2xl md:text-2xl text-xl font-bold text-center text-celestial-100'>Регистрация</h3>
                    </div>
                    {errors.general && (
                        <div className="text-red-500 text-sm">{errors.general}</div>
                    )}
                    <div className='space-y-3 w-full text-lg'>
                        <div>
                            <input
                                type='text'
                                name='name'
                                placeholder='ФИО'
                                value={forma.name}
                                onChange={handleInputChange}
                                required
                                disabled={isLoading}
                                className='w-full rounded-xl py-1 px-3 bg-celestial-700 text-celestial-200 2xl:text-lg md:text-base text-lg italic focus:outline-none'
                            />
                            {errors.name && <div className="text-red-500 text-sm">{errors.name}</div>}
                        </div>
                        <div>
                            <input
                                type='tel'
                                name='telephon'
                                placeholder='телефон'
                                value={forma.telephon}
                                onChange={handleInputChange}
                                required
                                disabled={isLoading}
                                className='w-full rounded-xl py-1 px-3 bg-celestial-700 text-celestial-200 2xl:text-lg md:text-base text-lg italic focus:outline-none'
                            />
                            {errors.telephon && <div className="text-red-500 text-sm">{errors.telephon}</div>}
                        </div>
                        <div>
                            <input
                                type='email'
                                name='email'
                                placeholder='эл. почта'
                                value={forma.email}
                                onChange={handleInputChange}
                                required
                                disabled={isLoading}
                                className='w-full rounded-xl py-1 px-3 bg-celestial-700 text-celestial-200 2xl:text-lg md:text-base text-lg italic focus:outline-none'
                            />
                            {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}
                        </div>
                        <div>
                            <input
                                type='password'
                                name='password'
                                placeholder='пароль'
                                value={forma.password}
                                onChange={handleInputChange}
                                required
                                disabled={isLoading}
                                className='w-full rounded-xl py-1 px-3 bg-celestial-700 text-celestial-200 2xl:text-lg md:text-base text-lg italic focus:outline-none'
                            />
                            {errors.password && <div className="text-red-500 text-sm">{errors.password}</div>}
                        </div>
                    </div>
                    <button 
                        type='submit' 
                        disabled={isLoading}
                        className='bg-celestial-100 py-2 px-3 rounded-xl text-celestial-900 2xl:text-xl md:text-lg text-xl font-semibold disabled:opacity-50'
                        >
                        {isLoading ? 'Регистрация...' : 'Зарегистрироваться'}
                    </button>
                    <div>
                        <button 
                            type='button' 
                            className='text-celestial-200 2xl:text-base md:text-sm text-sm' 
                            onClick={() => navigate('/login')}
                            disabled={isLoading}
                        >
                            Уже есть аккаунт
                        </button>
                    </div> 
                </form>
            </div>
        </div>
    )
}

export default RegPage