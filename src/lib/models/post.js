import mongoose from "mongoose";
import slugify from "slugify";

const postSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		markdownArticle: {
			type: String,
			required: true,
		},
		slug: {
			type: String,
			unique: true,
		},
	},
	{
		timestamps: true,
	},
);

postSchema.pre("save", async function (next) {
	if (!this.slug) {
		const baseSlug = slugify(this.title, { lower: true, strict: true });
		let slugCandidate = baseSlug;
		let slugExists = await mongoose.models.Post.exists({ slug: slugCandidate });
		let counter = 1;

		while (slugExists) {
			slugCandidate = `${baseSlug}-${counter}`;
			slugExists = await mongoose.models.Post.exists({ slug: slugCandidate });
			counter++;
		}
		this.slug = slugCandidate;
		console.log("Final slug:", slugCandidate);
	}
	next();
});

export const Post = mongoose.models?.Post || mongoose.model("Post", postSchema);
