import React, { useEffect, useState } from "react"
import { VditorPreview } from "react-vditor"

const Home = () => {
    const [readme, setReadme] = useState("")

    useEffect(() => {
        ;(async () => {
            const res = await fetch(
                "https://cdn.jsdelivr.net/gh/HerbertHe/open-kazakh@main/README.md"
            )
            const text = await res.text()
            setReadme(text)
        })()
    }, [])
    return (
        <div className="px-20 <sm:px-5">
            {!!readme && <VditorPreview markdown={readme} />}
        </div>
    )
}

export default Home
