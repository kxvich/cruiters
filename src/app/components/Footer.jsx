import styles from "@/app/styles/footer.module.scss";

function Footer() {
	return (
		<div className={styles.Footer}>
			<div className={styles.FooterTop}>
				<div className={styles.FooterLogo}>
					<h2 className={styles.FooterLogoText}>Cruiters</h2>
				</div>
				<div className={styles.FooterNavigationBox}>
					<h3 className={styles.FooterHeadingText}>Reach Your Goals with Us</h3>
				</div>
			</div>
			<div className={styles.FooterCenter}>
				<div className={styles.FooterCenterBox}>
					<h2 className={styles.FooterCenterHeading}>Get In Touch</h2>
					<ul>
						<li className={styles.FooterCenterLinks}>cruiters@gmail.com</li>
						<li className={styles.FooterCenterLinks}>cruiters@yahoo.com</li>
						<li className={styles.FooterCenterLinks}>+2348009000</li>
					</ul>
				</div>
				<div className={styles.FooterCenterBox}>
					<h2 className={styles.FooterCenterHeading}>Contact</h2>
					<ul>
						<li className={styles.FooterCenterLinks}>Facebook</li>
						<li className={styles.FooterCenterLinks}>Instagram</li>
						<li className={styles.FooterCenterLinks}>LinkedIn</li>
					</ul>
				</div>
				<div className={styles.FooterCenterBox}>
					<h2 className={styles.FooterCenterHeading}>Quick Links</h2>
					<ul>
						<li className={styles.FooterCenterLinks}>About</li>
						<li className={styles.FooterCenterLinks}>Services</li>
						<li className={styles.FooterCenterLinks}>FAQ</li>
					</ul>
				</div>
				<div className={styles.FooterCenterBox}>
					<h2 className={styles.FooterCenterHeading}>Address</h2>
					<ul>
						<li className={styles.FooterCenterLinks}>
							4 Harold Shodipo Crescent,ikeja
						</li>
						<li className={styles.FooterCenterLinks}>Lagos Nigeria</li>
					</ul>
				</div>
			</div>
			<div className={styles.FooterBottom}>
				<div className={styles.FooterBottomItem1}>
					<p className={styles.FooterBottomItem1Paragraph}>Created by Kxvich</p>
					<ul className={styles.FooterBottomItem1List}>
						<li>&copy; 2024</li>
						<li>Kovich112@gmail.com</li>
					</ul>
				</div>
				<div className={styles.FooterBottomItem2}>
					<ul className={styles.FooterBottomItem2List}>
						<li className={styles.FooterBottomItem2Link}>Sign up</li>
						<li>Customer service</li>
						<li>Data Privacy</li>
						<li>Cookies Policy</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Footer;
