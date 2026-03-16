



 import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
 import { Link } from "react-router-dom";

 export const Characters = () => {

   const { store, dispatch } = useGlobalReducer()
   function addFav(fav) {
		console.log(fav)
		dispatch({ type: "SET_FAV", payload: fav })
	}
    return (
         <div className="container">
             <h1 className="text-dark d-flex justify-content-center align-items-center">Characters: details and add favorites items</h1>
            <div className="row">
               {
                    store.people?.map((item) => {
                        return (
                            <div className="col-12 col-sm-6 col-md-4  mb-2">
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/people/${item.uid}.jpg`} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.properties.name}</h5>
                                        <p><strong>Eye Color:</strong> {item.properties.eye_color}  </p>
                                        <p><strong>Hair Color:</strong> {item.properties.birth_year}  </p>
                                        <p><strong>Gender:</strong> {item.properties.gender}  </p>
                                       <div className=" d-flex justify-content-between align-items-center">
                                            <Link to={`/characters/${item.uid}`} className="btn btn-primary">Go to details</Link>
                                            <button
                                                className="btn btn-danger"
                                                onClick={()=> addFav(item)}
                                            > <i className="fa-solid fa-heart fs-2 "></i> 
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