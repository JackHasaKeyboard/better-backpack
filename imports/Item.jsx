import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';

export default class Item extends Component {
	constructor(props) {
		super(props);

		this.state = {
			active: 0,
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

	componentDidMount() {
		var id = "76561198065277457";
		const key = "54FFB9CB01695766B2F961276694BDD2";

		var inv = "http://steamcommunity.com/inventory/" + id + "/440/2?l=english&count=200";

		axios.get(inv).then(function(json) {
			this.setState({
				item: json.data.descriptions,
			});
		}.bind(this));
	}

	select(i, props) {
		this.setState({
			active: i
		});
	}

	head() {
		return (
			<h3 className="head">
				<span>Page {this.state.p + 1}</span>
				<span id="name">"{this.state.page[this.state.p]}"</span>
			</h3>
		)
	}

	item() {
		const pageSize = 50;

		var p = this.state.p;

		var floor = p * pageSize;
		var roof = (p * pageSize) + pageSize;

		if (this.state.item) {
			var item = this.state.item.slice(floor, roof);

			return (
				<div>
					{this.head()}

					<div id="item">
						{item.map((item, i) => (
							<a index={i} onClick={this.select.bind(this, i, this.props)} className={i == this.state.active ? "active" : null}>
								<img src={"http://steamcommunity-a.akamaihd.net/economy/image/" + item.icon_url} />
							</a>
						))}
					</div>
				</div>
			)
		}
	}

	disp() {
		if (this.state.item) {
			var showCase = this.state.item[this.state.active];

			var desc = (
				<ul>
					{showCase.descriptions.map((description) => (
						<li style={{color: "#" + description.color}}>{description.value}</li>
					))}
				</ul>
			)

			var tag = showCase.tags.map((tag) => (
				<h5>
					<span>{tag.category}: </span>
					<span>{tag.localized_tag_name}</span>
				</h5>
			))

			return (
				<div id="disp">
					<h3>{showCase.name}</h3>

					<img src={"http://steamcommunity-a.akamaihd.net/economy/image/" + showCase.icon_url} />

					{desc}

					{tag}
				</div>
			)
		}
	}

	render() {
		return (
			<div id="body">
				{this.item()}

				{this.disp()}
			</div>
		)
	}
}
