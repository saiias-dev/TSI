import React, { useState } from 'react';

interface LoginResponse {
  success: boolean;
  message: string;
  user?: {
    id: number;
    username: string;
  };
}

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data: LoginResponse = await response.json();

      if (data.success && data.user) {
        setMessage(`Добро пожаловать, ${data.user.username}!`);
        setIsLoggedIn(true);
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage('Ошибка соединения с сервером');
    }
  };

  if (isLoggedIn) {
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-green-100 rounded-lg">
        <h2 className="text-xl font-bold mb-4">{message}</h2>
        <button 
          onClick={() => setIsLoggedIn(false)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Выйти
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Вход в систему</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Логин:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Пароль:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-green-500 text-white rounded"
        >
          Войти
        </button>
      </form>
      {message && <p className="mt-4 text-red-500">{message}</p>}
    </div>
  );
};

export default LoginForm;