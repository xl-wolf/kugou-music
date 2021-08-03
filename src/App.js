import React from "react"
import Header from "./component/header/header"
import Player from "./component/player/player"

export default (props) => {
	return <><Header /> {props.children} <Player direction={['left', 'right', 'down'][parseInt(Math.random() * 3)]} /></>
}
