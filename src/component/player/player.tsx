import React, { Component } from "react"
import "./player.scss"
import playerFace from "../../static/images/default.png"

interface IProps {
	direction: string
}
export default class player extends Component<IProps> {
	state = {
		isAct: true,
		isPaused: true
	}
	render() {
		const { isAct, isPaused } = this.state
		const { direction } = this.props
		return (
			<div className="player">
				<div className={isAct ? `player_control player_control_act ${direction}` : `player_control ${direction}`} onClick={this.play}></div>
				<div className={isAct ? `player_panel act ${direction}` : `player_panel ${direction}`}>
					<div className="song_face">
						<img src={playerFace} alt="" />
					</div>
					<div className="player_tool">
						<div className="player_last" onClick={this.lastSong}></div>
						<div className={`${isPaused ? "players_paused" : "players_play"}`} onClick={this.startOrStopAudio}></div>
						<div className="player_next" onClick={this.nextSong}></div>
					</div>
				</div>
			</div>
		)
	}
	play = () => {
		this.setState({
			isAct: !this.state.isAct
		})
	}
	startOrStopAudio = () => {
		this.setState({
			isPaused: !this.state.isPaused
		})
	}
	nextSong = () => {
		console.log("nextSong")
	}
	lastSong = () => {
		console.log("lastSong")
	}
}
