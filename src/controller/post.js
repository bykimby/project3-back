import * as prfService from '../service/postService.js';

export const getPostList = async (req, res, next) => {
	try {
		const postList = await prfService.getPostList();
		res.status(200).json(postList);
	} catch (err) {
		next(err);
	}
};
