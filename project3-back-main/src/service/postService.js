import dataSource from '../config/dataSource.js';

const postRepository = dataSource.getRepository('post');

const insertPost = async (name) => {};

export const getPostList = async () => {
	try {
		const postList = await postRepository.find();
		return postList;
	} catch (err) {
		console.error(err);
	}
};
export const createPost = async (name, author) => {
	try {
		const post = postRepository.create({ name, author });
		const createdPost = await postRepository.save(post);
		return createdPost;
	} catch (err) {
		console.error(err);
	}
};
  
export const getPostById = async (postId) => {
	try {
		const post = await postRepository.findOne(postId);
		return post;
	} catch (err) {
		console.error(err);
	}
};

export const updatePost = async (postId, name, author) => {
	try {
		const post = await postRepository.findOne(postId);
		if (!post) {
		throw new Error('Post not found');
		}
		post.name = name;
		post.author = author;
		const updatedPost = await postRepository.save(post);
		return updatedPost;
	} catch (err) {
		console.error(err);
	}
};

export const deletePost = async (postId) => {
	try {
		const deleteResult = await postRepository.delete(postId);
		return deleteResult.affected > 0;
	} catch (err) {
		console.error(err);
	}
};
  