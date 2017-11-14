import React, { Component } from 'react';
import axios from 'axios';

export default class Loadout extends Component {
	constructor(props) {
		super(props);

		this.state = {
			tab: {
				cosmetic: {
					letter: [
						"A",
						"B",
						"C",
						"D",
						"E",
						"F",
						"G",
						"H",
						"M",
						"S"
					],
					slot: {
					}
				},
				weapon: {
					letter: [
						"A",
						"B",
						"C",
						"D",
						"E",
						"F",
						"G",
						"H"
					],
					slot: {
					}
				},
				taunt: {
					letter: [
						"A",
						"B",
						"C",
						"D",
						"E",
						"F",
						"G",
						"H"
					],
					slot: 4
				}
			},
			img: {
				cosmetic: {
				},
				weapon: {
				},
				taunt: {
				}
			}
		}
	}

	componentDidMount() {
		const key = "54FFB9CB01695766B2F961276694BDD2";

		var asset = "http://api.steampowered.com/IEconItems_440/GetSchema/v0001/?key=" + key;

		axios.get(asset).then(function(json) {
			var item = json.data.result.items;

			this.setState({
				img: {
					cosmetic: {
						head: item[74].image_url,
						torso1: item[118].image_url,
						torso2:	item[104].image_url
					},
					weapon: {
						prim: item[2401].image_url,
						sec: item[74].image_url,
						melee: item[74].image_url,
						action: item[74].image_url
					},
					taunt: {
						0: item[483].image_url,
						1: item[483].image_url,
						2: item[483].image_url,
						3: item[483].image_url,
						4: item[483].image_url,
						5: item[483].image_url,
						6: item[483].image_url,
						7: item[483].image_url
					}
				}
			});
		}.bind(this));
	}

	class() {
		return (
			[
				"scout",
				"soldier",
				"pyro",
				"demoman",
				"engineer",
				"heavy",
				"medic",
				"sniper",
				"spy"
			].map((cl, i) => (
				<a>
					<img src={"/img/icon/" + cl + ".svg"} className={i == 7 ? "active" : null} />
				</a>
			))
		)
	}

	tab() {
		return (
			Object.keys(this.state.tab).map((type) => (
				<div className="tab">
					{this.state.tab[type].letter.map((letter) => (
						<a>{letter}</a>
					))}

					<a>+</a>
				</div>
			))
		)
	}

	slot() {
		const key = "54FFB9CB01695766B2F961276694BDD2";

		var asset = "http://api.steampowered.com/IEconItems_440/GetSchema/v0001/?key=" + key;

		return (
			Object.keys(this.state.img).map((type) =>
				<div className="slot">
					{
						Object.keys(this.state.img[type]).map((id) =>
							<a>
								<img src={this.state.img[type][id]} />
							</a>
						)
					}
				</div>
			)
		)
	}

	render() {
		return (
			<div id="loadout">
				<div className="head">
					{this.class()}
				</div>

				<div id="team">
					<div id="tog">
						<a className="active" id="red" />
						<a id="blu" />
					</div>
				</div>

				<div id="scape">
					{this.tab()[0]}
					{this.slot()[0]}

					{this.slot()[1]}
					{this.tab()[1]}

					<img src="/img/loadout.png" />

					{this.slot()[2]}
					{this.tab()[2]}
				</div>
			</div>
		)
	}
}
