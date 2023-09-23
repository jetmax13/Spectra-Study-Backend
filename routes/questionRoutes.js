const express = require('express');
const router = express.Router();
const { getFCFSQuestionById, createFCFSQuestion, deleteFCFSQuestionById } = require('../controllers/FCFSController');
const validateToken = require('../middleware/validateTokenHandler');
const { createSRTFQuestion, getSRTFQuestionById } = require('../controllers/SRTFController');

const { createSJFQuestion, getSJFQuestionById } = require('../controllers/SJFController');

const { createPRQuestion, getPRQuestionById } = require('../controllers/PRController');

const { createPrePRQuestion, getPrePRQuestionById } = require('../controllers/PrePRController');


const { createPageReplacementQuestion, getPageReplacementQuestionById } = require('../controllers/PageReplacementController');

const { createDiskManagementQuestion, getDiskManagementQuestionById } = require('../controllers/DiskManagementController');


// Define the GET route for fetching a question by ID
router.get('/FCFS/:id',validateToken, getFCFSQuestionById);
//POST request to create FCFS Question
router.post('/FCFS',validateToken,createFCFSQuestion);
//DELETE route for deleting question by question_no
router.delete('/FCFS/:id',validateToken,deleteFCFSQuestionById);


// Define the GET route for fetching a question by ID
router.get('/SRTF/:id',validateToken, getSRTFQuestionById);
//POST request to create FCFS Question
router.post('/SRTF',validateToken,createSRTFQuestion);

router.get('/SJF/:id',validateToken, getSJFQuestionById);
//POST request to create FCFS Question
router.post('/SJF',validateToken,createSJFQuestion);


router.get('/PR/:id',validateToken, getPRQuestionById);
//POST request to create FCFS Question
router.post('/PR',validateToken,createPRQuestion);


router.get('/PrePR/:id',validateToken, getPrePRQuestionById);
//POST request to create FCFS Question
router.post('/SJF',validateToken,createPrePRQuestion);



router.get('/DiskManagement/:id',validateToken, getDiskManagementQuestionById);
//POST request to create FCFS Question
router.post('/DiskManagement',validateToken,createDiskManagementQuestion);


router.get('/PageReplacement/:id',validateToken, getPageReplacementQuestionById);
//POST request to create FCFS Question
router.post('/PageReplacement',validateToken,createPageReplacementQuestion);





module.exports = router;
