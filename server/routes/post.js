const postRouter = require('express').Router();
const PostController = require('../controllers/PostController');

postRouter.get('/', PostController.showAll);
postRouter.post('/', PostController.create);

postRouter.get('/:id', PostController.showById);
postRouter.put('/:id', PostController.editPost);
postRouter.delete('/:id', PostController.delete);

module.exports = postRouter;