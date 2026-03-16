import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useParams, Link } from "react-router-dom"


export const DetailVehicles = () => {

    const { vehiclesId } = useParams()
    const { store } = useGlobalReducer();
    const vehicle = store.vehicles.find((item) => item.uid === vehiclesId);



    return (

        <div className="row justify-content-center">

            <div className="card " style={{ width: '22rem' }}>
                <img
                    src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/vehicles/${vehicle.uid}.jpg`}

                    alt={vehicle.properties.name}
                />
                <div className=" text-center">
                    <h5>{vehicle.properties.name}</h5>
                    <p> <strong>Model:</strong> {vehicle.properties.model}  </p>
                    <p><strong>Manufacturer:</strong>{vehicle.properties.manufacturer}  </p>
                    <p><strong>Consumables:</strong> {vehicle.properties.consumables}  </p>
                </div>

                <Link to="/vehicles" className="btn btn-primary">Go to vehicles..</Link>


            </div>
        </div>


    )
}