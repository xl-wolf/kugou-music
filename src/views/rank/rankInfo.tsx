// import React, { Component } from "react"
import React, { useState, useEffect } from "react"
import { match } from "react-router-dom"
import $http from "../../axios"
import "./rankInfo.scss"
import { History } from "history"
interface Data {
	info: {
		rankname: string
		banner7url: string
	}
	songs: {
		list: Array<[]>
	}
}
function RankInfo(props: { match: match<{ id: string }>; history: History }) {
	const [data, setData] = useState<Data>({ info: { rankname: "", banner7url: "" }, songs: { list: [] } })
	const { id } = props.match.params
	useEffect(() => {
		$http.get("/proxy/rank/info/&json=true&page=1&rankid=" + id).then((data: any) => {
			setData(data)
		})
	}, [id])
	return (
		<div className="rankInfo">
			<div className="top">
				<div className="top_img">
					<img src={data.info.banner7url.replace("{size}", "400")} alt="" />
				</div>
				<div className="title_wrap">
					<div className="title_icon" onClick={() => props.history.goBack()}></div>
					<div className="title">{data.info.rankname}</div>
				</div>
			</div>
			<div className="list">
				<ul>
					{data.songs.list.map((item: any, index: number) => {
						return (
							<li key={item.audio_id}>
								<div className="song-name">
									<span>{index + 1} </span>
									{item.filename}
								</div>
								<div className="arrow"></div>
							</li>
						)
					})}
				</ul>
			</div>
		</div>
	)
}

export default RankInfo
