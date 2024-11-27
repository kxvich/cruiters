"use client";

import { AnimatePresence } from "framer-motion";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Intro from "./components/intro";
import Main from "./components/Main";
import Lenis from "lenis";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";

export default function Page() {
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setIsLoading(false);
		}, 2000);

		return () => clearTimeout(timeoutId);
		// const lenis = new Lenis({
		// 	autoRaf: true,
		// });
	}, []);
	return (
		<>
			<AnimatePresence mode="wait">
				{isLoading ? (
					<Intro key={"intro"} />
				) : (
					<div key={"maincontent"}>
						<NavBar />
						<Header />
						<Main />
						<Footer />
					</div>
				)}
			</AnimatePresence>
			
		</>
	);
}
