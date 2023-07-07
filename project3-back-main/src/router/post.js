import express from 'express';
import * as postController from '../controller/post.js';

const router = express.Router();

router.get('/', postController.getPostList);
router.post('/', postController.createPost);
router.get('/:postId', postController.getPostById);
router.put('/:postId', postController.updatePost);
router.delete('/:postId', postController.deletePost);

export default router;
