"use client";
import { useState, useRef } from "react";
import { addPost } from "@/lib/serverActions/blog/postServerActions";

export default function page() {
	const [tags, setTags] = useState(["css", "javascript"]);
	const tagInputRef = useRef(null);

	const handleAddTag = () => {};

	const handleRemoveTag = (tag) => {};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);

		for (const [key, value] of formData.entries()) {
			console.log(key, value);
		}

		const result = await addPost(formData);
	};

	return (
		<main className="bg-white mt-32 mb-44 p-7 u-main-container">
			<h1 className="mb-4 text-4xl">Write an article 📝</h1>
			<form onSubmit={handleSubmit} className="pb-6">
				<label htmlFor="title" className="f-label">
					Title
				</label>
				<input
					type="text"
					name="title"
					id="title"
					placeholder="Title"
					required
					className="shadow mb-7 p-3 border border-slate-200 rounded focus:outline-slate-400 w-full text-gray-700"
				/>
				<div className="mb-10">
					<label htmlFor="tag" className="f-label">
						Add a tag(s) (optional, max 5)
					</label>
					<div className="flex">
						<input
							type="text"
							id="tag"
							placeholder="Add a tag"
							ref={tagInputRef}
							className="shadow p-3 border border-slate-200 rounded focus:outline-slate-400 text-gray-700"
						/>
						<button
							type="button"
							onClick={handleAddTag}
							className="bg-indigo-500 hover:bg-indigo-700 mx-4 p-4 rounded font-bold text-white cursor-pointer"
						>
							Add
						</button>
						<div className="flex items-center shadow px-3 border border-slate-200 rounded overflow-y-auto whitespace-nowrap grow">
							{tags.map((tag) => (
								<span
									key={tag}
									className="inline-block bg-gray-200 mr-2 px-3 py-1 rounded-full font-semibold text-gray-700 text-sm whitespace-nowrap"
								>
									{tag}
									<button
										type="button"
										onClick={() => handleRemoveTag(tag)}
										className="ml-2 text-red-500 cursor-pointer"
									>
										&times;
									</button>
								</span>
							))}
						</div>
					</div>
				</div>
				<label htmlFor="markdownArticle" className="f-label">
					Write your article using markdown - do not repeat the already given
					title
				</label>
				<a
					href="https://www.markdownguide.org/cheat-sheet/"
					target="_blank"
					rel="noreferrer"
					className="block mb-4 text-blue-600"
				>
					How to use the markdown syntax?
				</a>
				<textarea
					name="markdownArticle"
					id="markdownArticle"
					required
					className="shadow mb-4 p-8 border border-slate-200 rounded focus:outline-slate-400 w-full min-h-44 text-gray-700 text-xl appearance-none"
				/>
				<button
					type="submit"
					className="bg-indigo-500 hover:bg-indigo-700 mb-4 px-4 py-3 border-none rounded min-w-44 font-bold text-white transition-all duration-200 cursor-pointer"
				>
					Submit
				</button>
			</form>
		</main>
	);
}
