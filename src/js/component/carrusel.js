import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

export class Carrusel extends React.Component {
	render() {
		return (
			<div>
				<Carousel>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://cdn.wccftech.com/wp-content/uploads/2019/11/WCCFoverwatch22.jpg"
							alt="First slide"
						/>
						<Carousel.Caption>
							<Link to="/demo">
								<h2>Avisos</h2>
							</Link>
							<h3>Revisa todos los avisos de equipos buscando jugadores!</h3>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://images.tweaktown.com/news/6/8/68560_02_check-first-4k-screenshots-diablo-4_full.jpg"
							alt="Second slide"
						/>

						<Carousel.Caption>
							<h3>Equipos</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://cdn.wccftech.com/wp-content/uploads/2019/11/WCCFoverwatch22.jpg"
							alt="Third slide"
						/>

						<Carousel.Caption>
							<h3>Noticias</h3>
							<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>
		);
	}
}
