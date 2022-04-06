import { element } from "prop-types";
import React, { useState } from "react";

//create your first component
const Home = () => {
	const [tarea, setInputs] = useState("");
	const [lista, setLista] = useState([]);
	const [display, setDisplay] = useState("none");
	var pendiente = lista.length;
	if (pendiente === 0) {
		pendiente = "No tasks, add a task";
	} else {
		pendiente = lista.length + " items left";
	}

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			setLista([...lista, tarea]);
			setInputs("");
		}
	};

	const handleMouseOver = () => {
		setDisplay("block");
	};

	const handleMouseOut = () => {
		setDisplay("none");
	};

	return (
		<div className="fondo">
			<div className="container">
				<h1 className="row mx-auto">todos</h1>
				<div className="d-table-row mx-auto">
					<input
						className="shadow bas"
						id="entradatareas"
						value={tarea}
						onKeyDown={handleKeyDown}
						onChange={(e) => {
							setInputs(e.target.value);
						}}
					/>
					{lista.map((items, index) => {
						return (
							<div className="d-flex tareas">
								<div
									className="shadow bas tarea border border-secondary ps-5"
									key={index}
									onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
									{items}
									<button
										className="boton float-end"
										style={{ display: display }}>
										X
									</button>
								</div>
							</div>
						);
					})}
					<div className="shadow basico contador border border-secondary ps-2">
						{pendiente}
					</div>
					<div className="shadow basico1 border border-dark mx-auto"></div>
					<div className="shadow basico2 border border-secondary mx-auto"></div>
					<div className="shadow basico3 border border-secondary mx-auto"></div>
				</div>
			</div>
		</div>
	);
};

export default Home;
