import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    clicked: []
  };

  characterArray = () => {
    this.state.friends.sort( (a,b) => {return 0.5 - Math.random()});
  }

  resetGame = ()

  onClick = event => {
    const characterName = event.target.id;
    const clicked = this.state.clicked.indexOf(characterName) > -1;

    if(clicked) {
      this.sort.characterArray();

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
