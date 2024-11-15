import { motion } from "framer-motion";
import styles from "@/app/styles/intro.module.scss";

const fillInRight = {
	hidden: {
		opacity: 0,
		width: 0,
	},

	animate: {
		opacity: 1,
		width: "100%",
	},
	exit: {
		display: "none",
		width: 0,
		height: "0",
	},
};
const moveUp = {
	hidden: {
		opacity: 0,
		y: 50,
	},

	animate: {
		opacity: 1,
		y: 0,
	},

	exit: {
		opacity: 0,
		y: 50,
	},
};

function Intro() {
	return (
		<div className={styles.IntroBackground}>
			<motion.div
				initial={{ height: "0" }}
				animate={{ height: "100%" }}
				exit={{ height: "0" }}
				transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
				className={styles.IntroBackgroundLeft}
			>
				<div className={styles.IntroMessageContainer}>
					<motion.div
						variants={fillInRight}
						initial="hidden"
						animate="animate"
						exit="exit"
						transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
						className={styles.IntroTextContainer}
						style={{ overflow: "hidden" }}
					>
						<motion.h2
							variants={moveUp}
							initial="hidden"
							animate="animate"
							exit="exit"
							transition={{
								duration: 0.6,
								ease: [0.76, 0, 0.24, 1],
								delay: 0.4,
							}}
							className={styles.IntroText}
						>
							Welcome
						</motion.h2>
					</motion.div>
					<motion.div
						variants={fillInRight}
						initial="hidden"
						animate="animate"
						exit="exit"
						transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1], delay: 0.4 }}
						className={styles.IntroTextContainer}
						style={{ overflow: "hidden" }}
					>
						<motion.h2
							variants={moveUp}
							initial="hidden"
							animate="animate"
							exit="exit"
							transition={{
								duration: 0.6,
								ease: [0.76, 0, 0.24, 1],
								delay: 0.5,
							}}
							className={styles.IntroText}
						>
							To
						</motion.h2>
					</motion.div>
					<motion.div
						variants={fillInRight}
						initial="hidden"
						animate="animate"
						exit="exit"
						transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1], delay: 0.5 }}
						className={styles.IntroTextContainer}
						style={{ overflow: "hidden" }}
					>
						<motion.h2
							variants={moveUp}
							initial="hidden"
							animate="animate"
							exit="exit"
							transition={{
								duration: 0.6,
								ease: [0.76, 0, 0.24, 1],
								delay: 0.5,
							}}
							className={styles.IntroText}
						>
							Cruiters
						</motion.h2>
					</motion.div>
				</div>
			</motion.div>
			<motion.div
				initial={{ height: "0" }}
				animate={{ height: "100%" }}
				exit={{ height: "0" }}
				transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
				className={styles.IntroBackgroundRight}
			></motion.div>
		</div>
	);
}

export default Intro;
