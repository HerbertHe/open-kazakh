import React, { useEffect } from "react"
import Cyrillic from "../../../assets/alphabet/Cyrillic.json"

interface ILetter {
    uppercase: string
    lowercase: string
}

interface IAlphabetCyrillic {
    letter: ILetter
    ipa: string
    voice: string
}

const AlphabetCyrillic = () => (
    <div className="px-20 <sm:px-5 mt-5">
        <div className="font-bold text-2xl">西里尔字母表</div>
        <ul className="grid grid-cols-7 <sm:(grid-cols-3)">
            {Cyrillic.letters.map((item: IAlphabetCyrillic) => (
                <li
                    key={item.letter.uppercase}
                    className="my-4 py-2 px-4 hover:(bg-light-600 rounded cursor-pointer) flex flex-col justify-start items-center select-none"
                >
                    <div className="w-full flex flex-row justify-center items-end my-3">
                        <div className="text-35px mr-2">
                            {item.letter.uppercase}
                        </div>
                        <div className="text-25px font-thin">
                            {item.letter.lowercase}
                        </div>
                    </div>
                    <div>{item.ipa}</div>
                    {/* <div>{item.voice}</div> */}
                </li>
            ))}
        </ul>
    </div>
)

export default AlphabetCyrillic
