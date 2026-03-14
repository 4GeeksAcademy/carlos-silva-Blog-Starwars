import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";



export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	// function addFav(fav){
	// 	console.log(fav)
	// 	dispatch({type: "SET_FAV", payload: fav})
	// }

	useEffect(() => {
		console.log("llamar api sw")
	
	}, [])

	return (
		<div className="container">
			<div>
				<h1 className="text-danger">Characters</h1>
				<div className="border border-danger d-flex my-carousel">
					{
						store.people?.map((item) => {
							return (
								<div className="card"  style={{ width: '18rem' }}>
									<img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/people/${item.uid}.jpg`} className="card-img-top" alt="..."/>
										<div className="card-body">
											<h5 className="card-title">{item.properties.name}</h5>
											<p>Eye Color: {item.properties.eye_color}  </p>
											<p>Hair Color: {item.properties.birth_year}  </p>
												<p>Gender: {item.properties.gender}  </p>
													<a href="#" className="btn btn-primary">Go somewhere</a>
													<button 
													className="btn btn-danger"
													onClick={() => addFav(item)}
													><i className="fa-solid fa-heart fs-2 d-flex justify-content-end"></i>
													</button>
													
								      </div>
								</div>
							)
						})
					}


				</div>
			</div>
			
			<div>
				<h1 className="text-danger">Vehicles</h1>
				<div className="border border-danger d-flex my-carousel">
					{
						store.vehicles?.map((item) => {
							return (
								<div className="card"  style={{ width: '18rem' }}>
									<img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/vehicles/${item.uid}.jpg`} className="card-img-top" alt="..."/>
										<div className="card-body">
											<h5 className="card-title">{item.properties.name}</h5>
											<p>Model: {item.properties.model}  </p>
											<p>Manufacturer: {item.properties.manufacturer}  </p>
												<p>Consumables: {item.properties.consumables}  </p>
													<a href="#" className="btn btn-primary">Go somewhere</a>
													<i className="fa-solid fa-heart fs-2 d-flex justify-content-end"></i>
								      </div>
								</div>
							)
						})
					}


				</div>
			</div>

			<div>
				<h1 className="text-danger">Planets</h1>
				<div className="border border-danger d-flex my-carousel">
					{
						store.planets?.map((item) => {
							return (
								<div className="card"  style={{ width: '18rem' }}>
									<img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/planets/${item.uid}.jpg`} className="card-img-top" alt="..."/>
										<div className="card-body">
											<h5 className="card-title">{item.properties.name}</h5>
											<p>Climate: {item.properties.climate}  </p>
											<p>Diameter: {item.properties.diameter}  </p>
												<p>Population: {item.properties.population}  </p>
													<a href="#" className="btn btn-primary">Go somewhere</a>
													<i className="fa-solid fa-heart fs-2 d-flex justify-content-end"></i>
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