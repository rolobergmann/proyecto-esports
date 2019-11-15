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
import { Login } from "./login";

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
						<Login />
					</MDBNavbarNav>
				</MDBCollapse>
			</MDBNavbar>
		);
	}
}
