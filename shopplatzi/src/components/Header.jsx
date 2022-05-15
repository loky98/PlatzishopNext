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
    }
    return (
        <nav className={styles.Nav}>
            <Link href="/">
                <img src={menu.src} alt="menu" className={styles.nav_menu} />
            </Link>
            <div className={styles["navbar-left"]}>
                <Link href="/">
                    <Image src={logo} alt="logo" className={styles["nav_logo"]} />
                </Link>
                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Clothes</a>
                    </li>
                    <li>
                        <a href="/">Electronics</a>
                    </li>
                    <li>
                        <a href="/">Furnitures</a>
                    </li>
                    <li>
                        <a href="/">Toys</a>
                    </li>
                    <li>
                        <a href="/">Others</a>
                    </li>
                </ul>
            </div>
            <div className={styles["navbar-right"]}>
                <ul>
                    <li className={styles["navbar-email"]} onClick={handleToggle}>
                        platzi@example.com
                    </li>
                    <li className={styles["navbar-shopping-cart"]} onClick={() => setToggolOrders(!toggleOrders)}>
                        <img src={shoppingCart.src} alt="shopping cart" />
                        {state.cart.length > 0 ? <div> {state.cart.length} </div> : null}
                    </li>
                </ul>
            </div>
            {toggle && <Menu />}
            {toggleOrders && <MyOrder />}
        </nav>
    );
}
export default Header;