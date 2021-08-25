import React from "react"
import Letters from "../../../assets/alphabet/Letters.json"

import Alphabet, { IAlphabet } from "../../components/alphabet/Alphabet"

const AlphabetCyrillic = () => (
    <div className="px-20 <sm:px-5 mt-5">
        <div className="font-bold text-2xl">西里尔字母表</div>
        <Alphabet
            type="cyrillic"
            letters={Letters.letters as Array<IAlphabet>}
        />
    </div>
)

export default AlphabetCyrillic
