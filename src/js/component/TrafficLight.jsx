import React, { useState } from "react";
import Circle from "./Circle.jsx";
import lights from "../data.js";

const TrafficLight = () => {
	const [isSelected, setIsSelected] = useState("");
	return (
		<div className="traffic-light">
			{lights.map((item, index) => (
				<Circle
					key={index}
					light={item}
					selected={item.color === isSelected ? true : false}
					onClick={() => {
						setIsSelected(item.color);
					}}
				/>
			))}
		</div>
	);
};

export default TrafficLight;
