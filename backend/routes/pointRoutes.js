const express = require('express');
const { recordPoint, getPoints } = require('../controllers/pointsController');

const router = express.Router();

router.post('/record', recordPoint);
router.get('/', getPoints);

module.exports = router;    