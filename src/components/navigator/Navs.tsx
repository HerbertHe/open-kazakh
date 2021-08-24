import React, { FC } from "react"
import NavItem, { INavItem } from "./NavItem"

// export interface INavsprops {
//     navs: Array<INavItem>
// }

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
        title: "贡献者",
        to: "/contributors"
    },
    {
        title: "GitHub",
        to: "https://github.com/HerbertHe/open-kazakh"
    }
]

const Navs: FC = () => (
    <ul className="flex flex-row justify-start items-center">
        {navs.map((item) => (
            <NavItem key={item.to} {...item} />
        ))}
    </ul>
)

export default Navs
