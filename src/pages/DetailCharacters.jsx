

import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import {  useParams, Link } from "react-router-dom"


export const DetailCharacters = () => {
   
    const {characterId} = useParams()
    const {store} = useGlobalReducer();
    const character = store.people.find((item) => item.uid === characterId);



    return (

        <div className="row justify-content-center">

            <div className="card " style={{ width: '22rem' }}>
                <img
                    src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/people/${character.uid}.jpg`}

                    alt={character.properties.name}
                />
                <div className=" text-center">
                    <h5>{character.properties.name}</h5>
                    <p ><strong>Eye Color:</strong> {character.properties.eye_color}</p>
                    <p ><strong>Birth Year:</strong> {character.properties.birth_year}</p>
                    <p ><strong>Gender:</strong> {character.properties.gender}</p>
                </div>
              
              <Link to="/characters" className="btn btn-primary">Go to characters..</Link>
                   
               
            </div>
        </div>


    )
}

