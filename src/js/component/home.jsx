import { element } from "prop-types";
import React, { useState } from "react";

//create your first component
const Home = () => {
	const [tarea, setInputs] = useState("");
	const [lista, setLista] = useState([]);
	var pendiente = lista.length;
	if (pendiente === 0) {
		pendiente = "No tasks, add a task";
	} else {
		pendiente = lista.length + " items left";
	}

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			console.log("do validate");
		}
	};

	return (
		<div className="fondo">
			<div className="container">
				<h1 className="mx-auto">todos</h1>
				<div className="d-flex mx-auto bloc">
					<input
						className="shadow basico"
						id="entradatareas"
						value={tarea}
						onChange={(e) => {
							setInputs(e.target.value);
						}}
					/>
					<button
						type="button"
						className="btn btn-primary ms-5"
						onClick={() => {
							setLista([...lista, tarea]);
							setInputs("");
						}}>
						Añadir
					</button>
				</div>
			</div>
			{lista.map((items, index) => {
				return (
					<div
						className="shadow bas tarea border border-secondary mx-auto ps-5"
						key={index}>
						{items}
					</div>
				);
			})}
			<div className="shadow basico contador border border-secondary mx-auto ps-2">
				{pendiente}
			</div>
			<div className="shadow basico1 border border-dark mx-auto"></div>
			<div className="shadow basico2 border border-secondary mx-auto"></div>
			<div className="shadow basico3 border border-secondary mx-auto"></div>
		</div>
	);
};

export default Home;
