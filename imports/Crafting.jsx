import React, { Component } from 'react';
import axios from 'axios';

export default class Crafting extends Component {

	constructor(props) {
		super(props);

		this.state = {
			items: [],
			recipe: []
		}
	}

	componentDidMount() {
		const key = "54FFB9CB01695766B2F961276694BDD2";

		var asset = "http://api.steampowered.com/IEconItems_440/GetSchema/v0001/?key=" + key;

		axios.get(asset).then(function(json) {
			var items = json.data.result.items;

			this.setState({
				items: [
					items[0],
					items[3],
					items[2]
				],
				recipe: items[0]
			});
		}.bind(this));
	}

	i() {
		if (this.state.items) {
			return (
				<div className="slot">
					{
						this.state.items.map((item) => (
							<a>
								<img src={item.image_url} />
							</a>
						))
					}
				</div>
			)
		}
	}

	o() {
		if (this.state.recipe) {
			return (
				<div className="slot">
					{
						<a>
							<img src={this.state.recipe.image_url} />
							<span>{this.state.recipe.name}</span>
						</a>
					}
				</div>
			)
		}
	}

	render() {
		return (
			<div id="crafting">
				<div id="i">
					<h3>Input</h3>

					{this.i()}
				</div>

				<div id="o">
					<h3>Output</h3>

					{this.o()}
				</div>
			</div>
		)
	}
}
