
import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";



export const Vehicles = () => {

    const { store, dispatch } = useGlobalReducer()
    useEffect(() => {
        console.log("llamar api sw")

    }, [])
    return (
        <div className="container">
            <h1 className="text-dark d-flex justify-content-center align-items-center">Vehicles: details and favorites items</h1>
            <div className="row">


                {
                    store.vehicles?.map((item) => {
                        return (
                            <div className="col-12 col-sm-6 col-md-4  mb-2">
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/vehicles/${item.uid}.jpg`} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.properties.name}</h5>
                                        <p>Model: {item.properties.model}  </p>
                                        <p>Manufacturer: {item.properties.manufacturer}  </p>
                                        <p>Consumables: {item.properties.consumables}  </p>
                                        <div className=" d-flex justify-content-between align-items-center">
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
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