const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

function authenticateJWT(req, res, next) {
  const token = req.header('Authorization');

  if (!token) return res.status(403).send('Access denied.');

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send('Invalid token.');
  }
}

module.exports = { authenticateJWT };
