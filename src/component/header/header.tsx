import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import { History, Location } from "history"
import "./header.scss"
import logo from "../../static/images/logo.png"
class header extends Component<{ history: History; location: Location }> {
	render() {
		return (
			<div className="header">
				<div className="logo" onClick={() => this.historyGo("/")}>
					<img src={logo} alt="" />
				</div>
				<div className="search" onClick={() => this.historyGo("/search")}></div>
			</div>
		)
	}
	historyGo = (route: string) => this.props.history.push(route)
}
export default withRouter(header as any)
