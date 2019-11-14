import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Players } from "./views/players";
import { Teams } from "./views/teams";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter>
				<ScrollToTop>
					<div>
						<Navbar />
						<div className="container-fluid">
							<Switch>
								<Route exact path="/" component={Home} />
								<Route path="/players" component={Players} />
								<Route path="/teams" component={Teams} />
								<Route path="/single/:theid" component={Single} />
								<Route render={() => <h1>Not found!</h1>} />
							</Switch>
						</div>
						<Footer />
					</div>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
