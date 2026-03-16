import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";



export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	function addFav(fav) {
		console.log(fav)
		dispatch({ type: "SET_FAV", payload: fav })
	}

	
	return (
		<div className="container">
			<div>
				<h1 className="text-danger">Characters</h1>
				<div className=" d-flex my-carousel">
					{
						store.people?.map((item) => {
							return (
								<div className="card" style={{ width: '18rem' }}>
									<img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/people/${item.uid}.jpg`} className="card-img-top" alt="..." />
									<div className="card-body">
										<h5 className="card-title">{item.properties.name}</h5>
										<p>Eye Color: {item.properties.eye_color}  </p>
										<p>Hair Color: {item.properties.birth_year}  </p>
										<p>Gender: {item.properties.gender}  </p>
										<Link to="/characters" className="btn btn-primary">Go to characters..</Link>
									

									</div>
								</div>
							)
						})
					}


				</div>
			</div>

			<div>
				<h1 className="text-danger">Vehicles</h1>
				<div className=" d-flex my-carousel">
					{
						store.vehicles?.map((item) => {
							return (
								<div className="card" style={{ width: '18rem' }}>
									<img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/vehicles/${item.uid}.jpg`} className="card-img-top" alt="..." />
									<div className="card-body">
										<h5 className="card-title">{item.properties.name}</h5>
										<p>Model: {item.properties.model}  </p>
										<p>Manufacturer: {item.properties.manufacturer}  </p>
										<p>Consumables: {item.properties.consumables}  </p>
										<Link to="/vehicles" className="btn btn-primary">Go to vehicles..</Link>


									</div>
								</div>
							)
						})
					}


				</div>
			</div>

			<div>
				<h1 className="text-danger">Planets</h1>
				<div className=" d-flex my-carousel">
					{
						store.planets?.map((item) => {
							return (
								<div className="card" style={{ width: '18rem' }}>
									<img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/planets/${item.uid}.jpg`} className="card-img-top" alt="..." />
									<div className="card-body">
										<h5 className="card-title">{item.properties.name}</h5>
										<p>Climate: {item.properties.climate}  </p>
										<p>Diameter: {item.properties.diameter}  </p>
										<p>Population: {item.properties.population}  </p>
										<Link to="/planets" className="btn btn-primary">Go to planets..</Link>

									</div>
								</div>
							)
						})
					}


				</div>
			</div>

		</div>
	);
}; 