import React from 'react';
import './App.css';

// Import assets
import Bot1 from './assets/robots/robot1.png';
import Bot2 from './assets/robots/robot2.png';
import Bot3 from './assets/robots/robot3.png';
import Bot4 from './assets/robots/robot4.png';
import Video from './assets/promo.mp4';
import SquareLogo from './assets/logos/square-logo.png';
import LongLogo from './assets/logos/long-logo.png';

function App() {
    const bots = [
        {
            name: 'Titan',
            description: 'A colossal defender built to take hits and shield allies.',
            image: Bot1,
        },
        {
            name: 'Shadow',
            description: 'A stealthy bot with lightning-fast reflexes.',
            image: Bot2,
        },
        {
            name: 'Blazer',
            description: 'A fiery powerhouse that deals massive damage.',
            image: Bot3,
        },
        {
            name: 'Cerebro',
            description: 'A strategic mastermind equipped with advanced AI.',
            image: Bot4,
        },
    ];

    return (
        <div className="app">
            {/* Header Section */}
            <header className="header">
                <div className="logo-container">
                    <img src={SquareLogo} alt="Square Logo" className="square-logo" />
                    <img src={LongLogo} alt="Long Logo" className="long-logo" />
                </div>
                <h1 className="title">Welcome to MinuteMech</h1>
                <p className="subtitle">
                    Battle-ready robots in your hands. Combine 3D printing and gaming for an epic experience.
                </p>
            </header>

            {/* Introduction Section */}
            <section className="intro">
                <h2 className="section-title">What is MinuteMech?</h2>
                <p className="section-description">
                    Imagine designing your own robotic gladiator, bringing it to life with 3D printing, and battling it in a futuristic virtual arena. MinuteMech merges reality and gaming to create the ultimate battle experience!
                </p>
                <video className="promo-video" controls>
                    <source src={Video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </section>

            {/* Featured Bots */}
            <section className="featured-bots">
                <h2 className="section-title">Meet the Featured Bots</h2>
                <div className="bot-grid">
                    {bots.map((bot, index) => (
                        <div key={index} className="bot-card">
                            <img src={bot.image} alt={bot.name} className="bot-image" />
                            <div className="bot-info">
                                <h3 className="bot-name">{bot.name}</h3>
                                <p className="bot-description">{bot.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* How It Works Section */}
            <section className="how-it-works">
                <h2 className="section-title">How It Works</h2>
                <ol className="steps-list">
                    <li>Download your robot’s 3D printable file or order a pre-printed version.</li>
                    <li>Scan your robot’s unique code to unlock it in the MinuteMech game.</li>
                    <li>Customize your robot with in-game upgrades and modifications.</li>
                    <li>Challenge other players in dynamic, strategy-based battles!</li>
                </ol>
                <button className="btn-primary">Get Started</button>
            </section>

            {/* Beta Sign-Up Section */}
            <section className="beta-signup">
                <h2 className="section-title">Join the Beta Program</h2>
                <p className="section-description">
                    Be the first to explore the MinuteMech universe. Sign up for the beta and claim your exclusive rewards!
                </p>
                <a
                    href="https://example.com/beta-signup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                >
                    Sign Up for Beta
                </a>
            </section>

            {/* Footer */}
            <footer className="footer">
                <p className="footer-text">© {new Date().getFullYear()} MinuteMech. All rights reserved.</p>
                <p className="footer-links">
                    <a href="#privacy-policy">Privacy Policy</a> | <a href="#terms-of-service">Terms of Service</a>
                </p>
            </footer>
        </div>
    );
}

export default App;
