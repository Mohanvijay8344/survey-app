const express = require('express');
const { createSurvey, takeSurvey, getSurveyResults } = require('../controllers/surveyControllers');


const router = express.Router();

router.post('/create', createSurvey);
router.post('/take', takeSurvey);
router.get('/results/:surveyId', getSurveyResults);

module.exports = router
