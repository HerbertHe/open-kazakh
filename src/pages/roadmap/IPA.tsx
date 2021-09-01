import React from "react"
import { VditorPreview } from "react-vditor"

const RoadmapIPA = () => (
    <div className="px-20 <sm:px-5 mt-5">
        <div className="font-bold text-2xl">国际音标 IPA</div>
        <VditorPreview markdown="国际音标的内容" />
    </div>
)

export default RoadmapIPA
