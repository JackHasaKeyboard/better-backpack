import React, { Component } from 'react';

export default class Nav extends Component {
	render() {
		return (
			<div id="nav">
				<a href="backpack"><h3>Backpack</h3></a>
				<a href="loadout"><h3>Loadout</h3></a>
				<a href="crafting"><h3>Crafting</h3></a>
			</div>
		)
	}
}
