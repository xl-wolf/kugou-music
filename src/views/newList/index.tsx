import React, { useState, useEffect } from "react"
import { Carousel, WingBlank } from "antd-mobile"
import $http from "../../axios"
import "./index.scss"

function NewList() {
	const [songList, setList] = useState([])
	const [bannerList, setBanner] = useState([])
	useEffect(() => {
		getSongs()
	}, [])
	const getSongs = () => {
		$http.get("/proxy/?json=true").then((data: any) => {
			// console.log(data.data)
			setList(data.data)
			setBanner(data.banner)
		})
	}
	const getSongInfo = (songInfo: any) => {
		console.log(songInfo)
	}
	return (
		<div className="newList">
			<WingBlank>
				<Carousel autoplay={true} infinite>
					{bannerList.map((val: any) => (
						<a key={val.id} href="http://www.baidu.com" style={{ display: "inline-block", width: "100%" }}>
							<img
								src={val.imgurl}
								alt=""
								style={{ width: "100%" }}
								onLoad={() => {
									window.dispatchEvent(new Event("resize"))
								}}
							/>
						</a>
					))}
				</Carousel>
			</WingBlank>
			<ul>
				{songList.map((item: any) => (
					<li key={item.audio_id} onClick={() => getSongInfo(item)}>
						<div>{item.filename}</div>
						<div className="arrow" />
					</li>
				))}
			</ul>
		</div>
	)
}
export default NewList
