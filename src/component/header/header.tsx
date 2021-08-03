import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import { History, Location } from "history"
import "./header.scss"
import logo from "../../static/images/logo.png"
class header extends Component<{ history: History; location: Location }> {
	render() {
		return (
			<div className="header">
				<div className="logo" onClick={this.goNewList}>
					<img src={logo} alt="" />
				</div>
				<div className="search" onClick={this.goSearch}></div>
			</div>
		)
	}
	goNewList = () => this.props.history.push("/")

	goSearch = () => {
		console.log(this.props)
		const {
			history,
			location: { pathname }
		} = this.props
		pathname === "/search" ? history.goBack() : history.push("/search")
	}
}
export default withRouter(header as any)
