import React from 'react';
import './Profile.css';

function Home() {
    return (
        <div className="app-container">
            {/* Main content sections */}
            <div className="content-wrapper">
                <div className="left-section">
                    <h1 className="title">Software Engineer</h1>
                </div>
                <div className="right-section">
                    <div className="info-container">
                        <div className="info-item">
                            <h2>• Bachelor of Science (BS), Computer Science & Engineering</h2>
                            <p className="subtitle">University of Washington-Seattle</p>
                        </div>

                        <div className="info-item">
                            <h2>• Relevant Coursework:</h2>
                            <p className="subtitle">Distributed System, Data Structures, Algorithms Analysis, Database Management, Machine Learning, Research, Probability & Statistics, Parallelism, Computer Architecture</p>
                        </div>

                        <div className="info-item">
                            <h2>• Languages (Proficiency):</h2>
                            <p className="subtitle">Java, JavaScript, Scala, SQL, CSS, HTML, Python, PHP, C++, C</p>
                        </div>

                        <div className="info-item">
                            <h2>• Skills:</h2>
                            <p className="subtitle">Spring-Boot, Scala, JUnit, GraphQL, AI Prompt Engineering, Ajax, Bootstrap, jQuery, PyTorch, Linux</p>
                        </div>

                        <div className="info-item">
                            <h2>• Tools:</h2>
                            <p className="subtitle">Git, Dynatrace, Datadog, AWS Lambda, Splunk, ChatGPT, Claude, Terraform, Bootstrap</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer bar */}
            <div className="footer-bar">
                <div className="footer-left">
                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/sohrab-osmany/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="mailto:sohrab1osmany@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                            <i className="fa-solid fa-envelope"></i>
                        </a>
                    </div>
                    <div className="left-name">Soh</div>
                </div>
                <div className="footer-right">
                    <div className="right-name">rab</div>
                    <div className="nav-links">
                        <a href="/projects" className="projects-link">→ Projects.</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;