import React, { useState } from "react";
import Circle from "./Circle.jsx";
import lights from "../data.js";

const TrafficLight = () => {
	const [isSelected, setIsSelected] = useState("");
	console.log("line 7 isSelected: ", isSelected);
	return (
		<div className="traffic-light">
			{lights.map((item, index) => (
				<Circle
					key={index}
					lights={item}
					selected={lights[index].color === isSelected ? true : false}
					onClick={() => {
						setIsSelected(lights[index].color);
						console.log("line 17 isSelected: ", isSelected);
					}}
				/>
			))}
		</div>
	);
};

export default TrafficLight;
