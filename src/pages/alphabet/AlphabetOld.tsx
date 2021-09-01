import React, { useEffect, useState } from "react"
import Letters from "../../../public/assets/alphabet/Letters.json"

import Alphabet, { IAlphabet } from "../../components/alphabet/Alphabet"

const AlphabetOld = () => {
    const [olds, setOlds] = useState<Array<IAlphabet>>([])
    useEffect(() => {
        setOlds(Letters.letters.filter((item) => !!item.arabic))
    }, [])
    return (
        <div className="px-20 <sm:px-5 mt-5">
            <div className="font-bold text-2xl">老文字表</div>
            <div className="my-4 text-lg font-thin">
                字母表参照中国境内的哈萨克语字母列表, 由 @学哈语的小迟同学
                提供~
            </div>
            <Alphabet type="old" letters={olds} />
        </div>
    )
}

export default AlphabetOld
