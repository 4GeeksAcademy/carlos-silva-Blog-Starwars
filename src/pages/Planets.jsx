import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";


export const Planets = () => {

    const { store, dispatch } = useGlobalReducer()
    function addFav(fav) {
        console.log(fav)
        dispatch({ type: "SET_FAV", payload: fav})
    }
    return (
        <div className="container">
            <h1 className="text-dark d-flex justify-content-center align-items-center">Planets: details and favorites items</h1>
            <div className="row">

                {
                    store.planets?.map((item) => {
                        return (
                            <div className="col-12 col-sm-6 col-md-4  mb-2">
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/planets/${item.uid}.jpg`} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.properties.name}</h5>
                                        <p><strong>Climate: </strong>{item.properties.climate}  </p>
                                        <p><strong>Diameter:</strong> {item.properties.diameter}  </p>
                                        <p><strong>Population:</strong> {item.properties.population}  </p>
                                        <div className=" d-flex justify-content-between align-items-center">
                                            <Link to={`/planets/${item.uid}`} className="btn btn-primary">Go to details</Link>
                                            <button
                                                className="btn btn-danger"
                                                onClick={() => addFav(item)}
                                            ><i className="fa-solid fa-heart fs-2 "></i>
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )
                    })
                }


            </div>




        </div>

    );
}; 