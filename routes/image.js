const express = require('express');
const { generateThumbnail } = require('../controllers/imageController');

const router = express.Router();

router.post('/thumbnail', generateThumbnail);

module.exports = router;
