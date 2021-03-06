import React, { Component } from "react"
import { match } from "react-router"
import $http from "../../axios"
import "./singerList.scss"
export default class SingerList extends Component<{ match: match<{ id: string }> }> {
	readonly state = {
		id: this.props.match.params.id,
		data: {
			singers: {
				list: {
					info: []
				}
			}
		}
	}
	render() {
		return (
			<div className="singerList">
				<>
					{this.state.data.singers.list.info.map((item: any) => (
						<li key={item.singerid}>
							<div className="rank_left">
								<img src={item.imgurl.replace("{size}", "400")} alt="" />
								<div>{item.singername}</div>
							</div>
							<div className="rank_right"></div>
						</li>
					))}
				</>
			</div>
		)
	}
	componentDidMount() {
		$http.get("/proxy/singer/list/?json=true&page=1&classid=" + this.state.id).then(data => {
			console.log(data)
			this.setState({ data })
		})
	}
}
