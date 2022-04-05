import React, {useState} from "react";

//create your first component
const Home = () => {
	const [inputs,setInputs]= useState("")
	const [lista,setLista]=useState([])

	return (
		<div className="fondo">
			<div className="container">
				<h1 className="mx-auto">todos</h1>
				<div className="mx-auto bloc">
					<input
						type="email"
						className="form-control"
						id="entradatareas"
						value={inputs}
						onChange={(e)=>{setInputs(e.target.value)}}
					/>
					<button type="button" className="btn btn-primary" onClick={()=>setLista([...lista],{nuevatarea:inputs})}>Añadir</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
