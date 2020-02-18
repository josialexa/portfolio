import React, {useState} from 'react'
import {toast} from 'react-toastify'
import axios from 'axios'
import resume from '../../JReisWest_Resume_Dev.pdf'
import './Contact.css'

export default function Contact() {
    const [state, setState] = useState({
        from: '',
        subject: '',
        text: ''
    })

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const send = () => {
        const {from, subject, text} = state

        axios.post('/api/mail', {from, subject, text})
            .then(res => toast.success(res.data.message))
            .catch(err => toast.error(err.response.data.message))
    }

    return (
        <div className='contact-container'>
            <div className='contact-link-badges-container'>
                <h1 className='contact-h1'>Find me here...</h1>
                <div className='contact-link-badges'>
                    <a href='https://www.github.com/josialexa' rel='noopener noreferrer' className='contact-link' target='_blank'><i class='fab fa-github' /></a>
                    <a href='https://www.linkedin.com/in/josi-reis-west/' rel='noopener noreferrer' className='contact-link' target='_blank'><i class='fab fa-linkedin' /></a>
                    <a href='https://twitter.com/josirw_dev' rel='noopener noreferrer' className='contact-link' target='_blank'><i class='fab fa-twitter-square' /></a>
                </div>
            </div>
            <div className='contact-resume-container'>
                <h1 className='contact-h1'>...Or download my <a className='contact-resume' href={resume} download>resume</a>...</h1>
            </div>
            <div className='contact-email-form'>
                <h1 className='contact-h1'>...Or email me your information!</h1>
                <div className='contact-email-form-inputs'>
                    <input name='from' placeholder='Your Email Address' onChange={handleChange} />
                    <input name='subject' placeholder='Subject' onChange={handleChange} />
                </div>
                <textarea name='text' placeholder='Email content' onChange={handleChange} />
                <button onClick={send}>Send!</button>
            </div>
        </div>
    )
}