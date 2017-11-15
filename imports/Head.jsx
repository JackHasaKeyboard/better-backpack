import React, { Component } from 'react';
import axios from 'axios';

export default class Upper extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: null,
			pic: null,
			itemsCount: null
		};
	}

	componentDidMount() {
		var id = "76561198065277457";
		const key = "54FFB9CB01695766B2F961276694BDD2";

		var prof = "http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=" + key + "&steamids=" + id;

		axios.get(prof).then(function(json) {
			var user = json.data.response.players[0];

			this.setState({
				name: user.personaname,
				pic: user.avatarfull
			});
		}.bind(this));


		var inv = "http://steamcommunity.com/inventory/" + id + "/440/2?l=english&count=25";

		axios.get(inv).then(function(json) {
			this.setState({
				itemCount: json.data.total_inventory_count,
			});
		}.bind(this));
	}

	render() {
		return (
			<div id="upper">
				<div id="pic">
					<img src={this.state.pic} />
				</div>

				<div id="info">
					<h1>
						{this.state.name}
					</h1>
				</div>
			</div>
		)
	}
}
