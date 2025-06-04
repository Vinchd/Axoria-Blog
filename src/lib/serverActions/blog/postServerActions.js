"use server";
import slugify from "slugify";
import { connectToDB } from "@/lib/utils/db/connectToDB";
import { Post } from "@/lib/models/post";
import { Tag } from "@/lib/models/tag";

export async function addPost(formData) {
	const { title, markdownArticle, tags } = Object.fromEntries(formData);

	try {
		await connectToDB();

		// Tags management
		const tagNamesArray = JSON.parse(tags);
		const tagIds = await Promise.all(
			tagNamesArray.map(async (tagName) => {
				const normalizedTagName = tagName.trim().toLowerCase();
				let tag = await Tag.findOne({ name: normalizedTagName });

				if (!tag) {
					tag = await Tag.create({
						name: normalizedTagName,
						slug: slugify(normalizedTagName, { strict: true }),
					});
				}
				return tag._id;
			}),
		);

		const newPost = new Post({
			title,
			markdownArticle,
			tags: tagIds,
		});
		const savedPost = await newPost.save();
		console.log("Post saved successfully:", savedPost);

		return { success: true, slug: savedPost.slug };
	} catch (err) {
		console.log("Error whild creating post:", err);
		throw new Error(err.message || "An error occurred while creating the post");
	}
}
