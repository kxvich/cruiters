"use client";

import { useRef } from "react";
import styles from "../styles/main.module.scss";
import { useInView, motion } from "framer-motion";

const moveUp = {
	hidden: {
		opacity: 0,
		y: 50,
	},

	animate: {
		opacity: 1,
		y: 0,
	},
};
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
const fillInRight = {
	hidden: {
		opacity: 0,
		width: 0,
	},

	animate: {
		opacity: 1,
		width: "100%",
	},
};

const fillInRightShort = {
	hidden: {
		opacity: 0,
		width: 0,
	},

	animate: {
		opacity: 1,
		width: "100%",
	},
};

const Text = [
	"We specialize in connecting companies with top talent across various fields, bridging the",
	" gap between employers and potential employees. Our services range from talent scouting ",
	"and job posting to comprehensive human resources management, profile creation, and",
	"enhancement. We aim to ensure that both employers and employees achieve mutually",
	"beneficial outcomes through a seamless, supportive process.",
];
const Text2 = [
	"Our recruiting company connects employers with top-tier talent through efficient",
	"customized hiring solutions. We streamline the process by delivering pre-screened",
	" candidates, leverage industry expertise to find specialized skills, and support employer",
	"branding to attract the best fit. Whether you need temporary staffing or permanent",
	" placements, we provide flexible, tailored strategies to meet your hiring needs and drive your business forward.",
];
const Text3 = [
	"Our recruiting company is dedicated to helping job seekers find their ideal roles with",
	"ease and confidence. We connect talented professionals like you with leading",
	"employers,offering opportunities tailored to your skills and career goals. Through our",
	"industry expertise, we match you with positions that align with your unique qualifications and aspirations.",
];
const Text4 = [
	"Exceptional Service and Results!",
	"I had an amazing experience working with this recruiting company! From the first interaction, their team demonstrated professionalism and genuine care. They took the time to understand my business needs and delivered top-tier candidates that exceeded my expectations.",
];
const Text5 = [
	"A Life-Changing Opportunity!",
	"As a job seeker, I felt supported every step of the way with this recruiting company. They truly go above and beyond to connect candidates with the right opportunities. The team took the time to understand my skills and career goals, guiding me toward a position that was not only a great fit but also aligned with my long-term aspirations.",
];

function Main() {
	const containerRef = useRef(null);
	const inView = useInView(containerRef, { margin: "0px", once: true });

	const containerRef2 = useRef(null);
	const inView2 = useInView(containerRef2, { margin: "100px", once: true });

	const containerRef2Paragraph = useRef(null);
	const inView2paragraph = useInView(containerRef2Paragraph, {
		margin: "100px",
		once: true,
	});

	const containerRef3 = useRef(null);
	const inView3 = useInView(containerRef3, { margin: "50px", once: true });

	const containerRef3Paragraph = useRef(null);
	const inView3paragraph = useInView(containerRef3Paragraph, {
		margin: "50px",
		once: true,
	});

	const containerRef4 = useRef(null);
	const inView4 = useInView(containerRef4, { margin: "50px", once: true });

	const containerRef5 = useRef(null);
	const inView5 = useInView(containerRef5, { margin: "50px", once: true });

	const containerRef6 = useRef(null);
	const inView6 = useInView(containerRef6, { margin: "50px", once: true });

	const containerRef7 = useRef(null);
	const inView7 = useInView(containerRef7, { margin: "50px", once: true });

	return (
		<div className={styles.Main}>
			<section className={styles.sectionDescription}>
				<motion.div
					ref={containerRef}
					className={styles.sectionDescriptionParagraphContainer}
				>
					{Text.map((item, i) => (
						<p
							key={`k_${i}`}
							style={{ overflow: "hidden" }}
							className={styles.sectionDescriptionParagraph}
						>
							<motion.span
								style={{ display: "inline-block" }}
								variants={moveUp}
								initial="hidden"
								animate={inView ? "animate" : ""}
								transition={{
									duration: 0.8,
									ease: [0.76, 0, 0.24, 1],
									delay: i * 0.025,
								}}
							>
								{item}
							</motion.span>
						</p>
					))}
				</motion.div>
				<motion.div
					ref={containerRef2}
					variants={fillInRight}
					initial="hidden"
					animate={inView2 ? "animate" : ""}
					transition={{
						duration: 0.8,
						ease: [0.76, 0, 0.24, 1],
					}}
					className={styles.sectionDescriptionHeading1Background}
				>
					<motion.h3
						variants={moveUp}
						initial="hidden"
						animate={inView2 ? "animate" : ""}
						transition={{
							duration: 0.8,
							ease: [0.76, 0, 0.24, 1],
							delay: 0.15,
						}}
						className={styles.sectionDescriptionHeading1}
					>
						FOR EMPLOYERS
					</motion.h3>
				</motion.div>
				<motion.div
					ref={containerRef2Paragraph}
					className={styles.sectionDescriptionParagraphContainer2}
				>
					<p
						style={{ overflow: "hidden" }}
						className={styles.sectionDescriptionParagraph2}
					>
						{Text2.map((item, i) => (
							<motion.span
								key={`k_${i}`}
								style={{ display: "inline-block" }}
								variants={moveUp}
								initial="hidden"
								animate={inView2paragraph ? "animate" : ""}
								transition={{
									duration: 0.8,
									ease: [0.76, 0, 0.24, 1],
									delay: i * 0.025,
								}}
							>
								{item}
							</motion.span>
						))}
					</p>
				</motion.div>
				<motion.div
					ref={containerRef3}
					variants={fillInRight}
					initial="hidden"
					animate={inView3 ? "animate" : ""}
					transition={{
						duration: 0.8,
						ease: [0.76, 0, 0.24, 1],
					}}
					className={styles.sectionDescriptionHeading2Background}
				>
					<motion.h3
						variants={moveUp}
						initial="hidden"
						animate={inView3 ? "animate" : ""}
						transition={{
							duration: 0.8,
							ease: [0.76, 0, 0.24, 1],
							delay: 0.25,
						}}
						className={styles.sectionDescriptionHeading2}
					>
						FOR JOB SEEKERS
					</motion.h3>
				</motion.div>
				<motion.div
					ref={containerRef3Paragraph}
					className={styles.sectionDescriptionParagraphContainer3}
				>
					{Text3.map((item, i) => (
						<p
							style={{ overflow: "hidden" }}
							key={`k_${i}`}
							className={styles.sectionDescriptionParagraph3}
						>
							<motion.span
								style={{ display: "inline-block" }}
								variants={moveUp}
								initial="hidden"
								animate={inView3paragraph ? "animate" : ""}
								transition={{
									duration: 0.8,
									ease: [0.76, 0, 0.24, 1],
									delay: i * 0.025,
								}}
							>
								{item}
							</motion.span>
						</p>
					))}
				</motion.div>
				<motion.div
					ref={containerRef3}
					className={styles.sectionDescriptionButtonContainer}
					style={{ overflow: "hidden" }}
				>
					<motion.button
						variants={moveUp}
						initial="hidden"
						animate={inView3 ? "animate" : ""}
						transition={{
							duration: 0.8,
							ease: [0.76, 0, 0.24, 1],
						}}
						className={styles.sectionDescriptionButton}
					>
						ABOUT US
					</motion.button>
				</motion.div>
			</section>
			<section className={styles.sectionServices}>
				<motion.div ref={containerRef4} className={styles.sectionServicesLeft}>
					<div style={{ overflow: "hidden" }}>
						<motion.h1
							variants={moveDown}
							initial="hidden"
							animate={inView4 ? "animate" : ""}
							transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
							className={styles.sectionServicesLeftHeading}
						>
							OUR SERVICES
						</motion.h1>
					</div>

					<motion.div
						variants={fillInRight}
						initial="hidden"
						animate={inView4 ? "animate" : ""}
						transition={{
							duration: 0.8,
							ease: [0.76, 0, 0.24, 1],
						}}
						className={styles.sectionServicesLeftItem}
					>
						<motion.h2 className={styles.sectionServicesLeftItemText}>
							TALENT SCOUTING
						</motion.h2>
					</motion.div>
					<motion.div
						variants={fillInRight}
						initial="hidden"
						animate={inView4 ? "animate" : ""}
						transition={{
							duration: 0.8,
							ease: [0.76, 0, 0.24, 1],
							delay: 0.2,
						}}
						className={styles.sectionServicesLeftItem}
					>
						<h2 className={styles.sectionServicesLeftItemText}>
							JOB PLACEMENTS
						</h2>
					</motion.div>
					<motion.div
						variants={fillInRight}
						initial="hidden"
						animate={inView4 ? "animate" : ""}
						transition={{
							duration: 0.8,
							ease: [0.76, 0, 0.24, 1],
							delay: 0.35,
						}}
						className={styles.sectionServicesLeftItem}
					>
						<h2 className={styles.sectionServicesLeftItemText}>
							HUMAN RESOURCES MANAGEMENT
						</h2>
					</motion.div>
					<motion.div
						variants={fillInRight}
						initial="hidden"
						animate={inView4 ? "animate" : ""}
						transition={{
							duration: 0.8,
							ease: [0.76, 0, 0.24, 1],
							delay: 0.4,
						}}
						className={styles.sectionServicesLeftItem}
					>
						<h2 className={styles.sectionServicesLeftItemText}>
							PROFILE ENHANCEMENT
						</h2>
					</motion.div>
				</motion.div>
				<motion.div
					initial={{ scale: 0.5 }}
					animate={{ scale: inView4 ? 1 : 0.5 }}
					transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
					className={styles.sectionServicesRight}
				></motion.div>
			</section>
			<section className={styles.sectionTestimonials}>
				<motion.div
					ref={containerRef5}
					className={styles.sectionTestimonialsHeaderContainer}
					style={{ overflow: "hidden" }}
				>
					<motion.h2
						variants={moveDown}
						initial="hidden"
						animate={inView5 ? "animate" : ""}
						transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
						className={styles.sectionTestimonialsHeader}
					>
						TESTIMONIALS
					</motion.h2>
				</motion.div>
				<div className={styles.sectionTestimonialsComponents}>
					<div
						style={{ overflow: "hidden" }}
						className={styles.sectionTestimonialsComponentsUserBox}
					>
						<motion.div
							variants={moveDown}
							initial="hidden"
							animate={inView5 ? "animate" : ""}
							transition={{
								duration: 0.8,
								ease: [0.76, 0, 0.24, 1],
								delay: 0.1,
							}}
							className={styles.sectionTestimonialsComponentsImageContainer}
						>
							<div
								className={styles.sectionTestimonialsComponentsImage}
								style={{ backgroundImage: "url(/userImage1.jpg)" }}
							></div>
						</motion.div>
						<motion.p
							variants={moveDown}
							initial="hidden"
							animate={inView5 ? "animate" : ""}
							transition={{
								duration: 0.8,
								ease: [0.76, 0, 0.24, 1],
								delay: 0.1,
							}}
							className={styles.sectionTestimonialsComponentsName}
						>
							Benjamin Kennedy
						</motion.p>
					</div>
					<div
						style={{ overflow: "hidden" }}
						className={styles.sectionTestimonialsComponentsTextContainer}
					>
						{Text4.map((item, i) => (
							<div key={`k_${i}`}>
								<motion.p
									variants={moveDown}
									initial="hidden"
									animate={inView5 ? "animate" : ""}
									transition={{
										duration: 0.8,
										ease: [0.76, 0, 0.24, 1],
										delay: i * 0.025,
									}}
									className={styles.sectionTestimonialsComponentsText}
								>
									{item}
								</motion.p>
							</div>
						))}
					</div>

					<div className={styles.sectionTestimonialsComponentsUserBox}>
						<div className={styles.sectionTestimonialsComponentsImageContainer}>
							<div
								className={styles.sectionTestimonialsComponentsImage}
								style={{
									backgroundImage: "url(/userImage2.jpg)",
									backgroundPosition: "bottom",
								}}
							></div>
						</div>
						<motion.p
							variants={moveDown}
							initial="hidden"
							animate={inView5 ? "animate" : ""}
							transition={{
								duration: 0.8,
								ease: [0.76, 0, 0.24, 1],
								delay: 0.1,
							}}
							className={styles.sectionTestimonialsComponentsName}
						>
							Ross Micheals
						</motion.p>
					</div>
					<div
						style={{ overflow: "hidden" }}
						className={styles.sectionTestimonialsComponentsTextContainer}
					>
						{Text5.map((item, i) => (
							<div key={`k_${i}`}>
								<motion.p
									variants={moveDown}
									initial="hidden"
									animate={inView5 ? "animate" : ""}
									transition={{
										duration: 0.8,
										ease: [0.76, 0, 0.24, 1],
										delay: i * 0.025,
									}}
									className={styles.sectionTestimonialsComponentsText}
								>
									{item}
								</motion.p>
							</div>
						))}
					</div>
					<button className={styles.sectionTestimonialsButton}>
						More Stories
					</button>
				</div>
			</section>
			<section ref={containerRef6} className={styles.sectionFaq}>
				<motion.div
					variants={fillInRight}
					initial="hidden"
					animate={inView6 ? "animate" : ""}
					transition={{
						duration: 0.8,
						ease: [0.76, 0, 0.24, 1],
					}}
					className={styles.sectionFaqHeadingBackground}
				>
					<motion.h3
						variants={moveUp}
						initial="hidden"
						animate={inView6 ? "animate" : ""}
						transition={{
							duration: 0.8,
							ease: [0.76, 0, 0.24, 1],
							delay: 0.1,
						}}
						className={styles.sectionFaqHeading}
					>
						Frequently Asked Questions
					</motion.h3>
				</motion.div>
				<div ref={containerRef7} className={styles.sectionFaqItemContainer}>
					<motion.div
						variants={fillInRightShort}
						initial="hidden"
						animate={inView7 ? "animate" : ""}
						transition={{
							duration: 0.8,
							ease: [0.76, 0, 0.24, 1],
						}}
						className={styles.sectionFaqItem}
						style={{ overflow: "hidden" }}
					>
						<motion.p
							variants={moveUp}
							initial="hidden"
							animate={inView7 ? "animate" : ""}
							transition={{
								duration: 0.8,
								ease: [0.76, 0, 0.24, 1],
								delay: 0.1,
							}}
							className={styles.sectionFaqItemText}
						>
							How does your recruitment process work for both employers and job
							seekers?
						</motion.p>
					</motion.div>
					<motion.div
						variants={fillInRightShort}
						initial="hidden"
						animate={inView7 ? "animate" : ""}
						transition={{
							duration: 0.6,
							ease: [0.76, 0, 0.24, 1],
						}}
						className={styles.sectionFaqItem}
						style={{ overflow: "hidden" }}
					>
						<motion.p
							variants={moveUp}
							initial="hidden"
							animate={inView7 ? "animate" : ""}
							transition={{
								duration: 0.8,
								ease: [0.76, 0, 0.24, 1],
								delay: 0.1,
							}}
							className={styles.sectionFaqItemText}
						>
							What industries and job roles do you specialize in?
						</motion.p>
					</motion.div>
					<motion.div
						variants={fillInRightShort}
						initial="hidden"
						animate={inView7 ? "animate" : ""}
						transition={{
							duration: 0.6,
							ease: [0.76, 0, 0.24, 1],
						}}
						className={styles.sectionFaqItem}
						style={{ overflow: "hidden" }}
					>
						<motion.p
							variants={moveUp}
							initial="hidden"
							animate={inView7 ? "animate" : ""}
							transition={{
								duration: 0.8,
								ease: [0.76, 0, 0.24, 1],
								delay: 0.1,
							}}
							className={styles.sectionFaqItemText}
							style={{ overflow: "hidden" }}
						>
							How long does it usually take to fill a position?
						</motion.p>
					</motion.div>
					<div className={styles.sectionFaqButtonContainer}>
						<motion.button
							variants={moveUp}
							initial="hidden"
							animate={inView7 ? "animate" : ""}
							transition={{
								duration: 0.6,
								ease: [0.76, 0, 0.24, 1],
							}}
							className={styles.sectionFaqButton}
						>
							{" "}
							See More Questions
						</motion.button>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Main;
