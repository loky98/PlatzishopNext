import React from 'react';
import Link from 'next/link';
import { useContext } from 'react';
import AppContext from '@context/AppContext';
import OrderItem from '@components/OrderItem'
import styles from '@styles/MyOrder.module.scss';
import algo from '@icons/flechita.svg'

const MyOrder = () => {
	const { state } = useContext(AppContext);
	const sumTotal = () => {
		const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum
	}
	return (
		<aside className={styles.MyOrder}>
			<div className="title-container">
				<img src={algo.src} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map(item => (
					<OrderItem product={item} key={`ordenItem-${item.id}`} />
				))}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()} </p>
				</div>
				<Link href="/Checkout">
					<button className="primary-button" >
						Checkout
					</button>
				</Link>
			</div>
		</aside>
	);
}

export default MyOrder;
