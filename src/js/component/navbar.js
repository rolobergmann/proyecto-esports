import React, { Component } from "react";
import Popup from "reactjs-popup";
import {
	MDBBtn,
	MDBNavbar,
	MDBNavbarBrand,
	MDBNavbarNav,
	MDBNavItem,
	MDBNavLink,
	MDBNavbarToggler,
	MDBCollapse,
	MDBFormInline,
	MDBDropdown,
	MDBDropdownToggle,
	MDBDropdownMenu,
	MDBDropdownItem
} from "mdbreact";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";

export class Navbar extends Component {
	state = {
		isOpen: false
	};

	toggleCollapse = () => {
		this.setState({ isOpen: !this.state.isOpen });
	};

	render() {
		return (
			<MDBNavbar color="indigo" dark expand="md">
				<MDBNavLink to="/">
					<MDBNavbarBrand>
						<strong className="white-text">eTeams</strong>
					</MDBNavbarBrand>
				</MDBNavLink>
				<MDBNavbarToggler onClick={this.toggleCollapse} />
				<MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
					<MDBNavbarNav left>
						<MDBNavItem active>
							<MDBNavLink to="/">
								<a className="nav-link">Home</a>
							</MDBNavLink>
						</MDBNavItem>

						<MDBNavItem>
							<MDBNavLink to="/players">
								<a className="nav-link">Gamers</a>
							</MDBNavLink>
						</MDBNavItem>
						<MDBNavItem>
							<MDBNavLink to="/teams">
								<a className="nav-link">Teams</a>
							</MDBNavLink>
						</MDBNavItem>
					</MDBNavbarNav>
					<MDBNavbarNav right>
						<Popup trigger={<MDBBtn gradient="blue">Registrarse</MDBBtn>} modal closeOnDocumentClick>
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
											<button
												type="button"
												className="close"
												data-dismiss="modal"
												aria-label="Close">
												<span aria-hidden="true">&times;</span>
											</button>
										</div>
										<div className="modal-body mx-3">
											<div className="md-form mb-4">
												<i className="fas fa-user prefix grey-text"></i>
												<input
													type="text"
													id="orangeForm-name"
													className="form-control validate"
												/>
												<label
													data-error="wrong"
													data-success="right"
													htmlFor="orangeForm-name">
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
												<label
													data-error="wrong"
													data-success="right"
													htmlFor="orangeForm-email">
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
					</MDBNavbarNav>
				</MDBCollapse>
			</MDBNavbar>
		);
	}
}
