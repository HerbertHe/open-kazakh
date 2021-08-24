import React, { useEffect, useState } from "react"
import { VditorPreview } from "react-vditor"

const Contributors = () => {
    const [contributors, setContributors] = useState("")

    useEffect(() => {
        ;(async () => {
            const res = await fetch(
                "https://cdn.jsdelivr.net/gh/HerbertHe/open-kazakh@main/Contributors.md"
            )
            const text = await res.text()
            setContributors(text)
        })()
    }, [])
    return (
        <div className="px-20 <sm:px-5">
            {!!contributors && <VditorPreview markdown={contributors} />}
        </div>
    )
}

export default Contributors
