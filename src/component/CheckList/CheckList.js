import React from "react";
import CheckItem from "../CheckItem/CheckItem";

const CheckList = ({ products }) => (
	<ul>
		{products.map((product, i) => (
			<CheckItem product={product} key={i} />
		))}
		
	</ul>
);

export default CheckList;
