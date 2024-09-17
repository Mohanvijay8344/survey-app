const axios = require('axios');
const sharp = require('sharp');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

exports.generateThumbnail = async (req, res) => {
  const { imageUrl } = req.body;
  
  const response = await axios({ url: imageUrl, responseType: 'arraybuffer' });
  const imageBuffer = Buffer.from(response.data, 'binary');

  const thumbnail = await sharp(imageBuffer).resize(50, 50).toBuffer();
  
  res.set('Content-Type', 'image/png');
  res.send(thumbnail);
};
