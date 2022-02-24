import React, { useEffect, useState } from "react"
import { VditorPreview } from "react-vditor"
import { getHapinDetailURL } from "../../utils/constants"

const Milestone = () => {
    const [readme, setReadme] = useState("")

    useEffect(() => {
        ;(async () => {
            const res = await fetch(getHapinDetailURL(`/milestone.md`))
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

export default Milestone
