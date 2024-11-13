import Image from "next/image";
import styles from "../styles/header.module.scss";

function Header() {
	return (
		<div className={styles.Header}>
			<div className={styles.HeaderLeft}>
				<div className={styles.HeaderLeftButtonContainer}>
					<button className={styles.HeaderLeftButton}>FIND TALENT</button>
					{/* <h3 className={styles.HeaderLeftText}>Scroll Down</h3> */}
				</div>
			</div>
			<div className={styles.HeaderRight}>
				<div className={styles.HeaderRightTextContainer1}>
					<h2>WHERE</h2>
				</div>
				<div className={styles.HeaderRightTextContainer2}>
					<h1 className={styles.HeaderRightTextContainer2Main}>JOB</h1>
					<div className={styles.HeaderRightTextContainer2Sub}>
						<h3>RECRUITERS</h3>
						<h3>&</h3>
						<h3>SEEKERS</h3>
					</div>
				</div>
				<div className={styles.HeaderRightTextContainer3}>
					<h1>CONNECT</h1>
				</div>
				<div className={styles.HeaderRightTextContainer4}>
					<h4>
						<span>we strategically connect comapnies </span>
						<span>with the best talent</span>
					</h4>
				</div>
			</div>
		</div>
	);
}

export default Header;
