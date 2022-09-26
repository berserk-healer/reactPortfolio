import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import AnimateLetters from "../AnimateLetters"
import "./index.scss"
import ProfilePicture from "./ProfilePicture"


const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['L', 'e', 'o'];
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>  
                <span className={`${letterClass} _12`}>i,</span>  
                <br />
                <span className={`${letterClass} _13`}>I</span>  
                <span className={`${letterClass} _14`}>'m</span> 
                &nbsp;
                <AnimateLetters letterClass={letterClass}
                strArray={nameArray}
                index={15} />
                <br />
                <AnimateLetters letterClass={letterClass}
                strArray={jobArray}
                index={22} />
                <br />           
                </h1>
                <br />
                <br />
                <h2>FrontEnd Developer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <ProfilePicture />
        </div>
    )
}


export default Home