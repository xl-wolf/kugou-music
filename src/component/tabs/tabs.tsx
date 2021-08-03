import React, { Component } from "react"
import { Tabs } from "antd-mobile"
import "./tabs.scss"
import Newlist from "../../views/newList/index"
import HotList from "../../views/hot/hotList"
import Rank from "../../views/rank/rank"
import Slist from "../../views/singer/list"
export default class index extends Component<any, any> {
	constructor(props: any) {
		super(props)
		this.state = {
			tabs: [
				{ title: "新歌", sub: "1" },
				{ title: "排行", sub: "2" },
				{ title: "热歌", sub: "3" },
				{ title: "歌手", sub: "4" }
			],
			initialPage: JSON.parse(sessionStorage.getItem("tabInitPage") as string) || 0
		}
	}
	render() {
		const { tabs, initialPage } = this.state
		return (
			<div className="tabs">
				<Tabs tabs={tabs} initialPage={initialPage} animated={false} swipeable={true} onChange={(tab, index) => this.tabChange(tab, index)}>
					<Newlist />
					<Rank />
					<HotList />
					<Slist />
				</Tabs>
			</div>
		)
	}
	tabChange(tab: any, index: number) {
		console.log("onChange", index, tab)
		sessionStorage.setItem("tabInitPage", "" + index)
	}
}
