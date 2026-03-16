import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export const Navbar = () => {

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
							<NavLink className={({ isActive }) =>`nav-link ${isActive & "my-active"}`} to="/characters">CHARACTERS</NavLink>
						</li>
						<li className="nav-item ">
							<NavLink className={({ isActive }) =>`nav-link ${isActive & "my-active" }`} to="/vehicles">VEHICLES</NavLink>
						</li>
						<li className="nav-item ">
							<NavLink className={({isActive}) =>` nav-link ${isActive & "my-active"}`} to="/planets">PLANETS</NavLink>
						</li>

					</ul>
					
				</div>
				<div className="dropdown">
						<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
						</button>
						<ul className="dropdown-menu ">
							<li><a className="dropdown-item" href="#">Action</a></li>
							<li><a className="dropdown-item" href="#">Another action</a></li>
							<li><a className="dropdown-item" href="#">Something else here</a></li>
						</ul>
					</div>
			</div>
			
		</nav>





		// <nav classNameName="navbar navbar-light bg-light">
		// 	<div classNameName="container">
		// 		<Link to="/">
		// 			<span classNameName="navbar-brand mb-0 h1">STAR WARS</span>
		// 		</Link>


		// 		<div classNameName="dropdown">
		// 			<button classNameName="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
		// 				Favorites
		// 			</button>
		// 			<ul classNameName="dropdown-menu">
		// 				<li><a classNameName="dropdown-item" href="#">Action</a></li>
		// 				<li><a classNameName="dropdown-item" href="#">Another action</a></li>
		// 				<li><a classNameName="dropdown-item" href="#">Something else here</a></li>
		// 			</ul>
		// 		</div>



		// 	</div>
		// </nav>
	);
};