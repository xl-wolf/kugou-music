import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import $http from "../../axios"
import "./rank.scss"
function Rank() {
	const [rankList, setRank] = useState([])
	useEffect(() => {
		$http.get("/proxy/rank/list&json=true").then((data: any) => {
			console.log(data)
			setRank(data.rank.list)
		})
	}, [])
	return (
		<div className="rank">
			{rankList.map((item: any) => {
				return (
					<Link key={item.rankid} to={`/rankInfo/${item.rankid}`}>
						<div className="rank_left">
							<img src={item.imgurl.replace("{size}", "400")} alt="" />
							<div>{item.rankname}</div>
						</div>
						<div className="rank_right"></div>
					</Link>
				)
			})}
		</div>
	)
}
export default Rank
