import Link from "next/link";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-gray-200 py-4 mt-24">
			<div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
				<Link className="flex flex-shrink-0 items-center" href="/">
					<span className="text-black text-2xl font-bold ml-2">PropertyX</span>
				</Link>

				<div>
					<p className="text-sm text-gray-500 mt-2 md:mt-0">
						&copy; {currentYear} PropertyPulse. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
