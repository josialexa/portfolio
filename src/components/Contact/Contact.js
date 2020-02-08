import React, {useState} from 'react'
import {toast} from 'react-toastify'
import axios from 'axios'
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
        console.log(state)

        axios.post('/api/mail', {from, subject, text})
            .then(res => toast.success(res.data.message))
            .catch(err => {
                console.dir(err.response)
                toast.error(err.response.data.message)
            })
    }

    return (
        <div className='contact-container'>
            <div>

            </div>
            <div className='contact-email-form'>
                <div className='contact-email-form-inputs'>
                    <input name='from' placeholder='Your Email Address' onChange={handleChange} />
                    <input name='subject' placeholder='Subject' onChange={handleChange} />
                </div>
                <textarea name='text' placeholder='Email content' onChange={handleChange} />
                <button onClick={send}>Send!</button>
            </div>
            <div>

            </div>
        </div>
    )
}