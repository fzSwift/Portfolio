import React from 'react';
import './Contact.css'; // Import a CSS file for styling

function Contact() {
    return (
        <footer className="contact"> {/* Added className for styling */}
            <h2>Contact Me</h2>
            <div className="contact-info"> {/* Added a div for better structure */}
                <p>
                    <a href="mailto:amechichidi@gmail.com" className="contact-link">amechichidi@gmail.com</a>
                </p>
                <p>
                    <a href="https://github.com/fzSwift" target="_blank" rel="noopener noreferrer" className="contact-link">fzSwift</a>
                </p>
                {/* Add other contact methods here (e.g., LinkedIn, Twitter) */}
            </div>
        </footer>
    );
}

export default Contact;