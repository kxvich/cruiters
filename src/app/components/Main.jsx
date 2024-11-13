import styles from "../styles/main.module.scss";
import Image from "next/image";
function Main() {
	return (
		<div className={styles.Main}>
			<section className={styles.sectionDescription}>
				<p className={styles.sectionDescriptionParagraph}>
					We specialize in connecting companies with top talent across various
					fields, bridging the gap between employers and potential employees.
					Our services range from talent scouting and job posting to
					comprehensive human resources management, profile creation, and
					enhancement. We aim to ensure that both employers and employees
					achieve mutually beneficial outcomes through a seamless, supportive
					process.
				</p>
				<div className={styles.sectionDescriptionHeading1Background}>
					<h3 className={styles.sectionDescriptionHeading1}>FOR EMPLOYERS</h3>
				</div>
				<p className={styles.sectionDescriptionParagraph2}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
					quibusdam quod ab labore quam quos accusantium iusto dignissimos fuga
					dolorum inventore provident porro ex quis adipisci sequi delectus
					deleniti mollitia aperiam eveniet debitis, ipsum minus! Modi facere
					sit voluptates quis eius, impedit repellat nostrum magni? Corporis
					natus placeat incidunt dolor.
				</p>
				<div className={styles.sectionDescriptionHeading2Background}>
					<h3 className={styles.sectionDescriptionHeading2}>FOR JOB SEEKERS</h3>
				</div>
				<p className={styles.sectionDescriptionParagraph3}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
					quibusdam quod ab labore quam quos accusantium iusto dignissimos fuga
					dolorum inventore provident porro ex quis adipisci sequi delectus
					deleniti mollitia aperiam eveniet debitis, ipsum minus! Modi facere
					sit voluptates quis eius, impedit repellat nostrum magni? Corporis
					natus placeat incidunt dolor.
				</p>
				<div className={styles.sectionDescriptionButtonContainer}>
					<button className={styles.sectionDescriptionButton}>ABOUT US</button>
				</div>
			</section>
			<section className={styles.sectionServices}>
				<div className={styles.sectionServicesLeft}>
					<h1 className={styles.sectionServicesLeftHeading}>OUR SERVICES</h1>

					<div className={styles.sectionServicesLeftItem}>
						<h2 className={styles.sectionServicesLeftItemText}>
							TALENT SCOUTING
						</h2>
					</div>
					<div className={styles.sectionServicesLeftItem}>
						<h2 className={styles.sectionServicesLeftItemText}>
							JOB PLACEMENTS
						</h2>
					</div>
					<div className={styles.sectionServicesLeftItem}>
						<h2 className={styles.sectionServicesLeftItemText}>
							HUMAN RESOURCES MANAGEMENT
						</h2>
					</div>
					<div className={styles.sectionServicesLeftItem}>
						<h2 className={styles.sectionServicesLeftItemText}>
							PROFILE ENHANCEMENT
						</h2>
					</div>
				</div>
				<div className={styles.sectionServicesRight}></div>
			</section>
			<section className={styles.sectionTestimonials}>
				<div className={styles.sectionTestimonialsHeaderContainer}>
					<h2 className={styles.sectionTestimonialsHeader}>TESTIMONIALS</h2>
				</div>
				<div className={styles.sectionTestimonialsComponents}>
					<div className={styles.sectionTestimonialsComponentsUserBox}>
						<div className={styles.sectionTestimonialsComponentsImage}>
							<Image
								src={"/userImage1.jpg"}
								alt="user-image1"
								width={70}
								height={70}
								style={{ borderRadius: "50%" }}
							/>
						</div>
						<p className={styles.sectionTestimonialsComponentsName}>
							Benjamin Kennedy
						</p>
					</div>
					<h2 className={styles.sectionTestimonialsComponentsText}>
						&quot; Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Culpa earum doloribus modi, ut consequuntur molestiae possimus
						reprehenderit corrupti ad, esse rem dolore explicabo! Voluptate
						mollitia tempora, nulla quidem eveniet vero commodi nam nostrum
						quis, velit dolore cumque adipisci? Aspernatur deleniti odio nisi
						aliquid magni repellendus tempora rem! Beatae, inventore sunt.&quot;
					</h2>
					<div className={styles.sectionTestimonialsComponentsUserBox}>
						<div className={styles.sectionTestimonialsComponentsImage}>
							<Image
								src={"/userImage2.jpg"}
								alt="user-image1"
								width={70}
								height={70}
								style={{ borderRadius: "50%" }}
							/>
						</div>
						<p className={styles.sectionTestimonialsComponentsName}>
							Ross Micheals
						</p>
					</div>
					<h2 className={styles.sectionTestimonialsComponentsText}>
						&quot; Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Culpa earum doloribus modi, ut consequuntur molestiae possimus
						reprehenderit corrupti ad, esse rem dolore explicabo! Voluptate
						mollitia tempora, nulla quidem eveniet vero commodi nam nostrum
						quis, velit dolore cumque adipisci? Aspernatur deleniti odio nisi
						aliquid magni repellendus tempora rem! Beatae, inventore sunt.&quot;
					</h2>
					<button className={styles.sectionTestimonialsButton}>
						More Stories
					</button>
				</div>
			</section>
			<section className={styles.sectionFaq}>
				<div className={styles.sectionFaqHeadingBackground}>
					<h3 className={styles.sectionFaqHeading}>
						Frequenty Asked Questions
					</h3>
				</div>
				<div className={styles.sectionFaqItem}>
					<p className={styles.sectionFaqItemText}>
						How does your recruitment process work for both employers and job
						seekers?
					</p>
				</div>
				<div className={styles.sectionFaqItem}>
					<p className={styles.sectionFaqItemText}>
						What industries and job roles do you specialize in?
					</p>
				</div>
				<div className={styles.sectionFaqItem}>
					<p className={styles.sectionFaqItemText}>
						How long does it usually take to fill a position?
					</p>
				</div>
                <button className={styles.sectionFaqButton}> See More Questions</button>
			</section>
		</div>
	);
}

export default Main;
