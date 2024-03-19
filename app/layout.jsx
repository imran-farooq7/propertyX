import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";
export const metadata = {
	title: "Property X | Find the perfect rental",
	description: "Find your dream rental property",
};
const RootLayout = ({ children }) => {
	return (
		<html lang="en">
			<body>
				<div>
					<Navbar />
					{children}
				</div>
			</body>
		</html>
	);
};
export default RootLayout;
