import NavBar from "./components/NavBar";
import "./globals.scss";

export const metadata = {
	title: "Cruiters",
	description: "a platform where job recruiters and job seekers meet",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<NavBar />
				{children}
			</body>
		</html>
	);
}
