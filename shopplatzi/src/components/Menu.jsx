import React from 'react';
import styles from '@styles/Menu.module.scss';
import Link from 'next/link';

const Menu = () => {
	return (
		<div className={styles.Menu}>
			<ul>
				<li>
					<Link href="/" >
						<a className={styles.title}  href='replace' >My orders</a>
					</Link>

				</li>
				<li>
					<Link href="/" >
						<a href='replace'>My account</a>
					</Link>

				</li>
				<li>
					<Link href="/" >
						<a href='replace'>Sign out</a>
					</Link>

				</li>
			</ul>
		</div>
	);
};

export default Menu;
