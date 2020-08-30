import React from "react";
import "./checkItem.css";

const CheckItem = ({ product }) => {
	return (
		<li className="check__item">
			<span>{product.productName}</span>
			<span>{`- ${product.productPrise} руб`}</span>
		</li>
	);
};

export default CheckItem;
