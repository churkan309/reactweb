import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
const TitleLink = ({ isHighlight, tile, link }) => {
    if (!link) return (
        <div className={`text-primaryAccent ${isHighlight['exp1'] ? "text-blue-950" : ""}`}>
            {tile}
            <FontAwesomeIcon className={`text-xs -rotate-45 transition-all ${isHighlight['exp1'] ? "translate-x-1 -translate-y-1" : ""}`} icon={faArrowRight} />
        </div>
    )
    return (
        <div className={`text-primaryAccent ${isHighlight['exp1'] ? "text-blue-950" : ""}`}>
            <a href={link} target="_blank">
                {tile}
                <FontAwesomeIcon className={`text-xs -rotate-45 transition-all ${isHighlight['exp1'] ? "translate-x-1 -translate-y-1" : ""}`} icon={faArrowRight} />
            </a>
        </div>
    )
}

export default TitleLink