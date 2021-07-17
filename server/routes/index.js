const router = require('express').Router();
const postRouter = require('./post.js');
const userRouter = require('./user.js');
const HomeController = require('../controllers/HomeController.js');

router.get('/', HomeController.showHomePage);
router.use('/', userRouter);
router.use('/post', postRouter);

module.exports = router;