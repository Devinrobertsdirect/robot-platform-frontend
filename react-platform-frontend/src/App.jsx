import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Carousel styles
import './App.css';
import { motion } from 'framer-motion'; // Advanced animations

// Import assets
import LongLogo from './assets/logos/long-logo.png';
import Bot1 from './assets/bots/bot1.png';
import Bot2 from './assets/bots/bot2.png';
import Bot3 from './assets/bots/bot3.png';
import Bot4 from './assets/bots/bot4.png';
import Bot5 from './assets/bots/bot5.png';
import Bot6 from './assets/bots/bot6.png';
import Bot7 from './assets/bots/bot7.png';
import Bot8 from './assets/bots/bot8.png';
import Bot9 from './assets/bots/bot9.png';
import Bot10 from './assets/bots/bot10.png';
import Bot11 from './assets/bots/bot11.png';
import Bot12 from './assets/bots/bot12.png';
import Character1 from './assets/characters/stump.png';
import Character2 from './assets/characters/titan.png';
import Character3 from './assets/characters/sushi.png';
import Character4 from './assets/characters/cerebro.png';
import Character5 from './assets/characters/bolt.png';
import Character6 from './assets/characters/kao.png';
import Character7 from './assets/characters/atlas.png';
import Character8 from './assets/characters/nico.png';
import Character9 from './assets/characters/spruce.png';
import Character10 from './assets/characters/sprout.png';
import Character11 from './assets/characters/ace.png';
import Character12 from './assets/characters/nova.png';
import Character13 from './assets/characters/nala.png';
import Step1 from './assets/how-it-works/step1.png';
import Step2 from './assets/how-it-works/step2.png';
import Step3 from './assets/how-it-works/step3.png';
import Step4 from './assets/how-it-works/step4.png';

function App() {
    const [activeCharacter, setActiveCharacter] = useState(null);

    // Characters for "Meet the Team"
    const characters = [
        { name: 'Stump', description: 'The gruff shopkeeper.', image: Character1 },
        { name: 'Titan', description: 'The booming announcer.', image: Character2 },
        { name: 'Sushi', description: 'The fiery trainer.', image: Character3 },
        { name: 'Cerebro', description: 'The tactical strategist.', image: Character4 },
        { name: 'Bolt', description: 'The speedy navigator.', image: Character5 },
        { name: 'Kao', description: 'The enthusiastic rewards bot.', image: Character6 },
        { name: 'Atlas', description: 'The historian of the world.', image: Character7 },
        { name: 'Nico', description: 'The friendly matchmaker.', image: Character8 },
        { name: 'Spruce', description: 'The creative bot designer.', image: Character9 },
        { name: 'Sprout', description: 'The reliable repair specialist.', image: Character10 },
        { name: 'Ace', description: 'The calm and helpful guide.', image: Character11 },
        { name: 'Nova', description: 'The dynamic event host.', image: Character12 },
        { name: 'Nala', description: 'The wise and cryptic advisor.', image: Character13 },
    ];

    // Bots for carousel
    const bots = [
        { name: 'Bot 1', image: Bot1 },
        { name: 'Bot 2', image: Bot2 },
        { name: 'Bot 3', image: Bot3 },
        { name: 'Bot 4', image: Bot4 },
        { name: 'Bot 5', image: Bot5 },
        { name: 'Bot 6', image: Bot6 },
        { name: 'Bot 7', image: Bot7 },
        { name: 'Bot 8', image: Bot8 },
        { name: 'Bot 9', image: Bot9 },
        { name: 'Bot 10', image: Bot10 },
        { name: 'Bot 11', image: Bot11 },
        { name: 'Bot 12', image: Bot12 },
    ];

    return (
        <div className="app">
            {/* Header */}
            <header className="header">
                <motion.div
                    className="container"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <img src={LongLogo} alt="Game Logo" className="long-logo" />
                    <h1 className="main-title">Welcome to Our World</h1>
                    <p className="main-subtitle">
                        Explore the bots, meet the guides, and dive into an adventure like no other.
                    </p>
                </motion.div>
            </header>

            {/* How It Works */}
            <section className="how-it-works">
                <motion.div
                    className="container"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="section-title">How It Works</h2>
                    <div className="steps-grid">
                        <div className="step">
                            <img src={Step1} alt="Step 1" />
                            <h3>Create Your Bot</h3>
                            <p>Design and 3D print your custom bot companion.</p>
                        </div>
                        <div className="step">
                            <img src={Step2} alt="Step 2" />
                            <h3>Scan the QR Code</h3>
                            <p>Register your bot in the game by scanning its unique QR code.</p>
                        </div>
                        <div className="step">
                            <img src={Step3} alt="Step 3" />
                            <h3>Log In</h3>
                            <p>Access your personalized dashboard and prepare for battle.</p>
                        </div>
                        <div className="step">
                            <img src={Step4} alt="Step 4" />
                            <h3>Enter the Arena</h3>
                            <p>Test your bot’s skills in thrilling battles!</p>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Bots Carousel */}
            <section className="bot-carousel">
                <div className="container">
                    <h2 className="section-title">Meet the Bots</h2>
                    <Carousel
                        autoPlay
                        infiniteLoop
                        interval={3000}
                        showThumbs={false}
                        showStatus={false}
                    >
                        {bots.map((bot, index) => (
                            <div key={index} className="carousel-slide">
                                <img src={bot.image} alt={bot.name} />
                                <p className="bot-name">{bot.name}</p>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </section>

            {/* Meet the Team */}
            <section className="meet-the-team">
                <motion.div
                    className="container"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="section-title">Meet Your Guides</h2>
                    <div className="team-grid">
                        {characters.map((character, index) => (
                            <motion.div
                                key={index}
                                className="character-card"
                                whileHover={{ scale: 1.05, y: -5 }}
                                transition={{ duration: 0.5 }}
                                onClick={() => setActiveCharacter(character)}
                            >
                                <img src={character.image} alt={character.name} />
                                <h3>{character.name}</h3>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Character Modal */}
            {activeCharacter && (
                <div className="character-modal">
                    <div className="modal-overlay" onClick={() => setActiveCharacter(null)}></div>
                    <motion.div
                        className="modal-content"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <img src={activeCharacter.image} alt={activeCharacter.name} />
                        <h3>{activeCharacter.name}</h3>
                        <p>{activeCharacter.description}</p>
                        <button onClick={() => setActiveCharacter(null)}>Close</button>
                    </motion.div>
                </div>
            )}

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <p>© 2024 Game Name. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default App;
