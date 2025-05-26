"use client";

export default function page() {
	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);

		for (const [key, value] of formData.entries()) {
			console.log(key, value);
		}
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
					className="shadow mb-7 p-3 border border-transparent rounded focus:outline-slate-400 w-full text-gray-700"
				/>
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
					className="shadow mb-4 p-8 border border-transparent rounded focus:outline-slate-400 w-full min-h-44 text-gray-700 text-xl appearance-none"
				/>
				<button className="bg-indigo-500 hover:bg-indigo-700 mb-4 px-4 py-3 border-none rounded min-w-44 font-bold text-white transition-all duration-200">
					Submit
				</button>
			</form>
		</main>
	);
}
