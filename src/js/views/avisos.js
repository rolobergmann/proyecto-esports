import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";

import Owlogo from "../../img/Overwatch.png";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Avisos = () => {
	const { store, actions } = useContext(Context);

	return (
		<MDBContainer>
			<MDBListGroup style={{ width: "100%" }}>
				<MDBListGroupItem hover href="#">
					<div className="d-flex w-100 justify-content-between">
						<div>
							<img className="d-block" src={Owlogo} />
						</div>
						<h5 className="mb-1">Gladiadores: Buscamos Tanque para Overwatch</h5>
						<small>3 days ago</small>
					</div>
					<p className="mb-1">Equipo Gladiadores busca tanque. Se dara preferencia a main tanks.</p>
					<small>Se reciben postulantes con 2000SR hacia arriba.</small>
				</MDBListGroupItem>
				<MDBListGroupItem hover href="#">
					<div className="d-flex w-100 justify-content-between">
						<h5 className="mb-1">List group item heading</h5>
						<small className="text-muted">3 days ago</small>
					</div>
					<p className="mb-1">
						Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
					</p>
					<small className="text-muted">Donec id elit non mi porta.</small>
				</MDBListGroupItem>
				<MDBListGroupItem hover href="#">
					<div className="d-flex w-100 justify-content-between">
						<h5 className="mb-1">List group item heading</h5>
						<small className="text-muted">3 days ago</small>
					</div>
					<p className="mb-1">
						Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
					</p>
					<small className="text-muted">Donec id elit non mi porta.</small>
				</MDBListGroupItem>
			</MDBListGroup>
		</MDBContainer>
	);
};
