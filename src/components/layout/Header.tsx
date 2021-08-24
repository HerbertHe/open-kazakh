import React from "react"
import Navs from "../navigator/Navs"

const Header = () => (
    <div className="flex flex-row justify-between items-center bg-[rgba(255,255,255,0.9)] fixed top-0 left-0 right-0 w-full border p-4 px-20 select-none z-9999 <sm:(p-4)">
        <h1 className="text-xl">Open Kazakh</h1>
        <Navs />
    </div>
)

export default Header
