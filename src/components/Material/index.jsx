import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub,faYoutube} from "@fortawesome/free-brands-svg-icons"

const Material = ({icon,link}) => {
    return (
        <div>
            <a href={link} target="_blank" className="hover:scale-110 transition-all"><FontAwesomeIcon icon={icon} /></a>
        </div>
    )
}

export default Material