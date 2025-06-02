import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="fixed bg-slate-50 border-b border-b-zinc-300 w-full">
			<div className="flex py-4 u-main-container">
				<Link href="/" className="mr-2 text-zinc-900">
					AXORIA
				</Link>
				<Link href="/categories" className="mx-2 mr-auto text-zinc-900">
					Categories
				</Link>
				<Link href="/dashboard/create" className="mx-2 text-zinc-900">
					Add an article
				</Link>
			</div>
		</nav>
	);
}
