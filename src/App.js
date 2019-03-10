import React, { Component } from 'react';
import CharacterCard from "./components/CharacterCard";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import NavBar from "./components/NavBar";
import characters from "./characters.json";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

class App extends Component {

  state = {
    characters,
    clickedCharacters: [],
    score: 0,
    highScore: 0,
    status: ""
  };

  clickImage = id => {
    const character = id;
    const characterClicked = this.state.clickedCharacters.indexOf(character) > -1;

    shuffleArray(this.state.characters)

    if (characterClicked) {
      this.setState({ clickedCharacters: [], score: 0, status:  "Game Over! Click to play again.", characters: this.state.characters });
    } else {
      const newScore = this.state.score + 1;
      const newHighScore = Math.max(newScore, this.state.highScore);
      if (newScore === 9) {
        this.setState({highScore: 9, score: 0, status: "You Won! Click to play again.", clickedCharacters: []});
        return;
      }
  
      this.setState({status: '', score: newScore, highScore: newHighScore, clickedCharacters: [character, ...this.state.clickedCharacters]});
    }
  };

  render() {
    return (
    <div>
      <NavBar
        score = {this.state.score}
        highScore={this.state.highScore}
        status={this.state.status}
      />
      <Jumbotron />
      <div className= "container row">
      {this.state.characters.map(characters => (
        <CharacterCard
            clickImage={this.clickImage}
            id={characters.id}
            key={characters.id}
            image={characters.image}
        />

      ))}
      </div>
      <Footer />
      </div>
    );
  }
}

export default App;
