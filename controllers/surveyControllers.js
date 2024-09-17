const Survey = require('../models/survey');


exports.createSurvey = async (req, res) => {
  try {
    const { title, questions } = req.body;

    const newSurvey = new Survey({
      title,
      questions,
      createdBy: req.user.username,
    });

    await newSurvey.save();

    res.status(201).json(newSurvey);
  } catch (error) {
    res.status(500).json({ message: 'Error creating survey', error });
  }
};

exports.takeSurvey = async (req, res) => {
  try {
    const { surveyId, answers } = req.body;

    const survey = await Survey.findById(surveyId);
    if (!survey) return res.status(404).json({ message: 'Survey not found' });

    survey.questions.forEach((question, index) => {
      question.answer = answers[index];
    });

    await survey.save();

    res.json(survey);
  } catch (error) {
    res.status(500).json({ message: 'Error updating survey', error });
  }
};

exports.getSurveyResults = async (req, res) => {
  try {
    const { surveyId } = req.params;

    const survey = await Survey.findById(surveyId);
    if (!survey) return res.status(404).json({ message: 'Survey not found' });

    res.json(survey);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching survey results', error });
  }
};
