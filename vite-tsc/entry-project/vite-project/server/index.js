// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const users = [
  {
    username: 'admin',
    password: 'admin123' 
  }
];

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username);
  
  if (!user) {
    return res.status(404).json({ success: false, message: 'Пользователь не найден' });
  }

  if (user.password !== password) {
    return res.status(401).json({ success: false, message: 'Неверный пароль' });
  }

  res.json({
    success: true,
    message: 'Вход выполнен успешно',
    user: {
      username: user.username
    }
  });
});

app.post('/api/register', (req, res) => {
  const { username, password } = req.body;

  if (users.some(u => u.username === username)) {
    return res.status(400).json({ success: false, message: 'Имя пользователя уже занято' });
  }

  const newUser = {
    username,
    password 
  };

  users.push(newUser);

  res.json({
    success: true,
    message: 'Пользователь зарегистрирован',
    user: {
      username: newUser.username
    }
  });
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});