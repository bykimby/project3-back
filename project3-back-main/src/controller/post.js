import * as postService from '../service/postService.js';

export const getPostList = async (req, res, next) => {
	try {
		const postList = await postService.getPostList();
		res.status(200).json(postList);
	} catch (err) {
		next(err);
	}
};
export const createPost = async (req, res, next) => {
	try {
	  const { name, author } = req.body;
	  const createdPost = await postService.createPost(name, author);
	  res.status(201).json(createdPost);
	} catch (err) {
	  next(err);
	}
};
  
  
export const getPostById = async (req, res, next) => {
	try {
		const { postId } = req.params;
		const post = await postService.getPostById(postId);
		if (!post) {
		res.status(404).json({ message: 'Post not found' });
		return;
		}
		res.status(200).json(post);
	} catch (err) {
		next(err);
	}
};

export const updatePost = async (req, res, next) => {
	try {
		const { postId } = req.params;
		const { name, author } = req.body;
		const updatedPost = await postService.updatePost(postId, name, author);
		if (!updatedPost) {
		res.status(404).json({ message: 'Post not found' });
		return;
		}
		res.status(200).json(updatedPost);
	} catch (err) {
		next(err);
	}
};

export const deletePost = async (req, res, next) => {
	try {
		const { postId } = req.params;
		const deleted = await postService.deletePost(postId);
		if (!deleted) {
		res.status(404).json({ message: 'Post not found' });
		return;
		}
		res.status(200).json({ message: 'Post deleted successfully' });
	} catch (err) {
		next(err);
	}
};