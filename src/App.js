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

  const friendArray = [] => {
  this.state.sort((a, b) => { return a, b })
};

var points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) { return a - b });

resetGame = () => {
  this.setState({ clicked: [], score: 0 })
};

highScore = () => {
  if (this.state.score > this.state.highscore) {
    this.setState({ highscore: this.state.highscore });
  }
};

handleOnClick = (id) => {
  console.log(id)
  const characterId = id;
  const alreadyClicked = this.state.clicked.indexOf(characterId) > -1;
  if (alreadyClicked) {
    console.log("This has already been clicked!");
    this.friendArray();
    this.resetGame();
  } else {
    const clicked = this.state.clicked;
    clicked.push(id);
    this.setState({
      clicked: clicked,
      score: this.state.score + 1
    });
    // () => {
    //   if (this.state.score === 12) {
    //     this.friendArray();
    //     this.resetGame();
    //   }
    // });
    console.log(this.state.clicked);
    this.friendArray();
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
          highscore={this.state.highscore}
          id={friend.id}
          key={friend.id}
          image={friend.image}
          handleOnClick={this.handleOnClick}
        />
      ))}
    </Wrapper>
  );
}

}


export default App;
