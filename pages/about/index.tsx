import aboutStyles from "../../styles/About.module.css"
import Image from "next/image"
import profilePic from "../../public/bkek_photo.jpg"

const About: React.FC<{}> = () => {
    return (
        <div className={aboutStyles.container}>
            <Image 
                src={profilePic}
                alt={"Picture of BK and EK"}
                layout={"responsive"}
            />
            <p>
                Welcome to our blog!
                We launched this site very recently, and we're looking forward to start making some awesome content.
                We started this blog mainly to share our memorable moments together along with our thoughts on fun, important, or inspiring topics.
            </p>

        </div>
    )
}


export default About