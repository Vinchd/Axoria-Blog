import Link from "next/link";
import "prism-themes/themes/prism-vsc-dark-plus.css";
import { getPost } from "@/lib/serverMethods/blog/postMethods";
import "./article-styles.css";

export default async function page({ params }) {
	const { slug } = await params;
	const post = await getPost(slug);

	return (
		<main className="u-padding-content-container u-main-container">
			<h1 className="mb-3 text-4xl">{post.title}</h1>
			<p className="mb-6">
				{post.tags.map((tag) => (
					<Link
						href={`categories/tag/${tag.slug}`}
						key={tag.slug}
						className="mr-4 hover:text-gray-600 underline"
					>
						#{tag.name}
					</Link>
				))}
			</p>

			<div
				dangerouslySetInnerHTML={{ __html: post.markdownHTMLResult }}
				className="article-styles"
			/>
		</main>
	);
}
