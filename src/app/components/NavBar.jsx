"use client";

import styles from "@/app/styles/navbar.module.scss";
import { motion } from "framer-motion";

const moveDown = {
	hidden: {
		opacity: 0,
		y: -100,
	},

	animate: {
		opacity: 1,
		y: 0,
	},
};
function NavBar() {
	return (
		<div style={{ overflow: "hidden" }} className={styles.NavBar}>
			<motion.ul
				variants={moveDown}
				initial="hidden"
				animate="animate"
				transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
				className={styles.NavBarList}
			>
				<li className={`${styles.NavBarListItem} ${styles.Menu}`}>MENU</li>
				<li className={`${styles.NavBarListItem} ${styles.Name}`}>CRUITERS</li>
				<li className={`${styles.NavBarListItem} ${styles.Signin}`}>SIGN IN</li>
			</motion.ul>
		</div>
	);
}

export default NavBar;
