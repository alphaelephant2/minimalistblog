const { Post } = require('../models')

class PostController {
    static async showAll(req, res, next) {
        try {
            const posts = await Post.findAll({
                order: [['completed', 'ASC']]
            });

            res.status(200).json(posts);

        } catch (err) {
            console.log(err);
            next(err); 
        }
    }

    static async create(req, res, next) {
        const { title, description } = req.body;
        // image in req.file
        try {
            const completed = false;
            const newPost = await Post.create({
              title,
              description,
              image
            });

            const result = {
              "title": newPost.title,
              "description": newPost.description,
            }

            res.status(201).json(result);

        } catch (err) {
          console.log(err);
          next(err);
        }
    }

    static async showById(req, res, next) {
      try {
          const id = +req.params.id;
          const post = await Post.findByPk(id)

          res.status(200).json(post);

      } catch (err) {
        console.log(err);
        next(err);
      }
    }

    static async editPost(req, res, next) {
      try {
        const id = +req.params.id;
        const { title, description } = req.body;
        // image in req.file
        const updatePost = await Post.update({
          title,
          description
        }, { where: { id }, returning: true})

        res.status(200).json(updatePost[1][0]);

      } catch (err) {
        console.log(err);
        next(err);
      }
    }

    static async delete(req, res, next) {
      try {
        const id = +req.params.id;
        const deletedPost = await Post.destroy({
          where: { id }, returning: true
        })

        res.status(200).json({msg: "Post success to delete"});

      } catch (err) {
        console.log(err);
        next(err);
      }
    }
}

module.exports = PostController;