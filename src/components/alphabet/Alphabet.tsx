import React, { FC } from "react"

interface ILetter {
    uppercase: string
    lowercase: string
}

export interface IAlphabet {
    letter?: ILetter
    arabic?: string
    ipa: string
    voice: string
}
export interface IAlphabetProps {
    type: "old" | "cyrillic"
    letters: Array<IAlphabet>
}

/**
 * 字母表容器
 */
const Alphabet: FC<IAlphabetProps> = ({ type, letters }) => (
    <ul
        className={`grid ${
            type === "old" ? `grid-cols-11` : "grid-cols-7"
        } <sm:(grid-cols-3)`}
    >
        {letters &&
            letters.map((item: IAlphabet) => {
                return (
                    <li
                        key={
                            type === "old"
                                ? item.arabic
                                : item.letter?.uppercase
                        }
                        className="my-4 py-2 px-4 hover:(bg-light-600 rounded cursor-pointer) flex flex-col justify-start items-center select-none"
                    >
                        {type === "cyrillic" && (
                            <div className="w-full flex flex-row justify-center items-end my-3">
                                <div className="text-35px mr-2 text-cyan-700 font-bold">
                                    {item.letter?.uppercase}
                                </div>
                                <div className="text-25px font-thin">
                                    {item.letter?.lowercase}
                                </div>
                            </div>
                        )}
                        {type === "old" && (
                            <div className="text-35px mr-2 text-cyan-700 font-bold my-3 kazakh-font">
                                {item.arabic}
                            </div>
                        )}
                        <div className="text-cyan-500">{item.ipa}</div>
                        {/* <div>{item.voice}</div> */}
                    </li>
                )
            })}
    </ul>
)

export default Alphabet
