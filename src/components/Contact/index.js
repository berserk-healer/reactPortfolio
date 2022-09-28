import AnimatedLetter from '../AnimateLetters'
import './index.scss'
import {useState, useEffect, useRef} from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()
    

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'gmail',
                'template_52o4h6x',
                refForm.current,
                's3mGNjXtf6cdTSCgc'
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send message, please try again!')
                }
            )
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetter 
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c',' t', ' ', 'm',' e']} 
                            index={15}
                        />
                    </h1> 
                    <p>
                        I'm interested in front-end developer positions. However, if you have other request or question, contact me using the form below.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type="email" name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input type='text' name='subject' placeholder='Subject' />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Hoang Thanh Lieu,
                    <br />
                    Vietnam,
                    <br />
                    Le Duc Tho, My Dinh 2,<br />
                    Hanoi <br />
                    <span>thanhlieu9620@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <iframe 
                    src="https://www.google.com/maps/embed/v1/place?q=place_id:EkPEkC4gTMOqIMSQ4bupYyBUaOG7jSwgTeG7uSDEkMOsbmggMiwgVOG7qyBMacOqbSwgSMOgIE7hu5lpLCBWaWV0bmFtIi4qLAoUChIJXXcq7bpUNDERS2cGkNDTq0cSFAoSCTvnxbi6VDQxEcRmuqaNMPMV&key={API-KEY}" 
                    width="100%" height='100%' frameBorder='0' style={{border: 0}} allowFullScreen="" aria-hidden="false" tabIndex="0" title='Google Map'
                    ></iframe>
                </div>
            </div>
        </>
    )
}
export default Contact