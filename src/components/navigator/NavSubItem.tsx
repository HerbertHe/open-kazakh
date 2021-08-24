import React, { FC } from "react"
import { NavLink } from "react-router-dom"

export interface INavSubItem {
    title: string
    to: string
}

const OutRegExp = /http(s)?\:/

const NavSubItem: FC<INavSubItem> = ({ title, to }) => (
    <li className="w-full">
        {!OutRegExp.test(to) && (
            <NavLink
                className="w-full text-black no-underline hover:(bg-light-600 rounded) px-3 py-2 block"
                to={to}
                activeClassName="border border-transparent border-b-black bg-light-600 rounded"
                exact
            >
                {title}
            </NavLink>
        )}
        {OutRegExp.test(to) && (
            <a
                className="w-full text-black no-underline hover:(bg-light-600 rounded) px-3 py-2 block"
                href={to}
            >
                {title}
            </a>
        )}
    </li>
)

export default NavSubItem
