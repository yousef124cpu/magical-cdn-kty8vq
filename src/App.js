// Place your actual images and audio files in public/assets/
const alphabet = [
  { letter: "A", word: "Apple", image: "/assets/a.png", sound: "/assets/a.mp3" },
  { letter: "B", word: "Ball", image: "/assets/b.png", sound: "/assets/b.mp3" },
  // ... Add letters C-Z in this format
  { letter: "Z", word: "Zebra", image: "/assets/z.png", sound: "/assets/z.mp3" },
];
export default alphabet;
import React, { useState } from "react";
import "./App.css";
import AlphabetExplorer from "./AlphabetExplorer";
import GameTabs from "./GameTabs";

function App() {
  const [game, setGame] = useState("match");

  return (
    <div className="container">
      <header>
        <h1>Smart Learn</h1>
        <p>Learn English Letters A-Z With Fun Games!</p>
      </header>
      <AlphabetExplorer />
      <GameTabs game={game} setGame={setGame} />
      <footer>
        <p>&copy; 2025 Smart Learn. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
import React, { useState } from "react";
import alphabet from "./alphabet";

function AlphabetExplorer() {
  const [index, setIndex] = useState(0);
  const letter = alphabet[index];
  const playSound = () => new Audio(letter.sound).play();

  return (
    <section className="explorer">
      <h2>Explore The Alphabet</h2>
      <div className="letter-display">
        <div className="letter-card">{letter.letter}</div>
        <img src={letter.image} alt={letter.word} className="letter-image" />
        <div className="letter-word">{letter.word}</div>
        <button onClick={playSound}>🔊 Hear "{letter.letter}"</button>
      </div>
      <button onClick={() => setIndex((index - 1 + alphabet.length) % alphabet.length)}>Previous</button>
      <button onClick={() => setIndex((index + 1) % alphabet.length)}>Next</button>
    </section>
  );
}

export default AlphabetExplorer;

