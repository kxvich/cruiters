"use client";

import styles from "../styles/header.module.scss";
import { motion } from "framer-motion";

const moveUp = {
	hidden: {
		opacity: 0,
		y: 100,
	},

	animate: {
		opacity: 1,
		y: 0,
	},
};
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

function Header() {
	return (
		<div className={styles.Header}>
			<motion.div
				initial={{ scale: 0.9 }}
				animate={{ scale: 1 }}
				transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
				className={styles.HeaderLeft}
			>
				<motion.div
					variants={moveUp}
					initial="hidden"
					animate="animate"
					transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
					className={styles.HeaderLeftButtonContainer}
				>
					<button className={styles.HeaderLeftButton}>FIND TALENT</button>
				</motion.div>
			</motion.div>
			<div className={styles.HeaderRight}>
				<div className={styles.HeaderRightTextBox}>
					<div
						style={{ overflow: "hidden" }}
						className={styles.HeaderRightTextContainer1}
					>
						<motion.h2
							variants={moveUp}
							initial="hidden"
							animate="animate"
							transition={{
								duration: 0.8,
								ease: [0.76, 0, 0.24, 1],
								delay: 0.1,
							}}
						>
							WHERE
						</motion.h2>
					</div>
					<div
						style={{ overflow: "hidden" }}
						className={styles.HeaderRightTextContainer2}
					>
						<motion.h1
							variants={moveDown}
							initial="hidden"
							animate="animate"
							transition={{
								duration: 0.8,
								ease: [0.76, 0, 0.24, 1],
								delay: 0.3,
							}}
							className={styles.HeaderRightTextContainer2Main}
						>
							JOB
						</motion.h1>
						<motion.div
							variants={moveDown}
							initial="hidden"
							animate="animate"
							transition={{
								duration: 0.8,
								ease: [0.76, 0, 0.24, 1],
								delay: 0.3,
							}}
							className={styles.HeaderRightTextContainer2Sub}
						>
							<h3>RECRUITERS</h3>
							<h3>&</h3>
							<h3>SEEKERS</h3>
						</motion.div>
					</div>
					<div
						style={{ overflow: "hidden" }}
						className={styles.HeaderRightTextContainer3}
					>
						<motion.h1
							variants={moveUp}
							initial="hidden"
							animate="animate"
							transition={{
								duration: 0.8,
								ease: [0.76, 0, 0.24, 1],
								delay: 0.3,
							}}
						>
							CONNECT
						</motion.h1>
					</div>
					<div
						style={{ overflow: "hidden" }}
						className={styles.HeaderRightTextContainer4}
					>
						<motion.h4
							variants={moveUp}
							initial="hidden"
							animate="animate"
							transition={{
								duration: 0.8,
								ease: [0.76, 0, 0.24, 1],
								delay: 0.3,
							}}
						>
							<span>we strategically connect comapnies </span>
							<span>with the best talent</span>
						</motion.h4>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
