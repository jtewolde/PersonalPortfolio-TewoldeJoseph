import React from 'react'
import '../pages/styling/Contact.css'

export default function Contact() {
    return (
        <div className="contact-page" id="contact">

            <div className="contact-container">

                <h1 className="contact-title">Contact</h1>

                <p className="contact-description">If you would like to get in touch with me, please fill out the form below or shoot me an email!</p>

                <div className="contact-info">

                    <form className="contact-form" action="https://getform.io/f/ajjjwrqa" method="POST">
                        <input type="text" name="name" placeholder="Name" />
                        <input type="email" name="email" placeholder="Email" />
                        <textarea name="message" placeholder="Message" />
                        <button type="submit" className="contact-button">Submit</button>
                    </form>

                </div>

            </div>

        </div>
            
    )

}