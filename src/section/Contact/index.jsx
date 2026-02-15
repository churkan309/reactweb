import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareInstagram, faSquareLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
    return(
        <div className='flex items-end gap-4 text-2xl'>
            <FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle duration-300' icon={faSquareInstagram} />
            <FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle duration-300' icon={faSquareLinkedin} />
            <FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle duration-300' icon={faSquareGithub} />
          </div>
    )
}

export default Contact