import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState({})
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError({})

        try {
            const response = await fetch('http://localhost:8000/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            })

            const data = await response.json()

            if (!response.ok) {
                if (data.non_field_errors) {
                    setError({ general: data.non_field_errors[0] })
                } else if (data.error) {
                    setError({ general: data.error })
                } else {
                    setError(data)
                }
                return
            }

            // Сохраняем токен и данные пользователя
            localStorage.setItem('token', data.token)
            localStorage.setItem('user', JSON.stringify({
                id: data.user_id,
                email: data.email,
                name: data.name,
                telephon: data.telephon
            }))

            // Перенаправляем на главную страницу
            navigate('/')
        } catch (err) {
            console.error('Ошибка при входе:', err)
            setError({ general: 'Произошла ошибка при попытке входа. Пожалуйста, попробуйте снова.' })
        }
    }

    return (
        <div className='flex items-center justify-center md:pt-5'>
            <div className='w-full max-w-lg'>
                <form onSubmit={handleSubmit} className='flex flex-col gap-y-7 bg-celestial-500 p-7 md:rounded-3xl rounded-b-2xl items-center'>
                    <div>  
                        <h3 className='2xl:text-2xl md:text-2xl text-xl font-bold text-center text-celestial-100'>Вход в систему</h3>
                    </div>
                {error.general && (
                    <div className="error-message">{error.general}</div>
                )}

                <div className='space-y-3 w-full text-lg'>
                    <div>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                                setError({ ...error, email: null })
                            }}
                            required
                            className='w-full rounded-xl py-1 px-3 bg-celestial-700 text-celestial-200 2xl:text-lg md:text-base text-lg italic focus:outline-none'
                        />
                        {error.email && <div className="error-message">{error.email}</div>}
                    </div>

                    <div>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                                setError({ ...error, password: null })
                            }}
                            required
                            className='w-full rounded-xl py-1 px-3 bg-celestial-700 text-celestial-200 2xl:text-lg md:text-base text-lg italic focus:outline-none'
                        />
                        {error.password && <div className="error-message">{error.password}</div>}
                    </div>
                </div>

                <button 
                    type='submit' 
                    className='bg-celestial-100 py-2 px-3 rounded-xl text-celestial-900 2xl:text-xl md:text-lg text-xl font-semibold disabled:opacity-50'
                >
                        Войти
                </button>
                <div>
                        <button 
                            type='button' 
                            className='text-celestial-200 2xl:text-base md:text-sm text-sm' 
                            onClick={() => navigate('/registre')}
                        >
                            Зарегистрироваться
                        </button>
                </div> 
                
            </form>
            </div>
        </div>
    )
}

export default LoginPage