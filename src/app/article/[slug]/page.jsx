import { getPost } from "@/lib/serverMethods/blog/postMethods";

export default async function page({ params }) {
	const { slug } = await params;
	const post = await getPost(slug);

	return (
		<main className="u-padding-content-container u-main-container">
			<h1 className="mb-3 text-4xl">{post.title}</h1>
			<p>{post.markdownArticle}</p>
		</main>
	);
}
