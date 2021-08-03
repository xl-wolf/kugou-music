import React, { Component } from "react"
import Header from "./component/header/header"
import Player from "./component/player/player"

export default class App extends Component {
	render() {
		return (
			<><Header /> {this.props.children} <Player /></>
		)
	}
}
