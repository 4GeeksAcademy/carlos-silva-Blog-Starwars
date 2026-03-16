import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer()

   const removeFav= (uid) => {
        dispatch({ type: "REMOVE_FAV", payload: uid });
    };

	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">STAR WARS</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">

						<li className="nav-item ">
							<NavLink className={({ isActive }) => `nav-link ${isActive & "my-active"}`} to="/characters">CHARACTERS</NavLink>
						</li>
						<li className="nav-item ">
							<NavLink className={({ isActive }) => `nav-link ${isActive & "my-active"}`} to="/vehicles">VEHICLES</NavLink>
						</li>
						<li className="nav-item ">
							<NavLink className={({ isActive }) => ` nav-link ${isActive & "my-active"}`} to="/planets">PLANETS</NavLink>
						</li>

					</ul>

				</div>
				<div className="dropdown">
					<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites ({store.favorites.length})
					</button>
					<ul className="dropdown-menu dropdown-menu-end">
						{
							store.favorites.map((item) => (
								<li key={`fav-${item.uid}`}>
									<a className="dropdown-item" href="#">{item.properties.name} </a>
									<button
										className="btn btn-outline-danger btn-sm border-0"
										 onClick={() => removeFav(item.uid)}
									>
										<i className="fa-solid fa-trash"></i>
									</button>

								</li>

							))
						}

					</ul>
				</div>
			</div>

		</nav>

	);
};