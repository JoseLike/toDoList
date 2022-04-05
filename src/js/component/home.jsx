import React, { useState } from "react";

//create your first component
const Home = () => {
	const [tarea, setInputs] = useState("");
	const [lista, setLista] = useState([]);

	return (
		<div className="fondo">
			<div className="container">
				<h1 className="mx-auto">todos</h1>
				<div className="d-flex mx-auto bloc">
					<input
						type="email"
						className="form-control"
						id="entradatareas"
						value={tarea}
						onChange={(e) => {
							setInputs(e.target.value);
						}}
					/>
					<button
						type="button"
						className="btn btn-primary"
						onClick={() => {setLista([...lista, tarea]);
							setInputs("")}
						}>
						Añadir
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
