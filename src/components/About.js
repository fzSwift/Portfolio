import React from 'react';
import './About.css';

function About() {
    return (
        <section className="about">
            <h2>About Me</h2>
            <div className="about-content">
                <p>I'm Chidiebele Benjamin Amechi, a passionate junior software developer focused on web and game development. I'm pursuing a BSc in Computer Science at Academic City University College. Looking Forward to an aspiring cybersecurity and software development professional with hands-on experience in web development and teaching. Skilled in programming, database management, and cloud technologies. Developed educational tools like a video game to assist children in learning math and spelling. Passionate about leveraging technical knowledge to create impactful solutions and pursue growth in cybersecurity and software engineering fields.</p>

                <div className="about-section">
                    <h3>Skills</h3>
                    <ul className="skills-list">
                        <li><strong>Programming Languages:</strong> Python, JavaScript, C++, C#</li>
                        <li><strong>Web Development:</strong> Node.js, React, PostgreSQL, Express</li>
                        <li><strong>Tools/Technologies:</strong> Wireshark, Packet Tracer, Unreal Engine, Unity</li>
                        <li><strong>Cloud:</strong> AWS (beginner level)</li>
                        <li><strong>Database Management:</strong> Oracle SQL, PostgreSQL, MongoDB</li>
                    </ul>
                </div>

                <div className="about-section">
                    <h3>Interests</h3>
                    <ul>
                        <li>Software Development – Passionate about building web applications and interactive systems using Node.js, React, and PostgreSQL.</li>
                        <li>Game Development – Interested in designing educational and entertainment-based games using Unity and Unreal Engine.</li>
                        <li>Cybersecurity and Networking – Keen on exploring network security, penetration testing, and packet analysis using Wireshark and Packet Tracer.</li>
                        <li>Cloud Technologies – Enthusiastic about expanding knowledge in cloud infrastructure, with a focus on AWS and cloud-based applications.</li>
                    </ul>
                </div>

                <div className="about-section">
                    <h3>Goals</h3>
                    <ul>
                        <li><strong>Short-Term:</strong> Continue honing skills in full-stack development, cloud technologies, and game development by working on impactful projects and obtaining certifications (CCNA, AWS Security, etc.).</li>
                        <li><strong>Long-Term:</strong> Establish a career as a software engineer, contributing to innovative solutions in game design, web development, or cybersecurity. Aim to develop and lead large-scale tech projects, blending creativity with strong technical expertise.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default About;