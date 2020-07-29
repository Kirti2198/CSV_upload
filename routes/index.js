const express = require('express');
// using express.Router
const router = express.Router();
// require the home_controller
const homeController = require('../controllers/home_controller');

router.get('/', homeController.home);
// get access to the home_controller home action
router.use('/searchs_files', require('./searchs_files'));
// require other routes
// router.use('/search', require('./search_file'));
// for any further routes
//  router.use('/routerName',require('./routerFile);


// export the router
module.exports = router;