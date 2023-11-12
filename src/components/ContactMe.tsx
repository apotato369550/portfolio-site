import './scss/ContactMe.scss'
import emailjs from '@emailjs/browser';
import { push, set, DatabaseReference } from 'firebase/database'
import { contactFormDatabase } from '../config/firebase'
import { ChangeEvent, useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faMapMarker } from '@fortawesome/free-solid-svg-icons'

function ContactMe() {
    const form = useRef<HTMLFormElement | null>(null);
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ message, setMessage ] = useState("");
    const [ alert, setAlert ] = useState(false);

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value);
    }


    const submitContactForm = (event:any) => {
        event.preventDefault();

        console.log(name, email, message);
        saveMessages(name, email, message);
        clearFields();

        // just need to test it
        if (form.current) {
            emailjs.sendForm('service_koj1i0n', 'template_w5lnknx', form.current, 'ZyU2lX-2oXqVHSbz3')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        }

        setAlert(true);
        setTimeout(() => {
            setAlert(false);
        }, 3000);
    }

    const saveMessages = (name: string, email: string, message: string) => {
        let newContactForm: DatabaseReference = push(contactFormDatabase);

        set(newContactForm, {
            name: name,
            email: email,
            message: message
        })
    }

    const clearFields = () => {
        setName("");
        setEmail("");
        setMessage("");
    }
    return (
        <section className="contact-form">
            <h1>Contact Me!</h1>
            <p>Feel free to get in touch with me using the form below or through the provided contact information.</p>
            <p className="alert" style={{ display: alert ? 'block' : 'none' }}>Your message has been sent!</p>

            <form ref={form} id="contact-form">
                <div className="user-info">
                    <input type="text" id="name" name="name" placeholder="Your Name Here" value={name} onChange={handleNameChange} required />
                    <input type="email" id="email" name="email" placeholder="Your Email Here" value={email} onChange={handleEmailChange} required />
                </div>
                
                <div className="user-message">
                    <textarea id="message" name="message" rows={5} required  placeholder="Your message here..." value={message} onChange={handleMessageChange}></textarea>
                </div>

                <button type="submit" onClick={submitContactForm}>Send Message</button>

                <div className="contact-info">
                    <h2>Other Contact Information</h2>
                    <ul>
                        <li><FontAwesomeIcon icon={faEnvelope} /> johnandresyap510@gmail.com</li>
                        <li><FontAwesomeIcon icon={faPhone} /> (0915) 044 3019</li>
                        <li><FontAwesomeIcon icon={faMapMarker} /> Cebu City, Cebu, Philippines</li>
                        
                    </ul>
                </div>
            </form>
        </section>
    )
}

export default ContactMe