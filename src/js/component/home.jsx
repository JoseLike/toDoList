import React, { useState } from "react";

//create your first component
const Home = () => {
	const [tarea, setInputs] = useState("");
	const [lista, setLista] = useState([]);
	const [display, setDisplay] = useState(false);
	var pendiente = lista.length;
	if (pendiente === 0) {
		pendiente = "No tasks, add a task";
	} else {
		pendiente = lista.length + " items left";
	}

	const validacion = () => {
		if (tarea.trim().length === 0) {
			alert("Tarea no valida (Vacia)");
		} else if (lista.includes(tarea) === true) {
			alert("Tarea no valida (Repetida)");
		} else {
			setLista([...lista, tarea]);
			setInputs("");
		}
	};

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			validacion();
		}
	};
	const clickDelete = (index) => {
		lista.splice(index, 1);
	};

	const handleMouseOver = () => {
		setDisplay(true);
	};

	const handleMouseOut = () => {
		setDisplay(false);
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
							<div className="d-flex tareas" key={index}>
								<div
									className="shadow bas tarea border border-secondary ps-5"
									onMouseOver={handleMouseOver}
									onMouseOut={handleMouseOut}>
									{items}
									<button
										className={
											display
												? "d-block boton float-end"
												: "d-none boton float-end"
										}
										onClick={() => {
											clickDelete(index);
										}}>
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
