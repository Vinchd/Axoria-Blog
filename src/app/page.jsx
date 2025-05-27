import Link from "next/link";
import { connectToDB } from "@/lib/utils/db/connectToDB";

const posts = [
	{
		author: "John Doe",
		title: "5 CSS Tricks",
	},
	{
		author: "Victor Wallas",
		title: "How to code a navbar",
	},
	{
		author: "Bruce Willis",
		title: "How to setup Typescript",
	},
];

export default async function Home() {
	await connectToDB();

	return (
		<div className="u-padding-content-container u-main-container">
			<h1 className="t-main-title">Stay up to date with AXORIA</h1>
			<p className="t-main-subtitle">Tech news and useful knowledge</p>
			<p className="text-md text-zinc-900">Latest articles</p>
			<ul className="u-articles-grid">
				{posts.map((post, id) => (
					<li
						key={id}
						className="shadow-md hover:shadow-xl border hover:border-zinc-300 border-transparent rounded-sm transition-all duration-200"
					>
						<div className="px-5 pt-5 pb-7">
							<div className="flex items-baseline gap-x-4 text-xs">
								<time
									dateTime={new Date().toISOString()}
									className="text-gray-500 text-sm"
								>
									{new Date().toLocaleDateString("en-EN", {
										year: "numeric",
										month: "long",
										day: "2-digit",
									})}
								</time>
								<Link
									href={`/categories/author/${post.author}`}
									className="ml-auto text-gray-700 text-base truncate whitespace-nowrap hovertext-gray-600"
								>
									{post.author}
								</Link>
							</div>
							<Link
								href={`/article/${post.title}`}
								className="inline-block mt-6 font-semibold text-zinc-800 hover:text-zinc-600 text-xl"
							>
								{post.title}
							</Link>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
