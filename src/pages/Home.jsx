import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	useEffect(() => {
		console.log("llamar api sw")
	}, [])

	return (
		<div className="container">
			<div>
				<h1 className="text-danger">characters</h1>
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
													<i class="fa-solid fa-heart fs-2 d-flex justify-content-end"></i>
											
											
										</div>
								</div>



								// 	<div key={item._id} className="border border-seconary">
								//    <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/people/${item.uid}.jpg`} alt="" className="w-100" />
								//    <h1>{item.properties.name} </h1>
								//     </div>
							)
						})
					}


				</div>
			</div>

		</div>
	);
}; 