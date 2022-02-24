import React, { FC } from "react"
import NavItem, { INavItem } from "./NavItem"

const navs: Array<INavItem> = [
    {
        title: "首页",
        to: "/"
    },
    {
        title: "字母表",
        to: "/alphabet",
        children: [
            {
                title: "老文字",
                to: "/alphabet/old"
            },
            {
                title: "西里尔字母",
                to: "/alphabet/cyrillic"
            }
        ]
    },
    {
        title: "Roadmap",
        to: "",
        children: [
            // {
            //     title: "国际音标 IPA",
            //     to: "/roadmap/ipa"
            // },
            // {
            //     title: "学习视频",
            //     to: "/roadmap/video"
            // },
            {
                title: "学习生态",
                to: "/roadmap/ecology"
            }
        ]
    },
    {
        title: "哈拼 Hapin",
        to: "",
        children: [
            {
                title: "哈拼简介",
                to: "/hapin/index"
            },
            {
                title: "研究背景",
                to: "/hapin/background"
            },
            {
                title: "输入方案",
                to: "/hapin/schema"
            },
            {
                title: "输入法支持",
                to: "/hapin/ime"
            },
            {
                title: "哈拼里程碑",
                to: "/hapin/milestone"
            }
        ]
    },
    {
        title: "开放生态",
        to: "",
        children: [
            {
                title: "贡献者",
                to: "/contributors"
            },
            {
                title: "GitHub",
                to: "https://github.com/HerbertHe/open-kazakh"
            }
        ]
    }
]

const Navs: FC = () => (
    <ul className="flex flex-row flex-wrap justify-start items-center <sm:(mt-3) bg-white">
        {navs.map((item) => (
            <NavItem key={item.title} {...item} />
        ))}
    </ul>
)

export default Navs
