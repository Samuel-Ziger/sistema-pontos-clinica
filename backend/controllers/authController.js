const db = require('../config/database');

const login = (req, res) => {
  const { cpf } = req.body;
  db.query('SELECT * FROM users WHERE cpf = ?', [cpf], (err, results) => {
    if (err || results.length === 0) return res.status(401).send('CPF inválido');
    res.send({ message: 'Login bem-sucedido', user: results[0] });
  });
};

const register = (req, res) => {
  const { cpf, name, role } = req.body;
  db.query('INSERT INTO users (cpf, name, role) VALUES (?, ?, ?)', [cpf, name, role], (err, result) => {
    if (err) return res.status(500).send('Erro ao cadastrar usuário');
    res.send({ message: 'Usuário cadastrado com sucesso' });
  });
};

module.exports = { login, register };