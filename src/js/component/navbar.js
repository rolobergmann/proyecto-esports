import React from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import ReactModal from "react-modal";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">eTeams</span>
			</Link>
			<div className="container-fluid">
				<div className="collapse navbar-collapse">
					<Link to="/">
						<a className="nav-link">Home</a>
					</Link>
					<Link to="/demo">
						<a className="nav-link">Tu Perfil</a>
					</Link>
					<Link to="/demo">
						<a className="nav-link">Area Clubes</a>
					</Link>
					<Link to="/demo">
						<a className="nav-link">Avisos</a>
					</Link>
				</div>
				<form className="form-inline my-2 my-lg-0">
					<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
					<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
						Search
					</button>
				</form>
				<div>
					<a className="nav-link btn btn-primary" data-toggle="modal" data-target="#login-modal">
						Login
					</a>
				</div>
			</div>
		</nav>
	);
};

<div
	className="modal fade"
	id="login-modal"
	tabIndex="-1"
	role="dialog"
	aria-labelledby="login-modal"
	aria-hidden="true">
	<div className="modal-dialog" role="document">
		<div className="modal-content">
			<div className="modal-header">
				<h5 className="modal-title" id="login-modal">
					Modal title
				</h5>
				<button type="button" className="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div className="modal-body">
				<span>Modal para login</span>
			</div>
			<div className="modal-footer">
				<button type="button" className="btn btn-secondary" data-dismiss="modal">
					Close
				</button>
				<button type="button" className="btn btn-primary">
					Save changes
				</button>
			</div>
		</div>
	</div>
</div>;
