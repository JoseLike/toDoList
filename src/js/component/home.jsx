import { element } from "prop-types";
import React, { useState } from "react";

//create your first component
const Home = () => {
	const [tarea, setInputs] = useState("");
	const [lista, setLista] = useState([]);
	const pendiente = lista.length
	if(pendiente===0){pendiente="No tasks, add a task"}

	return (
		<body className="fondo">
			<div className="container">
				<h1 className="mx-auto">todos</h1>
				<div className="d-flex mx-auto bloc">
					<input
						type="email"
						className="basico"
						id="entradatareas"
						value={tarea}
						onChange={(e) => {
							setInputs(e.target.value);
						}}
					/>
					<button
						type="button"
						className="btn btn-primary"
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
					<div className="basico" key={index}>
						{items}
					</div>
				);
			})}
			<div className="bloc basico contador">
				{pendiente}
			</div>
		</body>
	);
};

export default Home;
