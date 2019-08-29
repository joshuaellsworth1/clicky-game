import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  state = {
    friends,
    score: 0,
    clicked: [],
    highscore: 0
  };

  friendArray = () => {
    this.state.friends.sort( (a,b) => {return 0.5 - Math.random()});
  }

  resetGame = () => {
    this.setState({
      clicked: [],
      score: 0
    })
  };

  highScore = () => {
    if(this.state.score > this.state.highscore) {
      this.setState({
        highscore: this.state.score
      });
    }
  };

  onClick = event => {
    const characterName = event.target.id;
    const clicked = this.state.clicked.indexOf(characterName) > -1;

    if(clicked) {
      this.friendArray();
      this.resetGame();
    } else {
      this.friendArray();
      this.setState({
        clicked: this.state.clicked(characterName),
        score: this.state.score + 1
      })
    }
  }



  // NEED TO ADD: Random sort function
  // Update when a card is clicked with onClick
  // When a card is clicked, check to see if it has been clicked before
  // If it has, you lose the game. Otherwise, increase the score and then call the random sort function

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            score={this.state.score}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }

}


export default App;
