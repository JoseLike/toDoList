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

	return (
		<body className="fondo">
			<div className="container">
				<h1 className="mx-auto">todos</h1>
				<div className="d-flex mx-auto bloc">
					<input
						className="basico"
						id="entradatareas"
						value={tarea}
						onChange={(e) => {
							setInputs(e.target.value);
						}}
					/>
					<button
						type="button"
						className="btn btn-primary ml-5"
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
						className="basico tarea border border-secondary mx-auto"
						key={index}>
						{items}
					</div>
				);
			})}
			<div className="basico contador border border-secondary mx-auto">
				{pendiente}
			</div>
		</body>
	);
};

export default Home;
