const db = require('../config/database');

const recordPoint = (req, res) => {
  const { userId } = req.body;
  const now = new Date();

  db.query('INSERT INTO points (userId, checkIn) VALUES (?, ?)', [userId, now], (err) => {
    if (err) return res.status(500).send('Erro ao registrar ponto');
    res.send({ message: 'Ponto registrado com sucesso' });
  });
};

const getPoints = (req, res) => {
  db.query('SELECT * FROM points', (err, results) => {
    if (err) return res.status(500).send('Erro ao buscar pontos');
    res.send(results);
  });
};

module.exports = { recordPoint, getPoints };