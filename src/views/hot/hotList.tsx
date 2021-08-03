import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./hotList.scss"
import $http from "../../axios"
export default () => {
	const [hotList, setList] = useState([])
	useEffect(() => {
		$http.get("/proxy/plist/index&json=true").then((data: any) => {
			console.log(data)
			setList(data.plist.list.info)
		})
	}, [])
	return (
		<div className="hot_list">
			<ul>
				{hotList.map((item: any) => (
					<li key={item.specialid}>
						<Link to={`/hotInfo/${item.specialid}`}>
							<div className="left">
								<img src={item.imgurl.replace("{size}", "400")} alt="" />
							</div>
							<div className="right">
								<div className="title">{item.specialname}</div>
								<div className="listen_num">
									<span className="listen_icon" />
									<span className="listen_count">{item.playcount}</span>
								</div>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
