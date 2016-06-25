import React from "react";

import RecipeList from "./RecipeList";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { observer } from "mobx-react";

@observer
export default class Layout extends React.Component {	

	render() {
		return (
			<div>
				<Header />
				<section class="recipes">
					{this.props.children}
				</section>
				<Footer />
			</div>
		)
	}
}
