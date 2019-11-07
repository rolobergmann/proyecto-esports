import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Avisos } from "./views/avisos";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Sidebar } from "./component/side-bar";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter>
				<ScrollToTop>
					<Navbar />
					<div className=" container-fluid row">
						<div className="col-9 p-0 pl-4">
							<Switch>
								<Route exact path="/" component={Home} />
								<Route path="/demo" component={Demo} />
								<Route path="/avisos" component={Avisos} />
								<Route path="/single/:theid" component={Single} />
								<Route render={() => <h1>Not found!</h1>} />
							</Switch>
						</div>
						<div className="col-3 p-0 pr-0">
							<Sidebar />
						</div>
					</div>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
