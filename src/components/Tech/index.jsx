const Tech = ({isHighlight,data}) => {
    return (
        <div className="flex gap-4 text-sm">
            {
                data.map((e,i)=>(
                    <div key={`${e}-Tech-${i}`} className={`rounded-md bg-primaryBase px-4 py-1 ${isHighlight['exp1'] ? "text-primaryBg" : ""}`}>{e}</div>
                ))
            }
        </div>
    )
}

export default Tech