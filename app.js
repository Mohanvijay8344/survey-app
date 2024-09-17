const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
const surveyRoutes = require('./routes/survey');
const { authenticateJWT } = require('./middlewares/authendicate');
const dotenv = require('dotenv')
const mongoose = require('mongoose');

dotenv.config();


app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log('MongoDB connection error: ', err));


app.use('/auth', authRoutes);
app.use('/survey', authenticateJWT, surveyRoutes);  

app.get("/", (req, res) => {
    res.send("Hello World....");
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});
