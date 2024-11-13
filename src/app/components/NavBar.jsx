import styles from "@/app/styles/navbar.module.scss";

function NavBar() {
	return (
		<div className={styles.NavBar}>
			<ul className={styles.NavBarList}>
				<li className={`${styles.NavBarListItem} ${styles.Menu}`}>MENU</li>
				<li className={`${styles.NavBarListItem} ${styles.Name}`}>CRUITERS</li>
				<li className={`${styles.NavBarListItem} ${styles.Contact}`}>
					CONTACT
				</li>
			</ul>
		</div>
	);
}

export default NavBar;
