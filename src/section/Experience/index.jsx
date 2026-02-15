import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import picEx from "../../assets/Screenshot 2025-04-03 134409.png"
import picEx2 from "../../assets/Screenshot (2).png"
import { useState } from "react"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import FromattedDate from "../../components/FormattedDate"
import Picture from "../../components/Picture"
import TitleLink from "../../components/TitleLink"
import Material from "../../components/Material"
import Description from "../../components/Descrption"
import Tech from "../../components/Tech"


const Experience = () => {
    const [isMountEnter, setIsMountEnter] = useState(false)

    return (
        <div>
            <div className="text-primaryAccent font-medium">Experience</div>
            <div className={`grid grid-cols-[25%_75%] rounded-md px-2 py-6 transition-all ${isMountEnter['exp1'] ? "bg-orange-200" : ""}`}
                onMouseEnter={() => setIsMountEnter({ ['exp1']: true })}
                onMouseLeave={() => setIsMountEnter({ ['exp1']: false })}

            >
                <div>
                    <FromattedDate isHighlight={isMountEnter}>2023-2024</FromattedDate>
                    <Picture picture={picEx} title="Fullstack" />
                </div>
                <div className="grid gap-y-4">
                    <TitleLink isHighlight={isMountEnter} tile="Fullstack" link="https://github.com/churkan309/reactweb" />
                    <div className="flex gap-4 text-lg">
                        <Material icon={faGithub} link="https://github.com/churkan309/reactweb" />
                        <Material icon={faYoutube} link="https://www.youtube.com/@ChurkanKLAIKRUEA" />
                    </div>
                    <Description description="Designing and developing" />
                    <Tech isHighlight={isMountEnter} data={["React","Next","Tailwind"]} />
                </div>
            </div>
        </div>

    )
}

export default Experience