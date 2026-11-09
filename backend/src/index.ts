import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Разрешаем фронтенду (порт 5173) слать нам запросы
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

// Фейковый роут для вашей готовой формы авторизации
app.post('/api/auth/login', (req, res) => {
  const { login, password } = req.body;

  console.log(`Попытка входа: ${login}`);

  // Имитируем роли на основе того, что ввел пользователь
  if (login === 'admin' && password === '123') {
    return res.json({ success: true, role: 'admin', token: 'fake-jwt-token-admin', name: 'Марина Арсеньевна' });
  } 
  
  if (login === 'spiderman' && password === '123') {
    return res.json({ success: true, role: 'student', token: 'fake-jwt-token-student', name: 'Питер Паркер' });
  }

  return res.status(401).json({ success: false, message: 'Неверный логин или пароль' });
});

app.listen(PORT, () => {
  console.log(`🚀 Бэкенд АИС ДШИ запущен на http://localhost:${PORT}`);
});
