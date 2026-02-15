const FromattedDate = ({isHighlight,children}) => {
    return (
        <div>
            <span className={`text-sm ${isHighlight['exp1'] ? "text-primaryContent" : ""}`}>
                {children}
            </span>
        </div>
    )
}

export default FromattedDate