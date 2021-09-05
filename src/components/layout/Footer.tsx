import React from "react"

const Footer = () => (
    <div className="w-full mt-5 p-5 flex flex-col justify-start items-center text-center border border-transparent border-t-light-800">
        <a href="https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral" className="flex flex-row items-center flex-wrap text-center">
            本网站由 <img src="/assets/又拍云_logo5.png" alt="又拍云logo" width="70" className="mx-2" />{" "}
            提供CDN加速/云存储服务
        </a>
        <span className="text-sm">
            Copyright &copy; 2021 Open Kazakh All Rights Reserved!
        </span>
    </div>
)

export default Footer
