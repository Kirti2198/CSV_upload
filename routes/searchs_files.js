const express = require('express');
// using express.Router
const router = express.Router();

const searchfileController = require('../controllers/search_file_controller');

router.post('/upload', searchfileController.upload);
router.get('/files_view', searchfileController.displayAllFiles);
router.get('/:id/view', searchfileController.openFile);
// router.get('/upload', searchfileController.uploadCsv);
module.exports = router;