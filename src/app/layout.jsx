import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="h-full">
			<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<body className="flex flex-col min-h-full">
				<Navbar />
				<main className="grow">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
