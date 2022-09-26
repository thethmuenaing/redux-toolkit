import React from "react";
import { useSelector } from "react-redux";

const IceCreamView = () => {
	const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams);
	return (
		<div>
			<h2>Number of ice creams - {numOfIcecreams}</h2>
			<button>Order ice cream</button>
			<span> </span>
			<button>Restock ice creams</button>
		</div>
	);
};

export default IceCreamView;
