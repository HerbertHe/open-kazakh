import React, { useRef, useState } from "react"
import { transformToArabic, transformToHapin } from "hapin-utils"

const REPL = () => {
    const [easy, setEasy] = useState(false)
    const [dir, setDir] = useState("hapin")

    const transformer = () => {
        const hapinDOM = document.getElementById(
            "input-hapin"
        ) as HTMLTextAreaElement
        const arabicDOM = document.getElementById(
            "input-arabic"
        ) as HTMLTextAreaElement

        if (dir === "hapin") {
            hapinDOM.value = transformToHapin(arabicDOM.value, easy)
        } else {
            arabicDOM.value = transformToArabic(hapinDOM.value)
        }
    }

    return (
        <div className="px-20 pt-10 <sm:(px-5 pt-5)">
            <form className="w-full flex flex-col justify-start items-center">
                <textarea
                    dir="rtl"
                    id="input-arabic"
                    className="text-lg w-full border border-dark-900 border-solid p-4 rounded-md read-only:bg-gray-100 resize-none overflow-y-auto"
                    placeholder={dir === "hapin" ? "在此输入老文字" : ""}
                    disabled={dir !== "hapin"}
                    rows={5}
                ></textarea>
                <div className="w-full flex flex-row justify-between items-center <sm:flex-col my-4">
                    <button
                        type="button"
                        className="bg-dark-900 text-white p-4 rounded-md my-2"
                        onClick={() => transformer()}
                    >
                        {dir === "hapin" ? "转化到哈拼 👇" : "转化到老文字 👆"}
                    </button>
                    <button
                        type="button"
                        className="bg-dark-900 text-white p-4 rounded-md my-2"
                        onClick={() =>
                            setDir(dir === "hapin" ? "arabic" : "hapin")
                        }
                    >
                        切换转化方向👆👇
                    </button>
                    {dir === "hapin" ? (
                        <div className="w-[118.8px]">
                            <input
                                type="checkbox"
                                name="初学者模式"
                                id="beginner"
                                className="mx-2"
                                onChange={() => setEasy(!easy)}
                            />
                            <label
                                htmlFor="beginner"
                                className="text-lg select-none"
                            >
                                初学者模式
                            </label>
                        </div>
                    ) : (
                        <div className="w-[118.8px]"></div>
                    )}
                </div>

                <textarea
                    id="input-hapin"
                    className="text-lg w-full border border-dark-900 border-solid p-4 rounded-md read-only:bg-gray-100 resize-none overflow-y-auto"
                    placeholder={dir === "hapin" ? "" : "在此输入哈拼"}
                    disabled={dir === "hapin"}
                    rows={5}
                ></textarea>
            </form>
        </div>
    )
}

export default REPL
