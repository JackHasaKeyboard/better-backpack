import React, { Component } from 'react';
import axios from 'axios';

export default class Crafting extends Component {

	constructor(props) {
		super(props);

		this.state = {
		}
	}

	componentDidMount() {
		const key = "54FFB9CB01695766B2F961276694BDD2";

		var asset = "http://api.steampowered.com/IEconItems_440/GetSchema/v0001/?key=" + key;

		axios.get(asset).then(function(json) {
			var items = json.data.result.items;

			var equip = {
				"The Chargin' Targe": "http://media.steampowered.com/apps/440/icons/c_targe.2f2c6d5e62347479380104bed97544f768532cef.png",
				"The Pain Train": "http://media.steampowered.com/apps/440/icons/c_paintrain.404e9f91bbdac2b9aa50f2354ec6904cc942bb8c.png",
				"The Persian Persuader": "http://media.steampowered.com/apps/440/icons/c_demo_sultan_sword.e14eafeb8583215a20d48e52d46d1bf1ff885ff2.png"
			};

			var recipe = items.filter(function(item) {
				return item.name == "The Pain Train"
			});

			this.setState({
				i: equip,
				o: recipe
			});
		}.bind(this));
	}

	i() {
		if (this.state.i) {
			return (
				<div className="slot">
					{
						Object.keys(this.state.i).map((name) => (
							<a>
								<img src={this.state.i[name]} />
							</a>
						))
					}
				</div>
			)
		}
	}

	o() {
		if (this.state.o) {
			return (
				<div className="slot">
					<a>
						{this.state.o.image_url}
					</a>
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

					<input value="class tok" type="" />

					<div className="highLight">
						Dynamic
					</div>

					{this.o()}
				</div>
			</div>
		)
	}
}
