import React from 'react';
import AppContext from '@context/AppContext';
import { useContext } from 'react';
import { useState } from 'react';
import Link from 'next/link';

import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder';

import Image from 'next/image';

import styles from "@styles/Header.module.scss";

import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [toggleOrders, setToggolOrders] = useState(false);
    const { state } = useContext(AppContext);
    const handleToggle = () => {
        setToggle(!toggle);
    };
    return (
        <nav className={styles.Nav}>
            <Link href="/Checkout" >
                <div className={styles.nav_menu}>
                    <Image src={menu.src} alt="menu" width={100} height={100} />
                </div>
            </Link>
            <div className={styles["navbar-left"]}>
                <Link href="/Checkout" >
                    <Image src={logo} alt="logo" className={styles["nav_logo"]} />
                </Link>
                <ul>
                    <li>
                        All
                    </li>
                    <li>
                        Clothes
                    </li>
                    <li>
                        Electronics
                    </li>
                    <li>
                        Furnitures
                    </li>
                    <li>
                        Toys
                    </li>
                    <li>
                        Others
                    </li>
                </ul>
            </div>
            <div className={styles["navbar-right"]}>
                <ul>
                    <li className={styles["navbar-email"]} onClick={handleToggle} role="presentation">
                        platzi@example.com
                    </li>
                    <li className={styles["navbar-shopping-cart"]} onClick={() => setToggolOrders(!toggleOrders)} role="presentation">
                        <Image src={shoppingCart.src} alt="shopping cart" width={20} height={20} />
                        {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
                    </li>
                </ul>
            </div>
            {toggle && <Menu />}
            {toggleOrders && <MyOrder />}
        </nav>
    );
};
export default Header;