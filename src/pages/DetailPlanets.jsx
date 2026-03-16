



import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useParams, Link } from "react-router-dom"


export const DetailPlanets = () => {

    const { planetsId } = useParams()
    const { store } = useGlobalReducer();
    const planet = store.planets.find((item) => item.uid === planetsId);



    return (

        <div className="row justify-content-center">

            <div className="card " style={{ width: '22rem' }}>
                <img
                    src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/planets/${planet.uid}.jpg`}

                    alt={planet.properties.name}
                />
                <div className=" text-center">
                    <h5>{planet.properties.name}</h5>
                    <p><strong>Climate: </strong>{planet.properties.climate}  </p>
                    <p><strong>Diameter:</strong> {planet.properties.diameter}  </p>
                    <p><strong>Population:</strong> {planet.properties.population}  </p>
                </div>

                <Link to="/planets" className="btn btn-primary">Go to planets..</Link>


            </div>
        </div>


    )
}
