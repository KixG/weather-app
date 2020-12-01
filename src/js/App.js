import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch,
	useParams
} from "react-router-dom";

import Navigation from './containers/Navigation';
import Dashboard from './containers/Dashboard';
import WeatherApp from './containers/WeatherApp';

export default function App() {
	return (
		<Router>
			<div>
				<Navigation />

				<Switch>
					<Route path="/weather-app">
						<WeatherApp />
					</Route>
					<Route path="/">
						<Dashboard />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}