import React, { useState } from "react";
import Tarea from "/workspace/toDoList/src/js/component/tarea.jsx";

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

	const validacion = () => {
		if (tarea.trim().length === 0) {
			alert("Tarea no valida (Vacia)");
		} else if (lista.includes(tarea.trim()) === true) {
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
	const clickDelete = (indextarea) => {
		setLista(() => lista.filter((value, index) => index !== indextarea));
	};

	return (
		<div className="d-flex flex-column container align-items-center mx-auto">
			<h1 className="titulo justify-content-center">todos</h1>
			<div className="d-table-row">
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
						<Tarea
							key={index}
							items={items}
							delete={() => {
								clickDelete(index);
							}}
						/>
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
	);
};

export default Home;
