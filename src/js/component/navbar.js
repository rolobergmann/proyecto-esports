import React from "react";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";

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
					<Link to="/avisos">
						<a className="nav-link">Avisos</a>
					</Link>
				</div>
				<form className="form-inline my-2 my-lg-0">
					<input className="form-control mr-sm-2" type="search" placeHolder="Search" aria-label="Search" />
					<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
						Search
					</button>
				</form>
				<div>
					<Popup trigger={<button className="button"> Register </button>} modal closeOnDocumentClick>
						<div
							className="modal-fade"
							id="modalRegisterForm"
							tabIndex="-1"
							role="dialog"
							aria-labelledby="myModalLabel"
							aria-hidden="true">
							<div className="modal-dialog" role="document">
								<div className="modal-content">
									<div className="modal-header text-center">
										<h4 className="modal-title w-100 font-weight-bold">Sign up</h4>
										<button type="button" className="close" data-dismiss="modal" aria-label="Close">
											<span aria-hidden="true">&times;</span>
										</button>
									</div>
									<div className="modal-body mx-3">
										<div className="md-form mb-4">
											<i className="fas fa-user prefix grey-text"></i>
											<input type="text" id="orangeForm-name" className="form-control validate" />
											<label data-error="wrong" data-success="right" htmlFor="orangeForm-name">
												Your name
											</label>
										</div>
										<div className="md-form mb-4">
											<i className="fas fa-envelope prefix grey-text"></i>
											<input
												type="email"
												id="orangeForm-email"
												className="form-control validate"
											/>
											<label data-error="wrong" data-success="right" htmlFor="orangeForm-email">
												Your email
											</label>
										</div>

										<div className="md-form mb-4">
											<i className="fas fa-lock prefix grey-text"></i>
											<input
												type="password"
												id="orangeForm-pass"
												className="form-control validate"
												placeholder="Your password"
											/>

											<label
												data-error="wrong"
												data-success="right"
												htmlFor="orangeForm-pass"></label>
										</div>
									</div>
									<div className="modal-footer d-flex justify-content-center">
										<button className="btn btn-deep-orange">Sign up</button>
									</div>
								</div>
							</div>
						</div>
					</Popup>
				</div>
			</div>
		</nav>
	);
};
