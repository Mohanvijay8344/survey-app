const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  questionText: { type: String, required: true },
  answer: { type: Boolean, default: null },  // Yes/No answer
});

const SurveySchema = new mongoose.Schema({
  title: { type: String, required: true },
  questions: [QuestionSchema],  // Array of questions
  createdBy: { type: String, required: true },  // Creator's username
});

const Survey = mongoose.model('Survey', SurveySchema);

module.exports = Survey;
