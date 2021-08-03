import React, { Component } from "react"
import $http from "../../axios"
import Info from "../../component/info/info"
import { match } from "react-router-dom"
export default class hotInfo extends Component<{ match: match<{ id: string }> }> {
	state = {
		id: this.props.match.params.id,
		data: {},
		isShow: false
	}
	render() {
		return <div className="info">{this.state.isShow ? <Info data={this.state.data} /> : <div />}</div>
	}
	componentDidMount() {
		// console.log(this.props.match.params.id)
		$http.get("/proxy/plist/list/?json=true&page=1&specialid=" + this.state.id).then(data => {
			console.log(data)
			this.setState({ data }, () => {
				this.setState({
					isShow: true
				})
			})
		})
	}
}
