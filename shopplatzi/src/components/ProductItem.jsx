import React from 'react';
import { useContext } from 'react';
import AppContext from '@context/AppContext';
import Image from 'next/image';

import styles from '@styles/ProductItem.module.scss';

import addCartIcon from '@icons/bt_add_to_cart.svg'

const ProductItem = ({ product }) => {
	const { addToCart } = useContext(AppContext);

	const handleClick = item => {
		addToCart(item);
	}
	return (
		<div className={styles.ProductItem}>
			<img src={product.images[0]} alt={product.title}  />
			<div className={styles['product-info']}>
				<div>
					<p>${product.price} valor </p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)} >
					<Image src={addCartIcon} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
