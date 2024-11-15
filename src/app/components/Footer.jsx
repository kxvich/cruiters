"use client";

import styles from "@/app/styles/footer.module.scss";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";

const moveDown = {
	hidden: {
		opacity: 0,
		y: -50,
	},

	animate: {
		opacity: 1,
		y: 0,
	},
};

function Footer() {
	const containerRef = useRef(null);
	const inView = useInView(containerRef, { margin: "-50px", once: true });

	return (
		<div className={styles.Footer}>
			<div className={styles.FooterTop}>
				<div
					ref={containerRef}
					style={{ overflow: "hidden" }}
					className={styles.FooterLogo}
				>
					<motion.h2
						variants={moveDown}
						initial="hidden"
						animate={inView ? "animate" : ""}
						transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
						className={styles.FooterLogoText}
					>
						Cruiters
					</motion.h2>
				</div>
				<div
					ref={containerRef}
					style={{ overflow: "hidden" }}
					className={styles.FooterNavigationBox}
				>
					<motion.h3
						variants={moveDown}
						initial="hidden"
						animate={inView ? "animate" : ""}
						transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
						className={styles.FooterHeadingText}
					>
						Reach Your Goals with Us
					</motion.h3>
				</div>
			</div>
			<div className={styles.FooterCenter}>
				<div ref={containerRef} className={styles.FooterCenterBox}>
					<motion.h2
						variants={moveDown}
						initial="hidden"
						animate={inView ? "animate" : ""}
						transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
						className={styles.FooterCenterHeading}
					>
						Get In Touch
					</motion.h2>
					<motion.ul
						variants={moveDown}
						initial="hidden"
						animate={inView ? "animate" : ""}
						transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
					>
						<li className={styles.FooterCenterLinks}>cruiters@gmail.com</li>
						<li className={styles.FooterCenterLinks}>cruiters@yahoo.com</li>
						<li className={styles.FooterCenterLinks}>+2348009000</li>
					</motion.ul>
				</div>
				<div ref={containerRef} className={styles.FooterCenterBox}>
					<motion.h2
						variants={moveDown}
						initial="hidden"
						animate={inView ? "animate" : ""}
						transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
						className={styles.FooterCenterHeading}
					>
						Contact
					</motion.h2>
					<motion.ul
						variants={moveDown}
						initial="hidden"
						animate={inView ? "animate" : ""}
						transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
					>
						<li className={styles.FooterCenterLinks}>Facebook</li>
						<li className={styles.FooterCenterLinks}>Instagram</li>
						<li className={styles.FooterCenterLinks}>LinkedIn</li>
					</motion.ul>
				</div>
				<div ref={containerRef} className={styles.FooterCenterBox}>
					<motion.h2
						variants={moveDown}
						initial="hidden"
						animate={inView ? "animate" : ""}
						transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
						className={styles.FooterCenterHeading}
					>
						Quick Links
					</motion.h2>
					<motion.ul
						variants={moveDown}
						initial="hidden"
						animate={inView ? "animate" : ""}
						transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
					>
						<li className={styles.FooterCenterLinks}>About</li>
						<li className={styles.FooterCenterLinks}>Services</li>
						<li className={styles.FooterCenterLinks}>FAQ</li>
					</motion.ul>
				</div>
				<div ref={containerRef} className={styles.FooterCenterBox}>
					<motion.h2
						variants={moveDown}
						initial="hidden"
						animate={inView ? "animate" : ""}
						transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
						className={styles.FooterCenterHeading}
					>
						Address
					</motion.h2>
					<motion.ul
						variants={moveDown}
						initial="hidden"
						animate={inView ? "animate" : ""}
						transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
					>
						<li className={styles.FooterCenterLinks}>
							4 Harold Shodipo Crescent,ikeja
						</li>
						<li className={styles.FooterCenterLinks}>Lagos Nigeria</li>
					</motion.ul>
				</div>
			</div>
			<div className={styles.FooterBottom}>
				<div ref={containerRef} className={styles.FooterBottomItem1}>
					<motion.p
						variants={moveDown}
						initial="hidden"
						animate={inView ? "animate" : ""}
						transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
						className={styles.FooterBottomItem1Paragraph}
					>
						Created by Kxvich
					</motion.p>
					<motion.ul
						variants={moveDown}
						initial="hidden"
						animate={inView ? "animate" : ""}
						transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
						className={styles.FooterBottomItem1List}
					>
						<li>&copy; 2024</li>
						<li>Kovich112@gmail.com</li>
					</motion.ul>
				</div>
				<motion.div
					ref={containerRef}
					variants={moveDown}
					initial="hidden"
					animate={inView ? "animate" : ""}
					transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
					className={styles.FooterBottomItem2}
				>
					<motion.ul
						variants={moveDown}
						initial="hidden"
						animate={inView ? "animate" : ""}
						transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
						className={styles.FooterBottomItem2List}
					>
						<li className={styles.FooterBottomItem2Link}>Sign up</li>
						<li>Customer service</li>
						<li>Data Privacy</li>
						<li>Cookies Policy</li>
					</motion.ul>
				</motion.div>
			</div>
		</div>
	);
}

export default Footer;
