import React, { Component } from "react";

export const Footer = () => (
	<footer className="page-footer font-small pt-4">
		<div className="container-fluid text-center">
			<div className="row">
				<div className="col-md-4 col-lg-4">
					<ul className="list-unstyled">
						<li>
							<a href="#!">Tu Perfil</a>
						</li>
						<li>
							<a href="#!">Equipos</a>
						</li>
						<li>
							<a href="#!">Noticias</a>
						</li>
						<li>
							<a href="#!">Avisos Posiciones</a>
						</li>
					</ul>
				</div>

				<div className="col-md-4 col-lg-4">
					<h5 className="text-uppercase">Visítanos en nuestras Redes Sociales</h5>
					<br></br>
					<a className="fb-ic">
						<i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
					</a>
					<a className="tw-ic">
						<i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
					</a>
					<a className="ins-ic">
						<i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
					</a>
				</div>
				<div className="col-md-4 col-lg-4">
					<ul className="list-unstyled">
						<li>
							<a href="#!">Quienes Somos</a>
						</li>
						<li>
							<a href="#!">FAQ</a>
						</li>
						<li>
							<a href="#!">Contactenos</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div className="footer-copyright text-center py-3">
			© 2019 Copyright:
			<a href="https://mdbootstrap.com/education/bootstrap/"> BF Developers</a>
		</div>
	</footer>
);
