import AnimatedLetter from '../AnimateLetters'
import { useState, useEffect} from 'react'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBootstrap, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import ShootingStar from '../ShootingStars'

const About = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetter letterClass={letterClass} strArray={['A', 'b', 'o', 'u', 't', ' ', ' m', 'e']} index={15} />
                </h1>
                <p>
                    I'm a very ambitious front-end developer looking for an entry role in IT company, with the oppotunity to work with the lattest technologies on challenging and diverse project. 
                </p>
                <p>
                    I'm a hard-working, eager to learn new things kind of guy. And I'm willing to face challenges to improve myself.
                </p>
                <p>
                    If I need to define myself in one sentence that would be an optimistic, a work enthusiast, book lover and tech-obsessed!
                </p>
            </div>

            <div className='stage-cube-container'>
                <ShootingStar />
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faBootstrap} color="#6610f2" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />                        
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About