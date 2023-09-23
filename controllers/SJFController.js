const SJF = require('../models/SJFModel'); // Import your SJF model



//@desc GET /
// Controller function to handle the GET request
const getSJFQuestionById = async (req, res) => {
  try {
    const questionId = req.params.id; // Get the 'id' parameter from the request URL

    // Use the findOne method to find a document with 'question_no' equal to 'id'
    const question = await SJF.findOne({ question_no: questionId });

    if (!question) {
      // If no matching document is found, return a 404 Not Found response
      return res.status(404).json({ message: 'Question not found' });
    }

    // If a matching document is found, return it in the response
    res.status(200).json(question);
  } catch (error) {
    // Handle any errors that occur during the process
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


const deleteSJFQuestionById = async (req, res) => {
  try {
    const questionId = req.params.id; // Get the 'id' parameter from the request URL

    // Use the findOne method to find a document with 'question_no' equal to 'id'
    const question = await SJF.findOneAndDelete({ question_no: questionId });

    if (!question) {
      // If no matching document is found, return a 404 Not Found response
      return res.status(404).json({ message: 'Question not found' });
    }

    // If a matching document is found, return it in the response
    res.status(200).json(question);
  } catch (error) {
    // Handle any errors that occur during the process
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};





const createSJFQuestion = async (req, res) => {
    try {
      const { question_no, SJFProcesses } = req.body; // Get data from the request body
  
      // Use the .create method to create and save the SJF question
      const createdQuestion = await SJF.create({
        question_no,
        SJFProcesses,
      });
  
      // Return the created question as a JSON response with a status code of 201 (Created)
      res.status(201).json(createdQuestion);
    } catch (error) {
      // Handle any errors that occur during the process
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

module.exports = { getSJFQuestionById ,createSJFQuestion,deleteSJFQuestionById};
