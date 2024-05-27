import React from 'react'

export default function Button(props) {
    const { text, func } = props
    return (
    <button onClick={func} className="px-8 mx-auto py-4 mb-24 rounded-md border-[1px] bg-[#faa560] border-red-400 border-solid redShadow duration-300">
        <p className="text-slate-950 text-lg sm:text-xl md:text-2xl lg-text-3xl">{text}</p>
    </button>
    )
}
