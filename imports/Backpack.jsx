import React, { Component } from 'react';

import Ctrl from "../imports/Ctrl.jsx";
import Item from "../imports/Item.jsx";

export default class Backpack extends Component {
	constructor(props) {
		super(props);

		this.state = {
			p: 0,
			page: [
				"The showcase",
				"Relics",
				"Names",
				"#99",
				"#99",
				"Crafted",
				"#99",
				"#99",
				"#99",
				"#99",
				"#99",
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				"Achievement",
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				"For sale"
			]
		};
	}

	select(i, props) {
		this.setState({
			active: i
		});
	}

	flip(i, props) {
		this.setState({
			p: i
		});
	}

	page() {
		return (
			<div id="page">
				{this.state.page.map((name, i) => (
					<a index={i} onClick={this.flip.bind(this, i, this.props)} className={i == this.state.p ? "active" : null}>{(i + 1)}</a>
				))}
			</div>
		)
	}

	render() {
		return (
			<div className="scr">
				<Ctrl />

				<Item p={this.state.p} />

				{this.page()}
			</div>
		)
	}
}
