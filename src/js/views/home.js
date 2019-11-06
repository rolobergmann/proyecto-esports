import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Carrusel } from "../component/carrusel";
import { Multimedia } from "../component/multimedia";
import { NewsFeed } from "../component/news-feed";

export const Home = () => (
	<div className=" container text-center mt-5">
		<div>
			<Carrusel />
		</div>
		<Multimedia />
		<NewsFeed />
	</div>
);
