import React, { FC } from "react"

import NavSubItem, { INavSubItem } from "./NavSubItem"

export interface INavItem extends INavSubItem {
    children?: Array<INavItem>
}

const NavItem: FC<INavItem> = ({ title, to, children }) => (
    <div className="px-4 h-full">
        {!!children && children.length !== 0 && (
            <div className="relative hover:(cursor-pointer) group">
                <div className="w-auto px-3 py-2 block">{title}</div>
                <ul className="absolute top-10 hidden w-200px bg-white border rounded group-hover:(flex flex-col justify-start items-start)">
                    {children.map((item) => (
                        <NavSubItem key={item.to} {...item} />
                    ))}
                </ul>
            </div>
        )}
        {(!children || children.length === 0) && (
            <NavSubItem title={title} to={to} />
        )}
    </div>
)

export default NavItem
