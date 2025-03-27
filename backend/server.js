require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const pointRoutes = require('./routes/pointRoutes');
const userRoutes = require('./routes/userRoutes');
require('./config/database');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/points', pointRoutes);
app.use('/api/users', userRoutes);

app.use((req, res) => res.status(404).send('Página não encontrada'));

app.listen(port, () => console.log(`🚀 Servidor rodando na porta ${port}`));