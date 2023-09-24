
const express=require('express');
const router = express.Router();
const { getFCFSQuestionById, createFCFSQuestion, deleteFCFSQuestionById } = require('../controllers/FCFSController');
const validateToken = require('../middleware/validateTokenHandler');
const { createSRTFQuestion, getSRTFQuestionById ,deleteSRTFQuestionById} = require('../controllers/SRTFController');

const { createSJFQuestion, getSJFQuestionById,deleteSJFQuestionById } = require('../controllers/SJFController');

const { createPRQuestion, getPRQuestionById ,deletePRQuestionById} = require('../controllers/PRController');

const { createPrePRQuestion, getPrePRQuestionById ,deletePrePRQuestionById} = require('../controllers/PrePRController');


const { createFIFOQuestion, getFIFOQuestionById,deleteFIFOQuestionById } = require('../controllers/FIFOController');

const { createLRUQuestion, getLRUQuestionById,deleteLRUQuestionById } = require('../controllers/LRUController');

const { createMRUQuestion, getMRUQuestionById,deleteMRUQuestionById } = require('../controllers/MRUController');

const { createDiskManagementQuestion, getDiskManagementQuestionById,deleteDiskManagementQuestionById } = require('../controllers/DiskManagementController');


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

router.delete('/SRTF/:id',validateToken,deleteSRTFQuestionById);


router.get('/SJF/:id',validateToken, getSJFQuestionById);
//POST request to create FCFS Question
router.post('/SJF',validateToken,createSJFQuestion);
router.delete('/SJF/:id',validateToken,deleteSJFQuestionById);


router.get('/PR/:id',validateToken, getPRQuestionById);
//POST request to create FCFS Question
router.post('/PR',validateToken,createPRQuestion);
router.delete('/PR/:id',validateToken,deletePRQuestionById);


router.get('/PrePR/:id',validateToken, getPrePRQuestionById);
//POST request to create FCFS Question
router.post('/PrePr',validateToken,createPrePRQuestion);
router.delete('/PrePr/:id',validateToken,deletePrePRQuestionById);



router.get('/DiskManagement/:id',validateToken, getDiskManagementQuestionById);
//POST request to create FCFS Question
router.post('/DiskManagement',validateToken,createDiskManagementQuestion);
router.delete('/DiskManagement/:id',validateToken,deleteDiskManagementQuestionById);


router.get('/FIFO/:id',validateToken, getFIFOQuestionById);
//POST request to create FCFS Question
router.post('/FIFO',validateToken,createFIFOQuestion);
router.delete('/FIFO/:id',validateToken,deleteFIFOQuestionById);

router.get('/LRU/:id',validateToken, getLRUQuestionById);
//POST request to create FCFS Question
router.post('/LRU',validateToken,createLRUQuestion);
router.delete('/LRU/:id',validateToken,deleteLRUQuestionById);


router.get('/MRU/:id',validateToken, getMRUQuestionById);
//POST request to create FCFS Question
router.post('/MRU',validateToken,createMRUQuestion);
router.delete('/MRU/:id',validateToken,deleteMRUQuestionById);




module.exports = router;
