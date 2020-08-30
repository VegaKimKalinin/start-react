import React from "react";
import CheckTitle from "../CheckTitle/CheckTitle";
import CheckDate from "../CheckDate/CheckDate";
import CheckList from "../CheckList/CheckList";
import CheckTotalPrice from "../CheckTotalPrice/CheckTotalPrice";
import "./check.css";

const Check = ({ data }) => (
	<div className="check">
		<CheckTitle firmName={data.firmName} />
		<CheckDate time={data.time} />
		<CheckList products={data.products} />
		<CheckTotalPrice totalPrice={data.totalPrice} />
	</div>
);

export default Check;
